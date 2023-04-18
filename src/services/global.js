
import { createClient } from "@supabase/supabase-js";


export const mybase = createClient("https://pqfiwahrarbivadfpoix.supabase.co", process.env.REACT_APP_API_KEY);

