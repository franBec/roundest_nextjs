"use client";

import { useFindById } from "@/__generated__/api/roundest/roundestApi";
import { useParams } from "next/navigation";
import AxiosErrorAlert from "@/components/v0/axios-error-alert";
import PokemonCard from "@/components/pokemon/pokemon-card";
import Modal from "@/components/gitdagray/modal";

const Page = () => {
  const id = parseInt(useParams<{ id: string }>().id);
  if (isNaN(id)) {
    throw new Error(`id in pokemons/[id] must be a number`);
  }

  const {
    isPending,
    isError,
    data: response,
    error,
  } = useFindById(id, {
    axios: { baseURL: process.env.NEXT_PUBLIC_API_BACKEND_JAVA },
  });

  if (isError) {
    return <AxiosErrorAlert axiosError={error} />;
  }

  return (
    <Modal>
      <div className="flex flex-col items-center">
        <PokemonCard
          id={response?.data.id}
          name={response?.data.name}
          imageUrl={response?.data.spriteUrl}
          isPending={isPending}
        />
      </div>
    </Modal>
  );
};
export default Page;
