import { depker, docker, nextjs } from "https://raw.githubusercontent.com/syfxlin/depker/master/mod.ts";

depker.master(docker({ type: "https" }));
depker.runner(docker({ type: "local" }));

depker.use(
  nextjs({
    name: "home",
    domain: ["ixk.me", "www.ixk.me"],
    tls: true,
    secrets: {
      NEXT_PUBLIC_COLINE_LANGUAGE: "@NEXT_PUBLIC_COLINE_LANGUAGE",
      NEXT_PUBLIC_COLINE_GOOGLE_ANALYTICS: "@NEXT_PUBLIC_COLINE_GOOGLE_ANALYTICS",
      NEXT_PUBLIC_COLINE_GITHUB_REPO: "@NEXT_PUBLIC_COLINE_GITHUB_REPO",
      COLINE_GITHUB_TOKEN: "@COLINE_GITHUB_TOKEN",
      KEYSTATIC_SECRET: "@KEYSTATIC_SECRET",
      KEYSTATIC_GITHUB_CLIENT_ID: "@KEYSTATIC_GITHUB_CLIENT_ID",
      KEYSTATIC_GITHUB_CLIENT_SECRET: "@KEYSTATIC_GITHUB_CLIENT_SECRET",
      NEXT_PUBLIC_KEYSTATIC_GITHUB_APP_SLUG: "@NEXT_PUBLIC_KEYSTATIC_GITHUB_APP_SLUG",
    },
  }),
);
