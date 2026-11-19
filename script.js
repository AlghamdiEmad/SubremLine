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

async function uploadImage() {
    const image = postImage.files[0];

    const fileName = Date.now() + "-" + image.name;

    const { data, error } = await db.storage
        .from("posts")
        .upload(fileName, image);

    console.log("DATA:", data);
    console.log("ERROR:", error);
}

publishBtn.addEventListener("click", () => {
    uploadImage();
});
