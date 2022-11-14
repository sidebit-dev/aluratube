import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = "https://sjuapaavmxsiosamqtid.supabase.co";
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNqdWFwYWF2bXhzaW9zYW1xdGlkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgzODc5NDEsImV4cCI6MTk4Mzk2Mzk0MX0.sTul3FiASfWyHrlwIVUMCP8-PYZ3fsM4M3BXtnMP6ug";
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

export function videoService() {
    return {
        getAllVideos() {
            return supabase.from("video")
                    .select("*");
        }
    }
}