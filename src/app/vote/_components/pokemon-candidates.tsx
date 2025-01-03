import PokemonCard from "@/app/pokemons/[id]/_components/pokemon-card";
import { Button } from "@/components/ui/button";
import { FC } from "react";
import { Pokemon } from "@/__generated__/api/roundest/model";
import { useIncrementPokemonVotes } from "@/__generated__/api/roundest/roundestApi";
import { toast } from "sonner";
import PokemonCardLoading from "@/app/pokemons/[id]/_components/pokemon-card-loading";

interface PokemonCandidatesProps {
  voteUrl: string;
  candidatesSize: number;
  isLoading: boolean;
  pokemons: Pokemon[] | undefined;
  refetch: () => void;
}

const PokemonCandidates: FC<PokemonCandidatesProps> = ({
  voteUrl,
  candidatesSize,
  isLoading,
  pokemons,
  refetch,
}) => {
  const { mutate: incrementVote, isPending: isVoting } =
    useIncrementPokemonVotes({ axios: { baseURL: voteUrl } });

  const handleVote = (id: number) => {
    incrementVote(
      { id },
      {
        onSuccess: () => {
          toast("Vote sent!");
        },
        onError: () => {
          toast("Uh oh! Something went wrong.");
        },
        onSettled: () => {
          refetch();
        },
      }
    );
  };

  return (
    <div className="flex justify-center gap-4">
      {Array.from({ length: candidatesSize }).map((_, index) => {
        if (isLoading) {
          return <PokemonCardLoading key={index} />;
        }

        const pokemon = pokemons?.[index];
        return (
          <div className="flex flex-col" key={pokemon?.id ?? index}>
            <PokemonCard
              id={pokemon?.id}
              name={pokemon?.name}
              imageUrl={pokemon?.spriteUrl}
            />
            {pokemon?.id ? (
              <Button
                onClick={() => handleVote(pokemon.id!)}
                disabled={isVoting}
              >
                Vote
              </Button>
            ) : (
              <Button disabled>Vote</Button>
            )}
          </div>
        );
      })}
    </div>
  );
};
export default PokemonCandidates;
