"use client"
import { Calendar } from "@/components/ui/calendar";
import React from "react";

export default function Event() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  return (
    <div className="flex align-middle justify-center w-full">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="border rounded"
      />
    </div>
  );
}
