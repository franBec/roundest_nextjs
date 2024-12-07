"use client";
import PokemonCard from "@/components/pokemon/pokemon-card";
import { useFindAll } from "@/__generated__/api/roundest/roundestApi";
import Loading from "@/components/v0/loading";
import AxiosErrorAlert from "@/components/v0/axios-error-alert";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";

const Vote = () => {
  const {
    isPending,
    isError,
    data: response,
    error
  } = useFindAll(
    {
      random: true,
      pageSize: 2
    },
    {axios: { baseURL: process.env.NEXT_PUBLIC_API_BACKEND_JAVA }}
  )

  if (isPending) {
    return <Loading />;
  }

  if (isError) {
    return <AxiosErrorAlert axiosError={error} />;
  }

  if(!response.data.content){
    return <Alert>
      <Terminal className="h-4 w-4" />
      <AlertTitle>No content</AlertTitle>
      <AlertDescription>
        The response, even though is OK, it has no content.
      </AlertDescription>
    </Alert>
  }

  return (
    <div>
      <p>select</p>
      <div className="flex justify-center gap-4">
        {response.data.content.map(it => (
          <div className="flex flex-col" key={it.id}>
            <PokemonCard
              id={it.id}
              name={it.name}
              imageUrl={it.spriteUrl}
            />
            {it.id ? <Button>Vote</Button> : <Button disabled>Vote</Button>}
          </div>
        ))}

      </div>
    </div>

  );
};
export default Vote;
