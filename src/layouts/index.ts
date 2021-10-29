import Main from "./Main";

const layouts = {
  main: Main,
};

export type Layouts = keyof typeof layouts;

export default layouts;
