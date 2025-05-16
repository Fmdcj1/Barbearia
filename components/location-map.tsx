"use client"

import { useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"

interface LocationMapProps {
  location: {
    lat: number
    lng: number
  }
  address: string
}

export default function LocationMap({ location, address }: LocationMapProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    // Criando a URL do Google Maps para o iframe
    if (iframeRef.current) {
      const encodedAddress = encodeURIComponent(address)
      iframeRef.current.src = `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${encodedAddress}&center=${location.lat},${location.lng}&zoom=15`
    }
  }, [address, location])

  return (
    <Card className="overflow-hidden">
      <div className="aspect-video w-full" ref={mapRef}>
        <iframe
          ref={iframeRef}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          title="Localização no Google Maps"
        ></iframe>
      </div>
      <div className="p-4 text-center">
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-primary hover:underline"
        >
          Ver no Google Maps
        </a>
      </div>
    </Card>
  )
}
