import { createClient } from '@supabase/supabase-js';
import { PUBLIC_SUPABASE_URL } from '$env/static/public';
import { SUPABASE_PRIVATE_KEY } from '$env/static/private';

// This client uses the private key and must ONLY be imported into 
// +page.server.js or API route (+server.js) files.
export const db = createClient(PUBLIC_SUPABASE_URL, SUPABASE_PRIVATE_KEY);