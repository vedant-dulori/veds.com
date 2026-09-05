"use server";

import { createAdminClient } from "@/lib/supabase/admin";

export type UploadBucket = "moments" | "hero-images";

export type UploadResult =
  | { success: true; publicUrl: string; path: string }
  | { success: false; error: string };

const MAX_FILE_BYTES = 50 * 1024 * 1024; // 50MB
const ALLOWED_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/gif",
  "video/mp4",
  "video/webm",
  "video/quicktime",
];

export async function uploadMedia(
  bucket: UploadBucket,
  formData: FormData
): Promise<UploadResult> {
  const file = formData.get("file");

  if (!(file instanceof File)) {
    return { success: false, error: "No file provided." };
  }
  if (!ALLOWED_TYPES.includes(file.type)) {
    return { success: false, error: `Unsupported file type: ${file.type}` };
  }
  if (file.size > MAX_FILE_BYTES) {
    return { success: false, error: "File exceeds 50MB limit." };
  }

  const supabase = createAdminClient();
  const ext = file.name.split(".").pop();
  const path = `${crypto.randomUUID()}.${ext}`;

  const { error } = await supabase.storage
    .from(bucket)
    .upload(path, file, { contentType: file.type, upsert: false });

  if (error) {
    return { success: false, error: error.message };
  }

  const { data } = supabase.storage.from(bucket).getPublicUrl(path);
  return { success: true, publicUrl: data.publicUrl, path };
}
