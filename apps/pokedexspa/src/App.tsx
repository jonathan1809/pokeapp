/* eslint-disable @typescript-eslint/no-unused-vars */
import { Suspense, lazy } from "react";
import Loading from "./components/Loading";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useFetchAuthentication } from "./hooks/use-fetch-authentication";

const FetchAuthentication = () => {
  useFetchAuthentication();
  return null;
};

function App() {
  const SignInView = lazy(async () => await import("./views/SignIn"));
  const PokemonListView = lazy(
    async () => await import("./views/PokemonListView")
  );
  const PokemonDetails = lazy(
    async () => await import("./views/PokemonDetailsView")
  );

  return (
    <>
      <FetchAuthentication />
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<PokemonListView />} />
            <Route path="/:name" element={<PokemonDetails />} />
            <Route path="/signIn" element={<SignInView />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
