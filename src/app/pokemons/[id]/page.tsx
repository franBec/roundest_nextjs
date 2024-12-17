"use client";

import { useFindById } from "@/__generated__/api/roundest/roundestApi";
import { useParams } from "next/navigation";
import AxiosErrorAlert from "@/components/v0/axios-error-alert";
import PokemonCard from "@/components/pokemon/pokemon-card";
import { useBackendLanguage } from "@/components/backend-language/backend-language-context";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Page = () => {
  const id = parseInt(useParams<{ id: string }>().id);
  if (isNaN(id)) {
    throw new Error(`id in pokemons/[id] must be a number`);
  }

  const { selectedBackendLanguage } = useBackendLanguage();
  const backendUrl = selectedBackendLanguage.value;
  const {
    isPending,
    isError,
    data: response,
    error,
  } = useFindById(id, {
    axios: { baseURL: backendUrl },
  });

  if (isError) {
    return <AxiosErrorAlert axiosError={error} />;
  }

  return (
    <div className="flex flex-col items-center pt-4">
      <div className="flex flex-col items-center gap-4 w-full max-w-md">
        <PokemonCard
          id={response?.data.id}
          name={response?.data.name}
          imageUrl={response?.data.spriteUrl}
          isPending={isPending}
        />
        <div className="w-full flex justify-center">
          <Button asChild variant="secondary">
            <Link href="/pokemons">
              <span>See Pokemons</span>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Page;
