const PokemonCardLoading = () => {
  return (
    <div className="text-center rounded-lg shadow-2xl border-2 w-48 animate-pulse">
      <div className="flex justify-center mb-3">
        <div className="w-48 h-48 bg-gray-300 rounded-t-lg" />
      </div>
      <div className="">
        <div className="h-4 bg-gray-300 rounded w-1/4 mx-auto mb-2" />
        <div className="h-4 bg-gray-300 rounded w-3/4 mx-auto mb-1" />
      </div>
    </div>
  );
};
export default PokemonCardLoading;
