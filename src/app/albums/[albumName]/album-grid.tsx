"use client"

import { SearchResult } from "@/app/gallery/page";
import { CloudinaryImage } from "@/components/cloudinary-image";
import { ImageGrid } from "@/components/image-grid";

export default async function AlbumGrid({images }: { images : SearchResult[]}) {

    return (
        <div>
        <ImageGrid 
            images={images}
            getImage={(imageData: SearchResult) => {
                return (<CloudinaryImage
                key={imageData.public_id}
                imageData={imageData}
                width="400"
                height="300"
                alt="an image"
                />
                );
            }}   
        />
        </div>    
    );
}