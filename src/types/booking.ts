import * as z from "zod"

// Step 1: Property Selection
export const propertySchema = z.object({
  property: z.string().min(1, "Please select a property"),
})

// Step 2: Dates and Occupants
export const datesSchema = z.object({
  checkIn: z.string().min(1, "Please select a check-in date"),
  checkOut: z.string().min(1, "Please select a check-out date"),
  adults: z.string().min(1, "Please select number of adults"),
  children: z.string(),
})

// Step 3: Room Selection
export const roomSchema = z.object({
  roomType: z.string().min(1, "Please select a room type"),
})

// Step 4: Extras
export const extrasSchema = z.object({
  breakfast: z.boolean(),
  parking: z.boolean(),
  spa: z.boolean(),
})

// Step 5: Payment
export const paymentSchema = z.object({
  cardNumber: z.string().min(16, "Please enter a valid card number"),
  expiryDate: z.string().min(5, "Please enter a valid expiry date"),
  cvv: z.string().min(3, "Please enter a valid CVV"),
})

// Combined schema for all steps
export const combinedSchema = z.object({
  property: z.string().min(1, "Please select a property"),
  checkIn: z.string().min(1, "Please select a check-in date"),
  checkOut: z.string().min(1, "Please select a check-out date"),
  adults: z.string().min(1, "Please select number of adults"),
  children: z.string(),
  roomType: z.string().min(1, "Please select a room type"),
  breakfast: z.boolean(),
  parking: z.boolean(),
  spa: z.boolean(),
  cardNumber: z.string().min(16, "Please enter a valid card number"),
  expiryDate: z.string().min(5, "Please enter a valid expiry date"),
  cvv: z.string().min(3, "Please enter a valid CVV"),
})

export type FormData = z.infer<typeof combinedSchema> 