import styled from "styled-components";
import { Pokemon } from "../../../interfaces/pokemon.interface";
import { Image } from "../../../components/Image";
import { notFoundPokemonImagePath } from "../../../constants/assets";
import { getColor } from "../../../styles/colors";
import FavoriteButton from "./FavoriteButton";

type CardProps = {
  pokemon: Pokemon;
  isFavorite: boolean;
  onClick: (name: string) => void;
  onUpdateFavorites: (isFavoriteAdded: boolean, pokemonName: string) => void;
};
const Card = ({
  pokemon,
  isFavorite,
  onClick,
  onUpdateFavorites,
}: CardProps) => {
  const { name, sprite } = pokemon;
  const handleOnClick = () => {
    onClick(name);
  };

  const handleClickFavoriteButton = () => {
    onUpdateFavorites(!isFavorite, name);
  };

  return (
    <$Container onClick={handleOnClick}>
      <$PokemonImage
        src={sprite ?? notFoundPokemonImagePath}
        alt={name}
        srcOnError={notFoundPokemonImagePath}
        customSize={200}
      />
      <p>{name}</p>

      <FavoriteButton
        isFavorite={isFavorite}
        onFavoriteClick={handleClickFavoriteButton}
      />
    </$Container>
  );
};

const $Container = styled.div`
  flex-basis: 50%;
  padding: 10px;
  box-sizing: border-box;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  color: white;

  background-color: ${getColor("blue900")};
  @media (min-width: 768px) {
    flex-basis: 20%;
  }
`;

const $PokemonImage = styled(Image)``;
export default Card;
