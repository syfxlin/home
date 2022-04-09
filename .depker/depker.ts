/// <reference path="https://raw.githubusercontent.com/syfxlin/depker/master/src/types/index.ts" />

export const deploy = async () => {
  const dockerfile = depker.template.nodejs_static({
    nginx: { root: "out" },
  });
  const image = await depker.docker.build("syfxlin/home", {
    dockerfile_contents: dockerfile,
  });
  const compose = depker.compose.deployment("home", {
    services: {
      web: {
        image,
        traefik: {
          domain: ["ixk.me", "www.ixk.me"],
          tls: true,
        },
      },
    },
  });
  await compose.up();
};
