"use client";

import AmountCard from "@/components/amountCard";
import { objConstantes, Constantes } from "@/lib/api";

export default function Patrimonio() {
  const {
    amount,
    weekendAmount,
    currentMonth,
    lastMonth,
    currentWeek,
    lastWeek,
  }: Constantes = objConstantes;

  return (
    <div className=" md:pl-14">
      <div className="flex gap-4 p-6">
        <AmountCard
          value={amount}
          title={`R$${amount}`}
          description={currentMonth}
          details={lastMonth}
          percentage={`+${amount}%`}
        />
        <AmountCard
          value={weekendAmount}
          title={`R$${weekendAmount}`}
          description={currentWeek}
          details={lastWeek}
          percentage={`+${weekendAmount}%`}
        />
      </div>
    </div>
  );
}
