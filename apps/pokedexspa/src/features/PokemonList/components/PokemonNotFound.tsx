import styled from "styled-components";

const PokemonNotFound = () => {
  return (
    <$Root>
      <h1>Pokemon Not Found</h1>
      <p>Oops! The Pokemon you are looking for does not exist.</p>
    </$Root>
  );
};

const $Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export default PokemonNotFound;
