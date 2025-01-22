import { z } from 'zod';

const environmentSchema = z.object({
  // Define the possible values for NODE_ENV, always leaving a default value:
  NODE_ENV: z.enum(['test', 'development', 'production']).default('production'),
  // Environment variables are always defined as strings. Here, convert the string to a number and set a default value:
  PORT: z.number({ coerce: true }).default(5173),
  HELLO: z.string(),
});

export const envs = environmentSchema.parse(process.env);
