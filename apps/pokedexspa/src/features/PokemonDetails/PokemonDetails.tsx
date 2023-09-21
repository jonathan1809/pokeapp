import styled from "styled-components";
import { Pokemon } from "../../interfaces/pokemon.interface";
import { Image } from "../../components/Image";
import { notFoundPokemonImagePath } from "../../constants/assets";
import { getColor } from "../../styles/colors";
import { Link } from "react-router-dom";

export type PokemonDetails = {
  pokemon: Pokemon;
};
const PokemonDetails = ({ pokemon }: PokemonDetails) => {
  return (
    <$PokemonContainer>
      <BackButton>
        <Link to={"/"}>
          <BackArrowIcon />
          Back
        </Link>
      </BackButton>
      <$Name>{pokemon.name}</$Name>
      <$PokemonImage
        src={pokemon.sprite ?? notFoundPokemonImagePath}
        alt={pokemon.name}
        customSize={500}
        srcOnError={notFoundPokemonImagePath}
      />
      <$Text>Height: {pokemon.height}</$Text>
      <$Text>Base Experience: {pokemon.baseExperience}</$Text>
      {pokemon.abilities.map((ability, index) => {
        return (
          <$Text>
            Ability {index + 1}: {ability.ability.name}
          </$Text>
        );
      })}
      <$StatContainer>
        {pokemon.stats.map((stat) => {
          return (
            <$Stat>
              {stat.stat.name}: {stat.baseStat}
            </$Stat>
          );
        })}
      </$StatContainer>
    </$PokemonContainer>
  );
};

const $PokemonContainer = styled.div`
  background-color: ${getColor("blue200")};
  width: 1000px;
  min-height: 80vh;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  position: relative;
`;
const BackButton = styled.button`
  position: absolute;
  top: 20px;
  left: 20px;
  display: flex;
  align-items: center;
  padding: 6px 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;

  svg {
    fill: #000; /* Customize the arrow color here */
    width: 16px;
    height: 16px;
    margin-right: 6px;
    transform: rotate(180deg);
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: rotate(180deg) translateX(-2px);
  }
`;

const BackArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M16.707 11.293l-9-9a1 1 0 0 0-1.414 1.414L14.586 11H3a1 1 0 0 0 0 2h11.586l-5.293 5.293a1 1 0 1 0 1.414 1.414l9-9a1 1 0 0 0 0-1.414z" />
  </svg>
);
const $Name = styled.h1`
  text-transform: capitalize;
`;
const $PokemonImage = styled(Image)`
  background-color: grey;
`;

const $Text = styled.span`
  margin-top: 50px;
  font-size: 1rem;
`;

const $StatContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 50px;
`;

const $Stat = styled.div`
  margin: 0 20px;
`;
export default PokemonDetails;
