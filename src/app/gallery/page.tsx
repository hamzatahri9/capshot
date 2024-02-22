import UploadButton from "./upload-button";
import cloudinary  from "cloudinary";
import { CloudinaryImage } from "../../components/cloudinary-image";
import { ForceRefresh } from "@/components/force-refresh";
import { ImageGrid } from "@/components/image-grid";
import GalleryGrid from "./gallery-grid";

export type SearchResult = {
    public_id: string;
    tags: string[];
}

export default async function GalleryPage() {
    const results = (await cloudinary.v2.search
     .expression('resource_type:image')
     .sort_by("created_at",'desc')
     .max_results(30)
     .with_field("tags")
     .execute()) as {resources : SearchResult[]}; 

    return (
    <section> 
        <ForceRefresh/>
        <div className="flex flex-col gap-20">
            <div className="flex justify-between">
            <h1 className="text-4xl font-bold">Gallery</h1>
            <UploadButton/>  
            </div>
            <GalleryGrid images={results.resources} />
        </div>
    </section>
    
    );
}