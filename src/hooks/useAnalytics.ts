import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { supabase } from '../lib/supabase';

interface PageViewData {
  page_path: string;
  page_title: string;
  referrer: string;
  user_agent: string;
  browser: string;
  os: string;
  device_type: string;
  screen_width: number;
  screen_height: number;
  language: string;
  country?: string;
  session_id: string;
  visit_duration: number;
}

function getSessionId(): string {
  let sessionId = sessionStorage.getItem('analytics_session_id');
  if (!sessionId) {
    sessionId = crypto.randomUUID();
    sessionStorage.setItem('analytics_session_id', sessionId);
  }
  return sessionId;
}

function getBrowserInfo(): { browser: string; os: string; device_type: string } {
  const ua = navigator.userAgent;

  let browser = 'Unknown';
  if (ua.includes('Firefox')) browser = 'Firefox';
  else if (ua.includes('Chrome')) browser = 'Chrome';
  else if (ua.includes('Safari') && !ua.includes('Chrome')) browser = 'Safari';
  else if (ua.includes('Edge')) browser = 'Edge';
  else if (ua.includes('Opera') || ua.includes('OPR')) browser = 'Opera';

  let os = 'Unknown';
  if (ua.includes('Windows')) os = 'Windows';
  else if (ua.includes('Mac')) os = 'macOS';
  else if (ua.includes('Linux')) os = 'Linux';
  else if (ua.includes('Android')) os = 'Android';
  else if (ua.includes('iOS') || ua.includes('iPhone') || ua.includes('iPad')) os = 'iOS';

  let device_type = 'Desktop';
  if (/Mobi|Android/i.test(ua)) device_type = 'Mobile';
  else if (/Tablet|iPad/i.test(ua)) device_type = 'Tablet';

  return { browser, os, device_type };
}

async function getCountry(): Promise<string | undefined> {
  try {
    const response = await fetch('https://ipapi.co/json/', {
      signal: AbortSignal.timeout(3000),
    });
    if (response.ok) {
      const data = await response.json();
      return data.country_name || data.country_code;
    }
  } catch (error) {
    console.warn('Could not fetch country data:', error);
  }
  return undefined;
}

export function useAnalytics() {
  const location = useLocation();
  const pageViewIdRef = useRef<string | null>(null);
  const startTimeRef = useRef<number>(Date.now());

  useEffect(() => {
    const sessionId = getSessionId();
    const { browser, os, device_type } = getBrowserInfo();

    const trackPageView = async () => {
      const country = await getCountry();

      const pageViewData: Partial<PageViewData> = {
        page_path: location.pathname,
        page_title: document.title,
        referrer: document.referrer || '',
        user_agent: navigator.userAgent,
        browser,
        os,
        device_type,
        screen_width: window.screen.width,
        screen_height: window.screen.height,
        language: navigator.language,
        country,
        session_id: sessionId,
        visit_duration: 0,
      };

      try {
        const { data, error } = await supabase
          .from('page_views')
          .insert([pageViewData])
          .select('id')
          .single();

        if (error) {
          console.error('Error tracking page view:', error);
        } else if (data) {
          pageViewIdRef.current = data.id;
          startTimeRef.current = Date.now();
        }
      } catch (error) {
        console.error('Error tracking page view:', error);
      }
    };

    trackPageView();

    return () => {
      if (pageViewIdRef.current) {
        const duration = Math.floor((Date.now() - startTimeRef.current) / 1000);

        supabase
          .from('page_views')
          .update({ visit_duration: duration })
          .eq('id', pageViewIdRef.current)
          .then(() => {
            pageViewIdRef.current = null;
          })
          .catch((error) => {
            console.error('Error updating visit duration:', error);
          });
      }
    };
  }, [location.pathname]);
}
