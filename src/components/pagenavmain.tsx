"use client";
import {
  HouseSimple,
  MagnifyingGlass,
  ClipboardText,
  Bank,
  CalendarDots,
  UsersThree,
  Lightning,
  Gear,
  List,
  WarningCircle,
} from "@phosphor-icons/react";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "./ui/dropdown-menu";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "./ui/breadcrumb";
import { Input } from "./ui/input";
import { Sheet, SheetTrigger, SheetContent, SheetClose } from "./ui/sheet";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function PageNavMain() {
  return (
    <>
      <Alert variant="destructive" className="flex flex-col justify-center align-middle w-5/6 self-center mt-2 md:mt-4">
        <WarningCircle  className="h-8 w-8 " />
        <AlertTitle className="ml-4">Aviso Importante!</AlertTitle>
        <AlertDescription className="ml-4">
          Este é apenas um beta. Funcionalidades ainda não estão disponíveis.
        </AlertDescription>
      </Alert>
      <header className="flex  w-auto top-0 z-30 h-14 items-center gap-4 border-b bg-background p-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6 sm:ml-14">
        <Sheet>
          <SheetTrigger asChild>
            <Button className="md:hidden" size="icon" variant="outline">
              <List className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent className="sm:max-w-xs" side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <SheetClose asChild>
                <Link
                  type="submit"
                  className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                  href="/"
                >
                  <HouseSimple className="h-5 w-5 transition-all group-hover:scale-110" />
                  <span className="sr-only">Inicio</span>
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  href="/dashboard"
                >
                  <ClipboardText className="h-5 w-5" />
                  Dashboard
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  href="/patrimonio"
                >
                  <Bank className="h-5 w-5" />
                  Patrimônio
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  href="/events"
                >
                  <CalendarDots className="h-5 w-5" />
                  Eventos
                </Link>
              </SheetClose>
              <Link
                className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                href="/members"
              >
                <UsersThree className="h-5 w-5" />
                Membros
              </Link>
              <SheetClose asChild>
                <Link
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  href="/kids"
                >
                  <Lightning className="h-5 w-5" />
                  Kids
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  href="/settings"
                >
                  <Gear className="h-5 w-5" />
                  Configurações
                </Link>
              </SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
        <Breadcrumb className="hidden md:flex">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/patrimonio">Patrimônio</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/movimentacoes">Movimentações</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Movimentações Recentes</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="relative ml-auto flex-1 md:grow-0">
          <MagnifyingGlass className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
            placeholder="Peqsuisar..."
            type="search"
          />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar>
              <AvatarImage src="https://github.com/NelsonBenedito.png" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Minha conta</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>
    </>
  );
}
