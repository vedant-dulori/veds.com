"use client"

import { useState, useTransition } from "react"
import { UploadCloud, Loader2, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { uploadMedia, type UploadBucket } from "@/lib/supabase/upload"

interface MediaUploaderProps {
  bucket: UploadBucket
  onUploaded?: (publicUrl: string) => void
}

export function MediaUploader({ bucket, onUploaded }: MediaUploaderProps) {
  const [file, setFile] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [publicUrl, setPublicUrl] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [isPending, startTransition] = useTransition()

  function handleFileChange(selected: File | null) {
    setFile(selected)
    setPublicUrl(null)
    setError(null)
    setPreviewUrl(selected ? URL.createObjectURL(selected) : null)
  }

  function handleUpload() {
    if (!file) return
    setError(null)

    const formData = new FormData()
    formData.set("file", file)

    startTransition(async () => {
      const result = await uploadMedia(bucket, formData)
      if (result.success) {
        setPublicUrl(result.publicUrl)
        onUploaded?.(result.publicUrl)
      } else {
        setError(result.error)
      }
    })
  }

  return (
    <div className="rounded-lg bg-[#1f1f1f] p-6">
      <label
        htmlFor="media-upload-input"
        className={cn(
          "flex flex-col items-center justify-center gap-3 rounded-md border border-dashed border-gray-700 px-6 py-10 text-center transition-colors",
          "hover:border-gray-500 cursor-pointer",
        )}
      >
        {previewUrl ? (
          file?.type.startsWith("video/") ? (
            <video src={previewUrl} className="max-h-48 rounded-md" controls />
          ) : (
            <img src={previewUrl} alt="Selected preview" className="max-h-48 rounded-md object-contain" />
          )
        ) : (
          <UploadCloud className="h-8 w-8 text-gray-500" />
        )}
        <div>
          <p className="text-sm font-medium text-gray-100">
            {file ? file.name : "Click to choose a photo or video"}
          </p>
          <p className="mt-1 text-xs text-gray-500">JPEG, PNG, WebP, GIF, MP4, WebM, MOV — up to 50MB</p>
        </div>
        <input
          id="media-upload-input"
          type="file"
          accept="image/*,video/*"
          className="hidden"
          onChange={(e) => handleFileChange(e.target.files?.[0] ?? null)}
        />
      </label>

      <Button
        onClick={handleUpload}
        disabled={!file || isPending}
        className="mt-4 w-full bg-[#E50914] text-white hover:bg-[#B81D24] disabled:bg-gray-700 disabled:text-gray-400"
      >
        {isPending ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Uploading...
          </>
        ) : (
          "Upload"
        )}
      </Button>

      {error && <p className="mt-3 text-sm text-red-500">{error}</p>}

      {publicUrl && (
        <div className="mt-3 flex items-start gap-2 rounded-md bg-green-950/40 p-3 text-sm text-green-400">
          <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0" />
          <span className="break-all">{publicUrl}</span>
        </div>
      )}
    </div>
  )
}
