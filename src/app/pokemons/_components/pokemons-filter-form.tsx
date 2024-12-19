import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FindAllParams } from "@/__generated__/api/roundest/model";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

interface PokemonFilterFormProps {
  defaultName: string;
  onSubmit: (name: string) => void;
}

const PokemonsFilterForm = ({
  defaultName,
  onSubmit,
}: PokemonFilterFormProps) => {
  const form = useForm<FindAllParams>({
    defaultValues: {
      name: defaultName,
    },
  });

  const handleFormSubmit = ({ name }: FindAllParams) => {
    if (name && name.length > 10) {
      toast("name search support at most 10 characters");
      return;
    }
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
            </FormItem>
          )}
        />
        <Button type="submit">Filter</Button>
      </form>
    </Form>
  );
};

export default PokemonsFilterForm;
