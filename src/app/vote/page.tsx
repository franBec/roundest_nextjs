"use client";
import { useState } from "react";
import PokemonCard from "@/components/pokemon/pokemon-card";
import { useFindAll } from "@/__generated__/api/roundest/roundestApi";
import AxiosErrorAlert from "@/components/v0/axios-error-alert";
import { Button } from "@/components/ui/button";
import { BackendSelect, Backends } from "@/components/backend-select/backend-select";

const Vote = () => {
  const [firstBackend] = Array.from(Backends.entries());
  const [backendUrl, setBackendUrl] = useState<string>(firstBackend[1]);

  const pageSize = 2;
  const {
    isPending,
    isError,
    data: response,
    error,
  } = useFindAll(
    {
      random: true,
      pageSize,
    },
    { axios: { baseURL: backendUrl } }
  );

  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-md py-4 flex justify-center">
        <BackendSelect onSelect={setBackendUrl} />
      </div>
      {isError && <AxiosErrorAlert axiosError={error} />}
      <div className="flex justify-center gap-4">
        {Array.from({ length: pageSize }).map((_, index) => {
          if (isPending) {
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
                <Button>Vote</Button>
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
