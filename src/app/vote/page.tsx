"use client";
import { useState } from "react";
import { useFindAll } from "@/__generated__/api/roundest/roundestApi";
import AxiosErrorAlert from "@/components/v0/axios-error-alert";
import {
  BackendSelect,
  Backends,
} from "@/components/backend-select/backend-select";
import PokemonCandidates from "@/app/vote/_components/pokemon-candidates";

const Vote = () => {
  const [firstBackend] = Array.from(Backends.entries());
  const [backendUrl, setBackendUrl] = useState<string>(firstBackend[1]);

  const pageSize = 2;
  const {
    data: response,
    error,
    isError,
    isPending,
    isRefetching,
    refetch,
  } = useFindAll(
    {
      pageSize,
      random: true,
    },
    { axios: { baseURL: backendUrl } }
  );

  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-md py-4 flex justify-center">
        <BackendSelect
          onSelectCallback={setBackendUrl}
          refetch={refetch}
          isPending={isPending}
          isRefetching={isRefetching}
        />
      </div>
      {isError && <AxiosErrorAlert axiosError={error} />}
      {!isError && (
        <PokemonCandidates
          backendUrl={backendUrl}
          candidatesSize={pageSize}
          isLoading={isPending || isRefetching}
          pokemons={response?.data.content}
          refetch={refetch}
        />
      )}
    </div>
  );
};

export default Vote;
