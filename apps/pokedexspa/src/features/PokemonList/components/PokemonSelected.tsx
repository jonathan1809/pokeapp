import { Link } from "react-router-dom";
import { Pokemon } from "../../../interfaces/pokemon.interface";
import styled from "styled-components";
import PokemonNotFound from "./PokemonNotFound";
import { Image } from "../../../components/Image";
import { notFoundPokemonImagePath } from "../../../constants/assets";

export type PokemonListProps = {
  pokemon: Pokemon | undefined;
};

const PokemonSelected = ({ pokemon }: PokemonListProps) => {
  return (
    <$Container>
      {pokemon ? (
        <$PokemonContainer>
          <$PokemonImage
            src={pokemon.sprite ?? notFoundPokemonImagePath}
            alt={pokemon.name}
            srcOnError={notFoundPokemonImagePath}
            customSize={500}
          />
          <p>{pokemon.name}</p>
          <Link to={pokemon.name}>More Information</Link>
        </$PokemonContainer>
      ) : (
        <PokemonNotFound />
      )}
    </$Container>
  );
};
const $Container = styled.div`
  min-width: 650px;
  align-items: center;
  justify-content: center;
`;

const $PokemonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const $PokemonImage = styled(Image)`
  background-color: grey;
`;
export default PokemonSelected;
