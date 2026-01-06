import {createClient} from "https://esm.sh/@supabase/supabase-js";
console.log(createClient);

// Supabase client
const supabaseUrl = "https://zmdhtjgucjllannxjnhv.supabase.co";
const supabaseKey = 'sb_publishable_fv6KS1qad9LXi0CIApEIEQ_EN22A_B7';

const client = supabase.createClient(supabaseUrl, supabaseKey);

export default client;
