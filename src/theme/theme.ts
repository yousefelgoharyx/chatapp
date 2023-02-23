export type Theme = {
  background: string;
  secondaryBackground: string;
  text: string;
};
const light: Theme = {
  background: "white",
  secondaryBackground: "#eaeaea",
  text: "black",
};
const dark: Theme = {
  background: "black",
  secondaryBackground: "#eaeaea",
  text: "white",
};

export const themes = { dark, light };
