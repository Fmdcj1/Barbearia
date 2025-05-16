"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"

interface GalleryProps {
  images: string[]
}

export default function Gallery({ images }: GalleryProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index)
    setIsDialogOpen(true)
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
  <div className="w-full">
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {images.map((image, index) => (
        <div
          key={index}
          className="relative aspect-square overflow-hidden rounded-lg cursor-pointer"
          onClick={() => openLightbox(index)}
        >
          <Image
            src={image || "/placeholder.svg"}
            alt={`Galeria imagem ${index + 1}`}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform hover:scale-105"
          />
        </div>
      ))}
    </div>

    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
        <div className="relative aspect-square md:aspect-video w-full bg-black rounded-lg overflow-hidden">
          <Image
            src={images[currentImageIndex] || "/placeholder.svg"}
            alt={`Galeria imagem ${currentImageIndex + 1}`}
            fill
            sizes="(max-width: 768px) 100vw, 66vw"
            className="object-contain"
          />
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 rounded-full bg-black/50 hover:bg-black/70"
            onClick={() => setIsDialogOpen(false)}
          >
            <X className="h-5 w-5" />
            <span className="sr-only">Fechar</span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 hover:bg-black/70"
            onClick={prevImage}
          >
            <ChevronLeft className="h-8 w-8" />
            <span className="sr-only">Imagem anterior</span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 hover:bg-black/70"
            onClick={nextImage}
          >
            <ChevronRight className="h-8 w-8" />
            <span className="sr-only">Próxima imagem</span>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  </div> // <-- ESSA TAG FALTAVA!
  )
}