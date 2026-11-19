const SUPABASE_URL = "https://fwhorvnrzsyoruubixxh.supabase.co";

const SUPABASE_ANON_KEY = "sb_publishable_CejjLxjtIFCUVDnH0lRnUg_xfnV7BCW";

const { createClient } = supabase;

const db = createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);

console.log("Supabase Connected");
const postContent = document.getElementById("post-content");
const postImage = document.getElementById("post-image");
const publishBtn = document.getElementById("publish-btn");

publishBtn.addEventListener("click", () => {
    console.log(postContent.value);
    console.log(postImage.files[0]);
});
