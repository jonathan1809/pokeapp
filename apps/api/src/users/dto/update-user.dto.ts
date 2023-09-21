import { z } from 'zod';

export const updateUserSchema = z
  .object({
    favoritePokemons: z.array(z.string()),
  })
  .optional();

export type UpdateUserDto = z.infer<typeof updateUserSchema>;
