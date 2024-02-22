import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger,} from "@/components/ui/dropdown-menu"
import { Menu }from "./icons/menu" 
import { Button } from "./ui/button"
import { FolderPlus } from "./icons/folder-plus"
import { Downlaod } from "./icons/download-button"
import { Ai } from "./icons/ai-features"

 export default function ImageMenu(){ 
    return(
        <div className="absolute top-2 left-2">
    <DropdownMenu>
    <DropdownMenuTrigger>
        <Button variant="ghost" className="w-12  h-8">
        <Menu/>
        </Button>
        </DropdownMenuTrigger>
    <DropdownMenuContent>
        <DropdownMenuLabel>
            Edit
         </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="w-40">
            <Downlaod/>
            <span className="ml-1">
            Download
            </span>
        </DropdownMenuItem>
        <DropdownMenuItem className="w-40">
          <FolderPlus className="h-4 w-4 space"/>
          <span className="ml-1">
              Add To Album
            </span>
        </DropdownMenuItem>
        <DropdownMenuItem>
            <Ai/>
        <span className="ml-1">
            AI Features 
            </span>
            </DropdownMenuItem>
    </DropdownMenuContent>
    </DropdownMenu>
        </div>  
 )
}