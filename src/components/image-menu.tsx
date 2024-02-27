import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import { Download } from "./icons/download-button";
import { SearchResult } from "@/app/gallery/page";
import { Menu } from "./icons/menu";
import { AddToAlbumDialog } from "./add-to-album-dialog";
import downloadImage from "./downloader";


export default function ImageMenu({ image } : { image: SearchResult }) {
  const handleDownload = () => {
    downloadImage({ image });
  };

  return (
    <div className="absolute top-2 left-2">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button variant="ghost" className="w-12 h-8">
            <Menu />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="40">
          <DropdownMenuLabel className="ml-4">Menu</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="w-56 items-center cursor-pointer">
          <Button onClick={() => {
            console.log(image),
            downloadImage({ image }),
            console.log(downloadImage)
          }}
              variant="ghost" className="flex items-center gap-x-4 ">
           <Download className="h-4 w-4 mr-1" />
            <span className="ml-2">Download</span>
           </Button>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            
            {/* <FolderPlus className="h-4 w-4 mr-1" />
            <span className="ml-1">Add To Album</span> */}
            <AddToAlbumDialog image={image} />
            
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
