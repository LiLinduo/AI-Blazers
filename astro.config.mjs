import { defineConfig } from "astro/config";

const isGitHubActions = process.env.GITHUB_ACTIONS === "true";

export default defineConfig({
  site: "https://LiLinduo.github.io",
  base: isGitHubActions ? "/AI-Blazers" : "/",
});