"use client"

import { WhatsappLogo } from "@phosphor-icons/react"
import { Button, type ButtonProps } from "@/components/ui/button"

interface WhatsAppButtonProps extends ButtonProps {
  phone: string
  message?: string
}

export default function WhatsAppButton({
  phone,
  message = "Olá! Gostaria de mais informações.",
  className,
  variant = "default",
  size,
  ...props
}: WhatsAppButtonProps) {
  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/${phone}?text=${encodedMessage}`, "_blank")
  }

  return (
    <Button onClick={handleClick} className={className} variant={variant} size={size} {...props}>
      {size === "icon" ? (
        <WhatsappLogo weight="fill" className="h-5 w-5" />
      ) : (
        <>
          <WhatsappLogo weight="fill" className="mr-2 h-5 w-5" />
          Contato via WhatsApp
        </>
      )}
    </Button>
  )
}
