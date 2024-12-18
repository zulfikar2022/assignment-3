import dotenv from "dotenv";
import path from "path";

const dotenvFilePath = path.join(process.cwd(), ".env");
dotenv.config({
  path: dotenvFilePath,
});

export const environmentVariables = {
  database_connection_string: process.env.DATABASE_CONNECTION_STRING,
  default_port: process.env.DEFAULT_PORT,
  salt_rounds: process.env.SALT_ROUNDS,
};
