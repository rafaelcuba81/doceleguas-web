import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { useAuth } from '../contexts/AuthContext';
import { BarChart3, Users, Eye, Monitor, Globe, Clock, LogOut } from 'lucide-react';

interface AnalyticsSummary {
  page_path: string;
  total_views: number;
  unique_visitors: number;
  avg_duration_seconds: number;
  last_visit: string;
}

interface PageView {
  id: string;
  page_path: string;
  page_title: string;
  browser: string;
  os: string;
  device_type: string;
  language: string;
  country?: string;
  session_id: string;
  visit_duration: number;
  created_at: string;
}

interface Stats {
  totalViews: number;
  uniqueVisitors: number;
  avgDuration: number;
  topPages: AnalyticsSummary[];
  recentViews: PageView[];
  deviceStats: { [key: string]: number };
  browserStats: { [key: string]: number };
  countryStats: { [key: string]: number };
}

export default function AnalyticsPage() {
  const [stats, setStats] = useState<Stats>({
    totalViews: 0,
    uniqueVisitors: 0,
    avgDuration: 0,
    topPages: [],
    recentViews: [],
    deviceStats: {},
    browserStats: {},
    countryStats: {},
  });
  const [loading, setLoading] = useState(true);
  const [dateRange, setDateRange] = useState<'today' | 'week' | 'month' | 'all'>('week');
  const { signOut, user } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  useEffect(() => {
    fetchAnalytics();
  }, [dateRange]);

  const getDateFilter = () => {
    const now = new Date();
    switch (dateRange) {
      case 'today':
        return new Date(now.setHours(0, 0, 0, 0)).toISOString();
      case 'week':
        return new Date(now.setDate(now.getDate() - 7)).toISOString();
      case 'month':
        return new Date(now.setDate(now.getDate() - 30)).toISOString();
      default:
        return new Date('2000-01-01').toISOString();
    }
  };

  const fetchAnalytics = async () => {
    setLoading(true);
    try {
      const dateFilter = getDateFilter();

      const { data: pageViews, error } = await supabase
        .from('page_views')
        .select('*')
        .gte('created_at', dateFilter)
        .order('created_at', { ascending: false });

      if (error) throw error;

      if (pageViews) {
        const uniqueSessions = new Set(pageViews.map((v) => v.session_id));
        const totalDuration = pageViews.reduce((acc, v) => acc + (v.visit_duration || 0), 0);

        const pagePathCounts: { [key: string]: { views: number; sessions: Set<string>; duration: number } } = {};
        const deviceCounts: { [key: string]: number } = {};
        const browserCounts: { [key: string]: number } = {};
        const countryCounts: { [key: string]: number } = {};

        pageViews.forEach((view) => {
          if (!pagePathCounts[view.page_path]) {
            pagePathCounts[view.page_path] = { views: 0, sessions: new Set(), duration: 0 };
          }
          pagePathCounts[view.page_path].views += 1;
          pagePathCounts[view.page_path].sessions.add(view.session_id);
          pagePathCounts[view.page_path].duration += view.visit_duration || 0;

          deviceCounts[view.device_type || 'Unknown'] = (deviceCounts[view.device_type || 'Unknown'] || 0) + 1;
          browserCounts[view.browser || 'Unknown'] = (browserCounts[view.browser || 'Unknown'] || 0) + 1;
          if (view.country) {
            countryCounts[view.country] = (countryCounts[view.country] || 0) + 1;
          }
        });

        const topPages: AnalyticsSummary[] = Object.entries(pagePathCounts)
          .map(([path, data]) => ({
            page_path: path,
            total_views: data.views,
            unique_visitors: data.sessions.size,
            avg_duration_seconds: data.views > 0 ? data.duration / data.views : 0,
            last_visit: pageViews.find((v) => v.page_path === path)?.created_at || '',
          }))
          .sort((a, b) => b.total_views - a.total_views);

        setStats({
          totalViews: pageViews.length,
          uniqueVisitors: uniqueSessions.size,
          avgDuration: pageViews.length > 0 ? totalDuration / pageViews.length : 0,
          topPages,
          recentViews: pageViews.slice(0, 10),
          deviceStats: deviceCounts,
          browserStats: browserCounts,
          countryStats: countryCounts,
        });
      }
    } catch (error) {
      console.error('Error fetching analytics:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatDuration = (seconds: number) => {
    if (seconds < 60) return `${Math.round(seconds)}s`;
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.round(seconds % 60);
    return `${minutes}m ${remainingSeconds}s`;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('es-ES', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Cargando analíticas...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-4xl font-bold text-gray-900">Analíticas del Sitio Web</h1>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">{user?.email}</span>
              <button
                onClick={handleSignOut}
                className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
              >
                <LogOut className="h-4 w-4" />
                Cerrar Sesión
              </button>
            </div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setDateRange('today')}
              className={`px-4 py-2 rounded-lg ${
                dateRange === 'today' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              Hoy
            </button>
            <button
              onClick={() => setDateRange('week')}
              className={`px-4 py-2 rounded-lg ${
                dateRange === 'week' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              Última Semana
            </button>
            <button
              onClick={() => setDateRange('month')}
              className={`px-4 py-2 rounded-lg ${
                dateRange === 'month' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              Último Mes
            </button>
            <button
              onClick={() => setDateRange('all')}
              className={`px-4 py-2 rounded-lg ${
                dateRange === 'all' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              Todo
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Eye className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Visitas</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalViews.toLocaleString()}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-3 bg-green-100 rounded-lg">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Visitantes Únicos</p>
                <p className="text-2xl font-bold text-gray-900">{stats.uniqueVisitors.toLocaleString()}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-3 bg-purple-100 rounded-lg">
                <Clock className="h-6 w-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Duración Promedio</p>
                <p className="text-2xl font-bold text-gray-900">{formatDuration(stats.avgDuration)}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-3 bg-orange-100 rounded-lg">
                <BarChart3 className="h-6 w-6 text-orange-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Páginas Totales</p>
                <p className="text-2xl font-bold text-gray-900">{stats.topPages.length}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <BarChart3 className="h-5 w-5 mr-2" />
              Páginas Más Visitadas
            </h2>
            <div className="space-y-4">
              {stats.topPages.map((page, index) => (
                <div key={page.page_path} className="flex items-center justify-between border-b pb-3">
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">
                      {index + 1}. {page.page_path === '/' ? 'Inicio' : page.page_path}
                    </p>
                    <p className="text-sm text-gray-600">
                      {page.unique_visitors} visitantes únicos · {formatDuration(page.avg_duration_seconds)} promedio
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold text-blue-600">{page.total_views}</p>
                    <p className="text-xs text-gray-500">visitas</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <Monitor className="h-5 w-5 mr-2" />
              Dispositivos y Navegadores
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-medium text-gray-700 mb-3">Por Dispositivo</h3>
                <div className="space-y-2">
                  {Object.entries(stats.deviceStats).map(([device, count]) => (
                    <div key={device} className="flex items-center justify-between">
                      <span className="text-gray-600">{device}</span>
                      <div className="flex items-center">
                        <div className="w-32 bg-gray-200 rounded-full h-2 mr-3">
                          <div
                            className="bg-blue-600 h-2 rounded-full"
                            style={{ width: `${(count / stats.totalViews) * 100}%` }}
                          ></div>
                        </div>
                        <span className="font-medium text-gray-900 w-12 text-right">{count}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-medium text-gray-700 mb-3">Por Navegador</h3>
                <div className="space-y-2">
                  {Object.entries(stats.browserStats).map(([browser, count]) => (
                    <div key={browser} className="flex items-center justify-between">
                      <span className="text-gray-600">{browser}</span>
                      <div className="flex items-center">
                        <div className="w-32 bg-gray-200 rounded-full h-2 mr-3">
                          <div
                            className="bg-green-600 h-2 rounded-full"
                            style={{ width: `${(count / stats.totalViews) * 100}%` }}
                          ></div>
                        </div>
                        <span className="font-medium text-gray-900 w-12 text-right">{count}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <Globe className="h-5 w-5 mr-2" />
            Visitas por País
          </h2>
          {Object.keys(stats.countryStats).length > 0 ? (
            <div className="space-y-3">
              {Object.entries(stats.countryStats)
                .sort(([, a], [, b]) => b - a)
                .map(([country, count]) => (
                  <div key={country} className="flex items-center justify-between border-b pb-3 last:border-0">
                    <div className="flex items-center flex-1">
                      <Globe className="h-4 w-4 text-blue-500 mr-3" />
                      <span className="font-medium text-gray-900">{country}</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-48 bg-gray-200 rounded-full h-2 mr-3">
                        <div
                          className="bg-blue-600 h-2 rounded-full"
                          style={{ width: `${(count / stats.totalViews) * 100}%` }}
                        ></div>
                      </div>
                      <span className="font-bold text-gray-900 w-16 text-right">{count}</span>
                      <span className="text-xs text-gray-500 ml-2 w-12 text-right">
                        ({Math.round((count / stats.totalViews) * 100)}%)
                      </span>
                    </div>
                  </div>
                ))}
            </div>
          ) : (
            <p className="text-gray-500 text-center py-4">
              No hay datos de países disponibles aún. Los datos comenzarán a recopilarse con las nuevas visitas.
            </p>
          )}
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <Clock className="h-5 w-5 mr-2" />
            Visitas Recientes
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Página
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    País
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Dispositivo
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Navegador
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Duración
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Fecha
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {stats.recentViews.map((view) => (
                  <tr key={view.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {view.page_path}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {view.country || '-'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{view.device_type}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{view.browser}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {formatDuration(view.visit_duration)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {formatDate(view.created_at)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
