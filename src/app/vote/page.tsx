"use client";
import { useState } from "react";
import {
  useFindAll,
} from "@/__generated__/api/roundest/roundestApi";
import AxiosErrorAlert from "@/components/v0/axios-error-alert";
import { Button } from "@/components/ui/button";
import {
  BackendSelect,
  Backends,
} from "@/components/backend-select/backend-select";
import { RefreshCw } from "lucide-react";
import PokemonCandidates from "@/app/vote/_components/pokemon-candidates";

const Vote = () => {
  const [firstBackend] = Array.from(Backends.entries());
  const [backendUrl, setBackendUrl] = useState<string>(firstBackend[1]);

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

  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-md py-4 flex justify-center">
        <div className="flex items-center space-x-2">
          <BackendSelect onSelect={setBackendUrl} />
          <Button
            variant="outline"
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
      {!isError && <PokemonCandidates
        candidatesSize={pageSize}
        isLoading={isPending || isRefetching}
        pokemons={response?.data.content}
        backendUrl={backendUrl}
        refetch={refetch}/>
      }
    </div>
  );
};

export default Vote;
