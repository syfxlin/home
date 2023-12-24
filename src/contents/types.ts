export interface SeoData {
  language: string;
  link: string;
  logo: string;
  title: string;
  subtitle: string;
  description: string;
  birthday: Date;
  keywords?: ReadonlyArray<string>;
}

export interface HeaderData {
  main: ReadonlyArray<{
    title: string;
    link: string;
  }>;
}

export interface FooterData {
  main: ReadonlyArray<{
    title: string;
    link: string;
  }>;
}

export interface AuthorData {
  fullname: string;
  username: string;
  firstname: string;
  lastname: string;
  avatar: string;
  description: string;
}
