export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  tag: string;
  summary: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "static-vs-live",
    title: "Why this site stays static while the SE demo goes live elsewhere",
    date: "2026-03-20",
    tag: "Architecture",
    summary:
      "A short note on splitting the public site, GitHub Pages mirror, and speech-enhancement inference surface.",
  },
  {
    slug: "research-threads",
    title: "Research threads I want this site to carry in public",
    date: "2026-03-20",
    tag: "Research",
    summary:
      "A public-safe outline of the topics that matter most right now: speech enhancement, multimodal perception, and robust interaction.",
  },
  {
    slug: "worktree-notes",
    title: "Parallel worktrees for faster frontend iteration",
    date: "2026-03-20",
    tag: "Workflow",
    summary:
      "A compact explanation of why isolated branches and worktrees matter when the live demo evolves faster than the public site.",
  },
];
