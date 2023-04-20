import { extendTheme } from "@chakra-ui/react";
import type {
  DeepPartial,
  Theme,
  ThemeConfig,
  SystemStyleObjectRecord,
} from "@chakra-ui/react";
import { colors } from "./colors";

const fonts: DeepPartial<Theme["fonts"]> = {
  heading: "Poppins, sans-serif",
  body: "Poppins, sans-serif",
};

const config: ThemeConfig = {
  initialColorMode: "dark",
  disableTransitionOnChange: false,
};

const layerStyles: SystemStyleObjectRecord = {
  layoutBlock: {
    marginX: "auto",
    width: "full",
    maxWidth: {
      base: "100vw",
      md: "85vw",
      lg: "800px",
    },
    paddingY: 4,
    paddingX: {
      base: 6,
      md: 2,
      lg: 0,
    },
  },
};

const theme = extendTheme({
  fonts,
  config,
  layerStyles,
  colors,
});

export default theme;
