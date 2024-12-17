import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FindAllParams } from "@/__generated__/api/roundest/model";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";

interface PokemonFilterFormProps {
  defaultName: string;
  onSubmit: (name: string) => void;
}

export const PokemonsFilterForm = ({
  defaultName,
  onSubmit,
}: PokemonFilterFormProps) => {
  const form = useForm<FindAllParams>({
    defaultValues: {
      name: defaultName,
    },
  });

  const handleFormSubmit = ({ name }: FindAllParams) => {
    onSubmit(name || "");
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleFormSubmit)}
        className="flex w-full max-w-sm items-center space-x-2"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Filter by Pokémon name..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Filter</Button>
      </form>
    </Form>
  );
};
