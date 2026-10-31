import "dotenv/config"
import { defineConfig, env } from "@prisma/config"

export default defineConfig({
  // Define the location of your split schema files
  schema: "./prisma/schema",
  datasource: {
    // Reference the environment variable securely
    url: env("DIRECT_URL"),
  },
})
