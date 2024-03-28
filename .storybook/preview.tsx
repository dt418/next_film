import React from "react";
import { withThemeByClassName } from "@storybook/addon-themes";
import type { Preview } from "@storybook/react";

import { ThemeProvider } from "../src/providers/theme";

import "@/app/globals.css";

const decorators = [(Story) => (
  <ThemeProvider>
    <Story />
  </ThemeProvider>
), withThemeByClassName({
    themes: {
        // nameOfTheme: 'classNameForTheme',
        light: '',
        dark: 'dark',
    },
    defaultTheme: 'light',
})];
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: decorators
};

export default preview;
