"use client";
import { useState } from "react";
import PokemonCard from "@/components/pokemon/pokemon-card";
import {
  useFindAll,
  useIncrementPokemonVotes,
} from "@/__generated__/api/roundest/roundestApi";
import AxiosErrorAlert from "@/components/v0/axios-error-alert";
import { Button } from "@/components/ui/button";
import {
  BackendSelect,
  Backends,
} from "@/components/backend-select/backend-select";
import { RefreshCw } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Vote = () => {
  const [firstBackend] = Array.from(Backends.entries());
  const [backendUrl, setBackendUrl] = useState<string>(firstBackend[1]);
  const { toast } = useToast();

  const pageSize = 2;
  const {
    isPending,
    isError,
    data: response,
    error,
    refetch,
    isRefetching,
  } = useFindAll(
    {
      random: true,
      pageSize,
    },
    { axios: { baseURL: backendUrl } }
  );

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
    <div className="flex flex-col items-center">
      <div className="w-full max-w-md py-4 flex justify-center">
        <div className="flex items-center space-x-2">
          <BackendSelect onSelect={setBackendUrl} />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => refetch()}
            disabled={isPending || isRefetching}
            aria-label="Refetch data"
          >
            <RefreshCw
              className={`h-4 w-4 ${isRefetching ? "animate-spin" : ""}`}
            />
          </Button>
        </div>
      </div>
      {isError && <AxiosErrorAlert axiosError={error} />}
      <div className="flex justify-center gap-4">
        {Array.from({ length: pageSize }).map((_, index) => {
          if (isPending || isRefetching) {
            return <PokemonCard key={index} isPending />;
          }

          const pokemon = response?.data.content?.[index];
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
    </div>
  );
};

export default Vote;
