import cloudinary  from "cloudinary";

export type SearchResult = {   
    public_id: string;
    tags: string[];
};
    
export default async function AlbumsPage() {
    const results = (await cloudinary.v2.search
     .expression('resource_type:image')
     .sort_by("created_at",'desc')
     .max_results(30)
     .with_field("tags")
     .execute()) as {resources : SearchResult[]}; 

  return (
    <section>
        <div className="flex flex-col gap-20">
          <div className="flex justify-between">
            <h1 className="text-4xl font-bold">Guestbook</h1> 
          </div>
        </div>
    </section>
    );
  }

