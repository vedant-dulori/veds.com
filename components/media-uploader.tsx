"use client"

import { useState, useTransition } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { uploadMedia, type UploadBucket } from "@/lib/supabase/upload"

interface MediaUploaderProps {
  bucket: UploadBucket
  onUploaded?: (publicUrl: string) => void
}

export function MediaUploader({ bucket, onUploaded }: MediaUploaderProps) {
  const [file, setFile] = useState<File | null>(null)
  const [publicUrl, setPublicUrl] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [isPending, startTransition] = useTransition()

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
    <div className="flex flex-col gap-3">
      <Input
        type="file"
        accept="image/*,video/*"
        onChange={(e) => setFile(e.target.files?.[0] ?? null)}
      />
      <Button onClick={handleUpload} disabled={!file || isPending}>
        {isPending ? "Uploading..." : "Upload"}
      </Button>
      {error && <p className="text-sm text-destructive">{error}</p>}
      {publicUrl && (
        <p className="break-all text-sm text-muted-foreground">
          Uploaded: {publicUrl}
        </p>
      )}
    </div>
  )
}
