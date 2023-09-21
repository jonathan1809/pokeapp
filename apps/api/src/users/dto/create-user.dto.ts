import { z } from 'zod';

export const createUserSchema = z
  .object({
    id: z.string(),
    favoritePokemons: z.array(z.number()),
  })
  .required();

export type CreateUserDto = z.infer<typeof createUserSchema>;
