"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { z } from "zod";
import { PlusCircle, Funnel } from "@phosphor-icons/react";
import { zodResolver } from "@hookform/resolvers/zod";

const createDataFormSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Nome obrigatório" })
    .transform((name) => {
      return name
        .trim()
        .split(" ")
        .map((word) => {
          return word[0].toLocaleUpperCase().concat(word.substring(1));
        })
        .join(" ");
    }),
  value: z.string().min(1, { message: "Valor Obrigatório" }),
});

type createDataFormData = z.infer<typeof createDataFormSchema>;

export default function Dashboard() {
  const [output, setOutput] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<createDataFormData>({
    resolver: zodResolver(createDataFormSchema),
  });

  function createData(data: createDataFormData) {
    setOutput(JSON.stringify(data, null, 2));
  }

  return (
    <div className="p-4 mx-auto max-w-4xl mt-2">
      <h1 className="text-3xl font-bold">Relatório</h1>
      <div className="p-6 space-y-4">
        <form
          onSubmit={handleSubmit(createData)}
          className="flex items-center gap-2"
        >
          <Input placeholder="Nome" />
          <Input placeholder="Valor(R$)"/>
          <Button type="submit" variant="link" className="gap-1">
            <Funnel size={20} />
            Filtrar resultados
          </Button>
        </form>

        <Dialog>
          <DialogTrigger asChild>
            <Button type="button" className="gap-1">
              <PlusCircle size={20} color="#f0f0f0" />
              Adicionar
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Nova entrada</DialogTitle>
              <DialogDescription>
                Criar uma nova entrada no sistema
              </DialogDescription>
            </DialogHeader>
            <form
              onSubmit={handleSubmit(createData)}
              className="space-y-3 align-middle"
            >
              <div className="grid grid-cols-4 items-center gap-3">
                <Label htmlFor="name" className="text-right">
                  Nome
                </Label>
                <Input
                  {...register("name")}
                  placeholder="Nome"
                  className="col-span-3"
                />
                {errors.name && (
                  <span className="md:flex md:ml-32 w-full items-center md:justify-start col-span-4 text-xs text-red-600">
                    {errors.name.message}
                  </span>
                )}
              </div>
              <div className="grid grid-cols-4 items-center gap-3">
                <Label htmlFor="value" className="text-right">
                  Valor
                </Label>
                <Input
                  {...register("value")}
                  placeholder="Valor(R$)"
                  className="col-span-3"
                />
                {errors.value && (
                  <span className="md:flex md:ml-32 w-full items-center justify-start col-span-4 text-xs text-red-600">
                    {errors.value.message}
                  </span>
                )}
              </div>

              <DialogFooter>
                <DialogClose asChild>
                  <Button type="button" variant="outline">
                    Cancelar
                  </Button>
                </DialogClose>
                <Button type="submit">Salvar</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      <pre>{output}</pre>
      {/* <DashboardComponent></DashboardComponent> */}
      <Table className="rounded-lg border ">
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Usuário</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Método</TableHead>
            <TableHead className="text-right">Montante</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array.from({ length: 10 }).map((_, i) => {
            return (
              <TableRow key={i}>
                <TableCell>ID {i}</TableCell>
                <TableCell>Pago</TableCell>
                <TableCell>Cartão de Crédito</TableCell>
                <TableCell>R$192</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
