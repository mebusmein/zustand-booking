import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { FormData, combinedSchema } from "@/types/booking"

export function useBookingForm() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<Partial<FormData>>({})

  const form = useForm<FormData>({
    resolver: zodResolver(combinedSchema),
    defaultValues: {
      property: "",
      checkIn: "",
      checkOut: "",
      adults: "1",
      children: "0",
      roomType: "",
      breakfast: false,
      parking: false,
      spa: false,
      cardNumber: "",
      expiryDate: "",
      cvv: "",
    },
  })

  const onSubmit = (data: Partial<FormData>) => {
    console.log(data, "data")
    setFormData((prev) => ({ ...prev, ...data }))
    if (step < 6) {
      setStep(step + 1)
    }
  }

  const goBack = () => {
    setStep(step - 1)
  }

  return {
    step,
    setStep,
    formData,
    form,
    onSubmit,
    goBack,
  }
} 