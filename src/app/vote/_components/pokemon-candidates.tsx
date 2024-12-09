import PokemonCard from "@/components/pokemon/pokemon-card";
import { Button } from "@/components/ui/button";
import { FC } from "react";
import { Pokemon } from "@/__generated__/api/roundest/model";
import { useIncrementPokemonVotes } from "@/__generated__/api/roundest/roundestApi";
import { toast } from "@/hooks/use-toast";

interface PokemonCandidatesProps {
  backendUrl: string;
  candidatesSize: number;
  isLoading: boolean;
  pokemons: Pokemon[] | undefined;
  refetch: () => void;
}

const PokemonCandidates: FC<PokemonCandidatesProps> = ({
  backendUrl,
  candidatesSize,
  isLoading,
  pokemons,
  refetch,
}) => {
  const { mutate: incrementVote, isPending: isVoting } =
    useIncrementPokemonVotes({ axios: { baseURL: backendUrl } });

  const handleVote = (id: number) => {
    incrementVote(
      { id },
      {
        onSuccess: () => {
          toast({
            description: "Vote sent!",
          });
        },
        onError: () => {
          toast({
            variant: "destructive",
            description: "Uh oh! Something went wrong.",
          });
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
          return <PokemonCard key={index} isPending={isLoading} />;
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
