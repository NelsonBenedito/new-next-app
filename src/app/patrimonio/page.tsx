"use client";

import AmountCard from "@/components/amountCard";

export default function Patrimonio() {
  const meses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];
  const amount = 1000;
  const weekendAmount = amount / 5;
  const date = new Date();
  const month = meses[date.getMonth()];
  const currentMonth = `Total do mês de ${month}`;
  const lastMonth = `ao mês de ${meses[date.getMonth() - 1]}`;
  const currentWeek = `Total da semana`;
  const lastWeek = `a semana passada`;
  return (
    <div className="pl-14">
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
