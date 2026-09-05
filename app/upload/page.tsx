import { MediaUploader } from "@/components/media-uploader"

export default function UploadPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="mx-auto max-w-md px-4">
        <h1 className="text-2xl font-bold">Test upload</h1>
        <p className="mt-1 text-sm text-gray-400">Uploads to the "moments" Supabase Storage bucket.</p>
        <div className="mt-6">
          <MediaUploader bucket="moments" />
        </div>
      </div>
    </main>
  )
}
