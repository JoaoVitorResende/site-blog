import Link from "next/link"
import { Button } from "../ui/button"
import { ArrowRight } from "lucide-react"

interface ButtonProps {
  isSmall: boolean
}

export const CreateStoreButton = ({ isSmall }: ButtonProps) => {
  return !isSmall ? (
    <Button
      asChild
      className="mt-4 hidden w-fit rounded-full md:mt-auto md:flex"
    >
      <Link href="/criar-loja">
        Criar loja grátis
        <ArrowRight />
      </Link>
    </Button>
  ) : (
    <Button
      asChild
      className="mt-4 w-full gap-2 rounded-full md:mt-auto md:hidden"
    >
      <Link href="/criar-loja">
        Criar loja grátis
        <ArrowRight />
      </Link>
    </Button>
  );
};