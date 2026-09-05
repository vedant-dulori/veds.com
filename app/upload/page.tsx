import { MediaUploader } from "@/components/media-uploader"

export default function UploadPage() {
  return (
    <div className="mx-auto max-w-md px-4 py-16">
      <h1 className="mb-6 text-xl font-semibold">Test upload</h1>
      <MediaUploader bucket="moments" />
    </div>
  )
}
