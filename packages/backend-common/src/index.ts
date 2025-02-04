// import dotenv from "dotenv";

// dotenv.config();

// const getEnv = (key: string, defaultValue?: string): string => {
//   const value = process.env[key] ?? defaultValue;

//   if (value === undefined) {
//     throw new Error(`Missing required environment variable: ${key}`);
//   }

//   return value;
// };

// export const JWT_SECRET: string = getEnv("JWT_SECRET");
// export const DATABASE_URL: string = getEnv("DATABASE_URL");


export const JWT_SECRET = process.env.JWT_SECRET || "123123";