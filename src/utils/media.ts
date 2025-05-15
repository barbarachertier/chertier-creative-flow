export const getImagePath = (imageName: string) =>
  `${import.meta.env.BASE_URL}projects/${encodeURIComponent(imageName)}`;

export const getVideoPath = (videoName: string) =>
  `${import.meta.env.BASE_URL}projects/${encodeURIComponent(videoName)}`;
