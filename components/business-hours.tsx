import { Card, CardContent } from "@/components/ui/card"

interface BusinessHoursProps {
  hours: {
    day: string
    hours: string
  }[]
}

export default function BusinessHours({ hours }: BusinessHoursProps) {
  const today = new Date().toLocaleDateString("pt-BR", { weekday: "long" }).toLowerCase()

  // Converter o dia da semana para o formato usado nos dados
  const getDayName = (day: string) => {
    const dayMap: Record<string, string> = {
      "segunda-feira": "Segunda",
      "terça-feira": "Terça",
      "quarta-feira": "Quarta",
      "quinta-feira": "Quinta",
      "sexta-feira": "Sexta",
      sábado: "Sábado",
      domingo: "Domingo",
    }
    return dayMap[day] || day
  }

  const currentDay = getDayName(today)

  return (
    <Card>
      <CardContent className="p-6">
        <ul className="space-y-3">
          {hours.map((item, index) => (
            <li
              key={index}
              className={`flex justify-between items-center py-2 border-b last:border-0 ${item.day === currentDay ? "font-bold text-primary" : ""}`}
            >
              <span>{item.day}</span>
              <span>{item.hours}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
