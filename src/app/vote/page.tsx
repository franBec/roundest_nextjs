"use client";
import { useFindAll } from "@/__generated__/api/roundest/roundestApi";
import AxiosErrorAlert from "@/components/v0/axios-error-alert";
import PokemonCandidates from "@/app/vote/_components/pokemon-candidates";
import { useBackendLanguage } from "@/components/backend-language/backend-language-context";

const Page = () => {
  const { selectedBackendLanguage } = useBackendLanguage();
  const backendUrl = selectedBackendLanguage.value;
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
    <div className="flex flex-col items-center space-y-4">
      <div className="w-full max-w-md flex justify-center">
        <p>{backendUrl}</p>
      </div>
      {isError && <AxiosErrorAlert axiosError={error} />}
      {!isError && (
        <PokemonCandidates
          voteUrl={backendUrl}
          candidatesSize={pageSize}
          isLoading={isPending || isRefetching}
          pokemons={response?.data.content}
          refetch={refetch}
        />
      )}
    </div>
  );
};

export default Page;
