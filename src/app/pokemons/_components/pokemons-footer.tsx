import { Button } from "@/components/ui/button";
import Link from "next/link";

export const PokemonsFooter = () => {
  return (
    <div className="w-full flex justify-center items-center space-x-2">
      <span className="font-bold text-xl">Not happy with the results?</span>
      <Button asChild variant="secondary">
        <Link href="/vote">
          <span>Vote!</span>
        </Link>
      </Button>
    </div>
  );
};
