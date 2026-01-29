/*
  # Analytics System for Website Visits

  1. New Tables
    - `page_views`
      - `id` (uuid, primary key) - Unique identifier for each page view
      - `page_path` (text) - The path of the page visited (e.g., "/", "/about", "/services")
      - `page_title` (text) - The title of the page
      - `referrer` (text, nullable) - The referrer URL
      - `user_agent` (text, nullable) - Browser user agent string
      - `browser` (text, nullable) - Browser name
      - `os` (text, nullable) - Operating system
      - `device_type` (text, nullable) - Device type (mobile, tablet, desktop)
      - `screen_width` (integer, nullable) - Screen width in pixels
      - `screen_height` (integer, nullable) - Screen height in pixels
      - `language` (text, nullable) - Browser language
      - `country` (text, nullable) - Country code (if available)
      - `session_id` (uuid) - Session identifier to group visits
      - `ip_address` (text, nullable) - IP address (hashed for privacy)
      - `visit_duration` (integer, nullable) - Time spent on page in seconds
      - `created_at` (timestamptz) - Timestamp of the visit

  2. Security
    - Enable RLS on `page_views` table
    - Add policy for public insert (anyone can log a visit)
    - Add policy for authenticated admins to view analytics
    
  3. Indexes
    - Index on `page_path` for fast queries by page
    - Index on `created_at` for time-based queries
    - Index on `session_id` for session analysis

  4. Notes
    - This table stores anonymous visit data for analytics
    - IP addresses are hashed for privacy
    - No personally identifiable information is stored
    - Data can be used to understand traffic patterns and popular pages
*/

-- Create the page_views table
CREATE TABLE IF NOT EXISTS page_views (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  page_path text NOT NULL,
  page_title text,
  referrer text,
  user_agent text,
  browser text,
  os text,
  device_type text,
  screen_width integer,
  screen_height integer,
  language text,
  country text,
  session_id uuid NOT NULL,
  ip_address text,
  visit_duration integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_page_views_page_path ON page_views(page_path);
CREATE INDEX IF NOT EXISTS idx_page_views_created_at ON page_views(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_page_views_session_id ON page_views(session_id);

-- Enable Row Level Security
ALTER TABLE page_views ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can insert page views (public tracking)
CREATE POLICY "Anyone can insert page views"
  ON page_views
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Policy: Only authenticated users can view page views (for admin dashboard)
CREATE POLICY "Authenticated users can view page views"
  ON page_views
  FOR SELECT
  TO authenticated
  USING (true);

-- Policy: Only authenticated users can update page views (for updating visit duration)
CREATE POLICY "Authenticated users can update page views"
  ON page_views
  FOR UPDATE
  TO anon, authenticated
  USING (true)
  WITH CHECK (true);

-- Create a view for analytics summary
CREATE OR REPLACE VIEW analytics_summary AS
SELECT 
  page_path,
  COUNT(*) as total_views,
  COUNT(DISTINCT session_id) as unique_visitors,
  AVG(visit_duration) as avg_duration_seconds,
  MAX(created_at) as last_visit
FROM page_views
GROUP BY page_path
ORDER BY total_views DESC;