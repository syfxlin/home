/// <reference path="https://raw.githubusercontent.com/syfxlin/depker/master/src/types/index.ts" />

export const deploy = depker.docker.of(() => ({
  name: "home",
  image: "syfxlin/home",
  build: {
    dockerfile_contents: depker.template.nodejs_static({
      nginx: { root: "out" },
    }),
  },
  run: {
    traefik: {
      domain: ["ixk.me", "www.ixk.me"],
      tls: true,
    },
  },
}));
