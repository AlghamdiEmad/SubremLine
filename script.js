const SUPABASE_URL = "https://fwhorvnrzsyoruubixxh.supabase.co";

const SUPABASE_ANON_KEY = "sb_publishable_CejjLxjtIFCUVDnH0lRnUg_xfnV7BCW";

const { createClient } = supabase;

const db = createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);

console.log("Supabase Connected");
