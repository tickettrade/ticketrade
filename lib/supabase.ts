import { createClient } from '@supabase/supabase-js';

let supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
if (supabaseUrl.endsWith('/rest/v1/')) {
  supabaseUrl = supabaseUrl.slice(0, -9);
} else if (supabaseUrl.endsWith('/rest/v1')) {
  supabaseUrl = supabaseUrl.slice(0, -8);
}

const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// Check if actual configuration keys have been provided
const isConfigured = 
  supabaseUrl && 
  supabaseUrl !== 'https://your-project-id.supabase.co' && 
  supabaseAnonKey && 
  supabaseAnonKey !== '' && 
  supabaseAnonKey !== 'your-anon-key-here';

export const supabase = isConfigured 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

/**
 * Inserts a new lead into the waitlist.
 * If Supabase is not configured yet, it gracefully falls back to a mock database simulation.
 */
export async function insertWaitlist(fullName: string, phone: string) {
  if (supabase) {
    const { data, error } = await supabase
      .from('waitlist')
      .insert([{ full_name: fullName, phone_number: phone }]);
    return { data, error };
  } else {
    // Graceful offline mock delay
    await new Promise((resolve) => setTimeout(resolve, 850));
    console.log('Mock Waitlist Submission:', { full_name: fullName, phone_number: phone });
    return { data: { full_name: fullName, phone_number: phone, mock: true }, error: null };
  }
}
