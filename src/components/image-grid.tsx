import { CloudinaryImage } from "@/app/gallery/cloudinary-image";
import { SearchResult } from "@/app/gallery/page";
import { ReactNode } from "react";

const MAX_COLUMNS = 4 ;


export function ImageGrid({
    images,
    getImage , 
 }:{
    images:SearchResult[]; 
    getImage: (imageData : SearchResult) => ReactNode,
}) {   
    function getColumns(colIndex: number){
        return images.filter((resources, idx) => idx % MAX_COLUMNS === colIndex);
    } 

    return (
        <div className="grid grid-cols-4 gap-4">
            {[getColumns(0), getColumns(1), getColumns(2), getColumns(3),].map(
                (column, idx) => 
                 <div key={idx} className="flex flex-col gap-4">
                    {column.map((result) => (
                    <CloudinaryImage
                        key={result.public_id}
                        imageData={result}
                        width="400"
                        height="300"
                        alt="Image"
                    />
                     ))}
                    </div>)}
            </div>
     )
}