"use client";

import ReactPlayer from "react-player";
import { gdriveToPreview } from "@/lib/utils";

export default function VideoEmbed({
  videoType,
  url
}: {
  videoType: "youtube" | "vimeo" | "direct" | "iframe" | "gdrive";
  url: string;
}) {
  if (videoType === "iframe") {
    return (
      <div className="aspect-[9/16] w-full overflow-hidden rounded-2xl bg-black shadow-soft">
        <iframe
          className="h-full w-full"
          src={url}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded video"
        />
      </div>
    );
  }

  if (videoType === "gdrive") {
    const preview = gdriveToPreview(url);
    return (
      <div className="aspect-[9/16] w-full overflow-hidden rounded-2xl bg-black shadow-soft">
        <iframe
          className="h-full w-full"
          src={preview}
          allow="autoplay"
          allowFullScreen
          title="Google Drive video"
        />
      </div>
    );
  }

  // react-player supports YouTube, Vimeo, mp4 URLs, etc.
  return (
    <div className="aspect-[9/16] w-full overflow-hidden rounded-2xl bg-black shadow-soft">
      <ReactPlayer
        url={url}
        width="100%"
        height="100%"
        controls
        playsinline
      />
    </div>
  );
}
