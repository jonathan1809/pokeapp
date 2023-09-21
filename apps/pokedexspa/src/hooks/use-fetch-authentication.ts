import { v4 as uuidv4 } from "uuid";
import { User } from "../interfaces/user.interface";
import localStorage from "../services/local-storage";
import userRepository from "../repositories/user.repository";
export const useFetchAuthentication = async () => {
  const userId = localStorage.get<string>("user");
  if (!userId) {
    const user: User = {
      id: uuidv4(),
      favoritePokemons: [],
    };

    await userRepository.createUser(user);
    localStorage.set<string>("user", user.id);
    return user.id;
  }
  return userId;
};
