import type { DeepPartial, Theme } from "@chakra-ui/react";

export const colors: DeepPartial<Theme["colors"]> = {
  yellow: {
    // secondary
    "600": "#8ba56e",
    "400": "#bed8a1",
    "300": "#cee2b9",

    "900": "#31322d",
    "700": "#949587",
    "500": "#f6f9e1",
    "200": "#fbfdf3",
  },
  gray: {
    "50": "#e9eaeb",
    "100": "#d3d5d7",
    "200": "#a8aaaf",
    "300": "#7c8086",
    "400": "#51555e",
    "500": "#252b36",
    "600": "#1e222b",
    "700": "#161a20",
    "800": "#0f1116",
    "900": "#07090b",
  },
};
