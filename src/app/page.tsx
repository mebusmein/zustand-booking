"use client";

import { HotelBookingForm } from "@/components/HotelBookingForm";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Hotel Booking Demo</h1>
          <div className="flex items-center space-x-2">
            <Switch
              id="dark-mode"
              checked={isDarkMode}
              onCheckedChange={setIsDarkMode}
            />
            <label htmlFor="dark-mode" className="text-sm">
              Dark Mode
            </label>
          </div>
        </div>
        
        <HotelBookingForm />
      </div>
    </main>
  );
} 