import { Pokemons } from "@/__generated__/api/roundest/model";

export const calculateTotalPages = (pokemons: Pokemons): number | undefined => {
  const totalElements = pokemons.totalElements;
  const pageSize = pokemons.pageable?.pageSize;

  if (totalElements !== undefined && pageSize !== undefined && pageSize > 0) {
    return Math.ceil(totalElements / pageSize);
  }

  return undefined;
};
