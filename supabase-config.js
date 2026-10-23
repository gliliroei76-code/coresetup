// ===================================================================
//  הגדרות Supabase לאתר CoreSetup
//
//  הדביקו כאן את שני הפרטים מ-Supabase:
//  Project Settings → API (או Data API / API Keys)
//
//  ⚠️ רק את המפתח הציבורי (anon public / Publishable key).
//  לעולם לא את המפתח service_role / secret — הוא עוקף את כל ההגנות
//  ואסור שיופיע בקוד של אתר.
// ===================================================================

window.SUPABASE_CONFIG = {
  // לדוגמה: 'https://abcdefghijklmnop.supabase.co'
  url: 'https://gpxbptilevqpcckjcwtm.supabase.co',

  // לדוגמה: 'sb_publishable_...' או מפתח anon ארוך שמתחיל ב-'eyJ...'
  anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdweGJwdGlsZXZxcGNja2pjd3RtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTE0NzY4OTgsImV4cCI6MjEwNzA1Mjg5OH0.JH1bMTGYGOlj2khnxz8xSMiAteugHwOGQ1P4R9eThcY'
};
