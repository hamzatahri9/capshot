import cloudinary  from "cloudinary";
import { ForceRefresh } from "@/components/force-refresh";
import AlbumGrid from "./album-grid";
import { SearchResult } from "@/app/gallery/page";

export default async function GalleryPage({params:{ albumName }}: {params: {albumName : string}}) {
    const results = (await cloudinary.v2.search
     .expression(`resource_type:image AND folder=${albumName}`)
     .sort_by("created_at",'desc')
     .max_results(30)
     .with_field("tags")
     .execute()) as {resources : SearchResult[]}; 

    return (
    <section> 
        <ForceRefresh/>
        <div className="flex flex-col gap-20">
            <div className="flex justify-between">
            <h1 className="text-4xl font-bold">Album : {albumName}</h1>
            </div>
            <AlbumGrid images={results.resources} />
        </div>
    </section>
    
    );
}