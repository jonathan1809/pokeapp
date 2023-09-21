## Description

Pokedex app using turbo repo to run and spa app together with the backend service

## Used Stack

- MongoDB
- Nest
- React
- Typescript

## Installation

In order to install all de dependencies you need to run the commands to install the dependencies of both project spa and api and turbo dependencies in root

```
npm install
npm install --workspace api
npm install --workspace pokedexspa
```

## DB

You need to install docker to run the docker compose image to have locally mongoDB database

run command to set up db in the root path

```
docker-compose up -d
```

in case you want to update the database name update en .env file in api folder

## Running the app

You need to wit until the api get all the pokemons from the pokeapi, I decide for the local json strategy to get the pokemon data and save the users in the DB but this take like 30 second to get all the pokemons and save it locally.

```
 npm run dev
```

## Test

```
$ npm run test
```

## Build the app for production

```
 npm run build
```
