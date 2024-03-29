"use client"

import { CloudinaryImage } from "../../components/cloudinary-image";
import { ImageGrid } from "@/components/image-grid";
import { SearchResult } from "./page";

export default async function GalleryGrid({images }: { images : SearchResult[]}) {

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