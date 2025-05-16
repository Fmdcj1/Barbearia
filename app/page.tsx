import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import BusinessHours from "@/components/business-hours"
import Gallery from "@/components/gallery"
import LocationMap from "@/components/location-map"
import WhatsAppButton from "@/components/whatsapp-button"
import BookingButton from "@/components/booking-button"

export default function Home() {
  // Dados do negócio - podem ser substituídos por dados reais de uma API ou CMS
  const businessData = {
    name: "Barbearia Gui",
    description: "Cortes modernos e atendimento de qualidade para homens que valorizam estilo e conforto.",
    phone: "+258 83 361 8670",
    whatsapp: "+258833618670",
    email: "contato@barbearia.com",
    address: "Rua 2, Q1 - Beira, Alto da Manga",
    instagram: "barbearigui",
    facebook: "barbearigui",
    hours: [
      { day: "Segunda", hours: "09:00 - 19:00" },
      { day: "Terça", hours: "09:00 - 19:00" },
      { day: "Quarta", hours: "09:00 - 19:00" },
      { day: "Quinta", hours: "09:00 - 19:00" },
      { day: "Sexta", hours: "09:00 - 20:00" },
      { day: "Sábado", hours: "09:00 - 18:00" },
      { day: "Domingo", hours: "Fechado" },
    ],
    services: [
      { name: "Corte Masculino", price: "MT 45,00", time: "30 min" },
      { name: "Barba", price: "MT 35,00", time: "20 min" },
      { name: "Corte + Barba", price: "MT 70,00", time: "50 min" },
      { name: "Sobrancelha", price: "MT 15,00", time: "10 min" },
      { name: "Coloração", price: "MT 60,00", time: "60 min" },
    ],
    gallery: [
  "/cortes/corte1.jpg",
  "/cortes/corte2.jpg",
  "/cortes/corte3.jpg",
  "/cortes/corte4.jpg",
  "/cortes/corte5.jpg",
  "/cortes/corte6.jpg",
],
    location: {
      lat: -23.55052,
      lng: -46.633308,
    },
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">{businessData.name}</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#sobre" className="text-sm font-medium hover:underline underline-offset-4">
              Sobre
            </Link>
            <Link href="#servicos" className="text-sm font-medium hover:underline underline-offset-4">
              Serviços
            </Link>
            <Link href="#galeria" className="text-sm font-medium hover:underline underline-offset-4">
              Galeria
            </Link>
            <Link href="#horarios" className="text-sm font-medium hover:underline underline-offset-4">
              Horários
            </Link>
            <Link href="#localizacao" className="text-sm font-medium hover:underline underline-offset-4">
              Localização
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <WhatsAppButton phone={businessData.whatsapp} className="hidden md:flex" />
            <BookingButton className="hidden md:flex" />
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Bem-vindo à {businessData.name}
                </h1>
                <p className="text-muted-foreground md:text-xl">{businessData.description}</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <BookingButton size="lg" />
                  <WhatsAppButton phone={businessData.whatsapp} size="lg" variant="outline" />
                </div>
              </div>
              <div className="mx-auto w-full max-w-md overflow-hidden rounded-xl">
                <Image
                  src="/cortes/Barbearia.jpg"
                  alt="Imagem da Barbearia"
                  width={800}
                  height={600}
                  className="aspect-video object-cover w-full rounded-xl"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Sobre Section */}
        <section id="sobre" className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Sobre Nós</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Somos especializados em proporcionar a melhor experiência para nossos clientes. Com profissionais
                  qualificados e ambiente aconchegante, garantimos um atendimento de excelência.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Serviços Section */}
        <section id="servicos" className="w-full py-12 md:py-24 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Nossos Serviços</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Conheça os serviços que oferecemos com preços acessíveis e qualidade garantida.
                </p>
              </div>
              <div className="mx-auto grid max-w-5xl gap-6 py-8 md:grid-cols-2 lg:grid-cols-3">
                {businessData.services.map((service, index) => (
                  <Card key={index} className="transition-all hover:shadow-lg">
                    <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                      <h3 className="text-xl font-bold">{service.name}</h3>
                      <p className="text-3xl font-semibold text-primary">{service.price}</p>
                      <p className="text-sm text-muted-foreground">Duração: {service.time}</p>
                      <BookingButton className="mt-4 w-full" variant="outline" />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Galeria Section */}
        <section id="galeria" className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Galeria</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Confira alguns dos nossos trabalhos e o ambiente do nosso estabelecimento.
                </p>
              </div>
              <Gallery images={businessData.gallery} />
            </div>
          </div>
        </section>

        {/* Horários e Localização Section */}
        <section id="horarios" className="w-full py-12 md:py-24 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Horário de Funcionamento</h2>
                  <p className="text-muted-foreground">Estamos abertos nos seguintes horários para melhor atendê-lo.</p>
                </div>
                <BusinessHours hours={businessData.hours} />
              </div>
              <div id="localizacao" className="space-y-6">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Localização</h2>
                  <p className="text-muted-foreground">
                    Estamos localizados em um local de fácil acesso. Venha nos visitar!
                  </p>
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <MapPin className="h-5 w-5" />
                    <span>{businessData.address}</span>
                  </div>
                </div>
                <LocationMap location={businessData.location} address={businessData.address} />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Pronto para agendar?</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Agende seu horário agora mesmo e garanta um atendimento de qualidade.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <BookingButton size="lg" />
                <WhatsAppButton phone={businessData.whatsapp} size="lg" variant="outline" />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 md:h-24 px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-bold">{businessData.name}</span>
            </Link>
            <div className="flex items-center gap-4">
              <Link
                href={`https://instagram.com/${businessData.instagram}`}
                className="text-muted-foreground hover:text-foreground"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href={`https://facebook.com/${businessData.facebook}`}
                className="text-muted-foreground hover:text-foreground"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Phone className="h-4 w-4" />
              <span>{businessData.phone}</span>
            </div>
            <div className="flex items-center gap-1">
              <Mail className="h-4 w-4" />
              <span>{businessData.email}</span>
            </div>
          </div>
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} {businessData.name}. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* Botões flutuantes para mobile */}
      <div className="fixed bottom-4 right-4 flex flex-col gap-2 md:hidden">
        <WhatsAppButton phone={businessData.whatsapp} size="icon" className="rounded-full shadow-lg" />
        <BookingButton size="icon" className="rounded-full shadow-lg" />
      </div>
    </div>
  )
}
