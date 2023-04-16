
import { createClient } from "@supabase/supabase-js";


export const mybase = createClient(process.env.REACT_APP_URL, process.env.REACT_APP_API_KEY);
