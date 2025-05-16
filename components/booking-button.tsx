"use client"

import { Calendar } from "lucide-react"
import { Button, type ButtonProps } from "@/components/ui/button"

interface BookingButtonProps extends ButtonProps {}

export default function BookingButton({ className, variant = "default", size, ...props }: BookingButtonProps) {
  const handleClick = () => {
    window.open("https://calendly.com/fernandodiasjunior878/30min", "_blank")
  }

  return (
    <Button onClick={handleClick} className={className} variant={variant} size={size} {...props}>
      {size === "icon" ? (
        <Calendar className="h-5 w-5" />
      ) : (
        <>
          <Calendar className="mr-2 h-5 w-5" />
          Agendar agora
        </>
      )}
    </Button>
  )
}
