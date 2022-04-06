/* eslint-disable no-undef */

export const deploy = async () => {
  const dockerfile = depker.template.nodejsStatic({
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
