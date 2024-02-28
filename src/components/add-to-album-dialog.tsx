import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FolderPlus } from "./icons/folder-plus"
import { useState } from "react"
import { SearchResult } from "@/app/gallery/page"
import React from "react"
import { addImageToAlbum } from "./actions"

export function AddToAlbumDialog( {image, onClose} :{image : SearchResult, onClose: () => void ;}) {
  const [albumName, setAlbumName] = useState("");
  const [open,setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={(newOpenState) => {
      setOpen(newOpenState);
      if (!newOpenState) {
        onClose();
      }
      }}>
      <DialogTrigger >
       <Button variant="ghost" className="flex gap-x-4">
      <FolderPlus className="h-4 w-56 mr-1 -center"/>
       <span className="ml-2"> Add To Album</span>
       </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Save To An Album</DialogTitle>
          <DialogDescription>
            Type an album that you want to move this image to :
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Album
            </Label>
            <Input 
              id="album-name" 
              className="col-span-3" 
              value={albumName} 
              onChange={(e) => setAlbumName(e.currentTarget.value)}/>
          </div>
        </div>
        <DialogFooter>
          <Button onClick={async () => {
            onClose();
            setOpen(false);
            await addImageToAlbum(image, albumName)
          }} 
          type="submit"
          >
          Add to Album
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

