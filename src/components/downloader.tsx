import { SearchResult } from "@/app/gallery/page";

export  default async function downloadImage({ image }: { image: SearchResult }) {
  const baseUrl = "https://res.cloudinary.com/T-T/image/upload";
  const imageUrl = `${baseUrl}/${image.public_id}`;

  const downloadURI = (uri: string) => {
    const anchor = document.createElement('a');
    anchor.href = uri;
    anchor.download = ""; // You can specify a filename here if desired
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };

  // Trigger download
  downloadURI(imageUrl);
}
