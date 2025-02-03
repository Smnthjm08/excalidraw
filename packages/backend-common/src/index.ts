import dotenv from "dotenv";

dotenv.config();

const getEnv = (key: string, defaultValue?: string): string => {
  const value = process.env[key] ?? defaultValue;

  if (value === undefined) {
    throw Error(`Missing String environment variable for ${key}`);
  }

  return value;
};

export const JWT_SECRET = getEnv("JWT_SECRET");
export const DATABASE_URL = getEnv("DATABASE_URL");
