import { CloudinaryImage } from "@/components/cloudinary-image";
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
        <div className="md:grid md:grid-cols-4 md:gap-4">
            {[getColumns(0), getColumns(1), getColumns(2), getColumns(3),].map(
                (column, idx) => (
                 <div key={idx} className="flex flex-col gap-4 gap-y-4">
                    {column.map(getImage)}
                    </div>
                 )
                )}
            </div>
     );
}