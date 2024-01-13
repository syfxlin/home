import { config, singleton } from "@keystatic/core";
import { fields } from "@syfxlin/reks";
import { COLINE_GITHUB_REPO, IS_DEV } from "./src/env/private";

function storage() {
  if (IS_DEV || !COLINE_GITHUB_REPO) {
    return { kind: "local" } as const;
  } else {
    const [name, repo] = COLINE_GITHUB_REPO.split("/");
    return { kind: "github", repo: { owner: name, name: repo } } as const;
  }
}

export default config({
  storage: storage(),
  singletons: {
    // config
    seo: singleton({
      label: "SEO",
      path: "public/content/config/seo",
      entryLayout: "form",
      format: { data: "yaml" },
      schema: {
        language: fields.text({
          label: "语言",
          validation: { length: { min: 1 } },
        }),
        link: fields.text({
          label: "站点地址",
          validation: { length: { min: 1 } },
        }),
        logo: fields.image({
          label: "站点图片",
          directory: "public/image/config/seo",
          publicPath: "/image/config/seo",
          validation: { isRequired: true },
        }),
        title: fields.text({
          label: "站点主标题",
          validation: { length: { min: 1 } },
        }),
        subtitle: fields.text({
          label: "站点子标题",
          validation: { length: { min: 1 } },
        }),
        description: fields.text({
          label: "站点描述",
          multiline: true,
          validation: { length: { min: 1 } },
        }),
        birthday: fields.datetime({
          label: "站点起始日",
          validation: { isRequired: true },
        }),
        keywords: fields.array(
          fields.text({
            label: "关键词",
            validation: { length: { min: 1 } },
          }),
          {
            label: "站点关键词",
            itemLabel: props => props.value,
            validation: { length: { min: 0 } },
          },
        ),
      },
    }),
    author: singleton({
      label: "作者",
      path: "public/content/config/author",
      entryLayout: "form",
      format: { data: "yaml" },
      schema: {
        username: fields.text({
          label: "用户名",
          validation: { length: { min: 1 } },
        }),
        firstname: fields.text({
          label: "名",
          validation: { length: { min: 1 } },
        }),
        lastname: fields.text({
          label: "姓",
          validation: { length: { min: 1 } },
        }),
        description: fields.text({
          label: "描述",
          multiline: true,
          validation: { length: { min: 1 } },
        }),
        avatar: fields.image({
          label: "头像",
          directory: "public/image/config/author",
          publicPath: "/image/config/author",
          validation: { isRequired: true },
        }),
      },
    }),
    header: singleton({
      label: "页首",
      path: "public/content/config/header",
      entryLayout: "form",
      format: { data: "yaml" },
      schema: {
        main: fields.array(
          fields.object({
            title: fields.text({
              label: "标题",
              validation: { length: { min: 1 } },
            }),
            link: fields.text({
              label: "链接",
              validation: { length: { min: 1 } },
            }),
          }),
          {
            label: "主菜单",
            itemLabel: props => props.fields.title.value,
            validation: { length: { min: 0, max: 10 } },
          },
        ),
      },
    }),
    footer: singleton({
      label: "页脚",
      path: "public/content/config/footer",
      entryLayout: "form",
      format: { data: "yaml" },
      schema: {
        main: fields.array(
          fields.object({
            title: fields.text({
              label: "标题",
              validation: { length: { min: 1 } },
            }),
            link: fields.text({
              label: "链接",
              validation: { length: { min: 1 } },
            }),
          }),
          {
            label: "主页脚",
            itemLabel: props => props.fields.title.value,
            validation: { length: { min: 0, max: 10 } },
          },
        ),
      },
    }),
  },
});
