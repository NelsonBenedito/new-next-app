"use client";
import { Calendar } from "@/components/ui/calendar";
import React from "react";

export default function Event() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  return (
    <div className="p-4 mx-auto max-w-4xl mt-2md:pl-14">
      <h1 className="text-3xl font-bold">Agenda</h1>
      <div className="p-6 space-y-4">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="border rounded"
        />
      </div>
    </div>
  );
}
