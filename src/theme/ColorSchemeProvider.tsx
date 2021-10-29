import React, { createContext, useContext, useState } from "react";

export type ColorScheme = "light" | "dark";

export type ColorSchemeContextProps = {
  colorScheme: ColorScheme;
  toggleColorScheme?: (colorScheme?: ColorScheme) => void;
};

// @ts-ignore
const ColorSchemeContext = createContext<ColorSchemeContextProps>(null);

export const useColorScheme = () => {
  const ctx = useContext(ColorSchemeContext);
  if (!ctx) {
    throw new Error(
      "useColorScheme hook was called outside of context, make sure your app is wrapped with ColorSchemeProvider component"
    );
  }
  return ctx;
};

export const ColorSchemeProvider: React.FC = ({ children }) => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
  return (
    <ColorSchemeContext.Provider
      value={{
        colorScheme,
        toggleColorScheme: (value) =>
          setColorScheme(value ?? (colorScheme === "dark" ? "light" : "dark")),
      }}
    >
      {children}
    </ColorSchemeContext.Provider>
  );
};

export const ColorSchemeConsumer = ColorSchemeContext.Consumer;
