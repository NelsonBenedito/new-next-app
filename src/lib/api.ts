const meses: string[] = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

const date: Date = new Date();
const currentMonth: string = `Total do mês de ${meses[date.getMonth()]}`;
const lastMonth: string = `ao mês de ${meses[date.getMonth() - 1]}`;
var amount = 0;
export interface Constantes {
  amount: number;
  weekendAmount: number;
  date: Date;
  month: string;
  currentMonth: string;
  lastMonth: string;
  currentWeek: string;
  lastWeek: string;
}

export const objConstantes: Constantes = {
  amount: amount,
  weekendAmount: amount / 5,
  date: date,
  month: meses[date.getMonth()],
  currentMonth: currentMonth,
  lastMonth: lastMonth,
  currentWeek: `Total da semana`,
  lastWeek: `a semana passada`
};