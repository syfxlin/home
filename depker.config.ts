import { depker, docker, nextjs } from "https://raw.githubusercontent.com/syfxlin/depker/master/mod.ts";

const app = depker();

app.master(docker({ type: "https" }));
app.runner(docker({ type: "local" }));

app.service(
  nextjs({
    name: "home",
    domain: ["ixk.me", "www.ixk.me"],
    tls: true,
    secrets: {
      NEXT_PUBLIC_COLINE_LANGUAGE: "@HOME_COLINE_LANGUAGE",
      NEXT_PUBLIC_COLINE_GOOGLE_ANALYTICS: "@HOME_COLINE_GOOGLE_ANALYTICS",
      NEXT_PUBLIC_COLINE_GITHUB_REPO: "@HOME_COLINE_GITHUB_REPO",
      COLINE_GITHUB_TOKEN: "@HOME_COLINE_GITHUB_TOKEN",
      KEYSTATIC_SECRET: "@HOME_KEYSTATIC_SECRET",
      KEYSTATIC_GITHUB_CLIENT_ID: "@HOME_KEYSTATIC_GITHUB_CLIENT_ID",
      KEYSTATIC_GITHUB_CLIENT_SECRET: "@HOME_KEYSTATIC_GITHUB_CLIENT_SECRET",
      NEXT_PUBLIC_KEYSTATIC_GITHUB_APP_SLUG: "@HOME_KEYSTATIC_GITHUB_APP_SLUG",
    },
  }),
);

export default app;
