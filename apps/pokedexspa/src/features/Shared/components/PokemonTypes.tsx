type PokemonTypesProps = {
  types: string[];
};
const PokemonTypes = ({ types }: PokemonTypesProps) => {
  return (
    <div>
      {types.map((type) => (
        <div>{type}</div>
      ))}
    </div>
  );
};

export default PokemonTypes;
