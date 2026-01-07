export type ProjectType = "long" | "short";
export type VideoType = "youtube" | "vimeo" | "direct" | "iframe" | "gdrive";

export type Project = {
  id: string;
  type: ProjectType;
  title: string;
  subtitle?: string;
  tags?: string[];
  video: {
    videoType: VideoType;
    url: string; // youtube/vimeo link OR direct mp4 OR iframe URL OR gdrive share link
  };
};

export const projects: Project[] = [
  {
    id: "p1",
    type: "long",
    title: "POV: You've learned a new skill",
    subtitle: "Video Edit",
    tags: ["Long Form", "Story", "Cinematic"],
    video: {
      videoType: "youtube",
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    }
  },
  {
    id: "p2",
    type: "short",
    title: "Reel Edit – High Impact Hook",
    subtitle: "Short Form",
    tags: ["Reels", "Fast Cuts", "Captions"],
    video: {
      videoType: "vimeo",
      url: "https://vimeo.com/76979871"
    }
  },
  {
    id: "p3",
    type: "short",
    title: "Direct MP4 Showcase",
    subtitle: "Short Form",
    tags: ["Direct URL"],
    video: {
      videoType: "direct",
      url: "https://www.w3schools.com/html/mov_bbb.mp4"
    }
  },
  {
    id: "p4",
    type: "long",
    title: "Google Drive Video (Preview Embed)",
    subtitle: "Long Form",
    tags: ["GDrive"],
    video: {
      videoType: "gdrive",
      url: "https://drive.google.com/file/d/FILE_ID/view?usp=sharing"
    }
  },
  {
    id: "p5",
    type: "short",
    title: "Custom Iframe Embed",
    subtitle: "Embed",
    tags: ["Iframe"],
    video: {
      videoType: "iframe",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    }
  }
];
