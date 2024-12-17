import { Button } from "@/components/ui/button";
import Link from "next/link";

const PokemonFooter = () => {
  return <div className="w-full flex justify-center">
    <Button asChild variant="secondary">
      <Link href="/pokemons">
        <span>See Pokemons</span>
      </Link>
    </Button>
  </div>
};
export default PokemonFooter;
