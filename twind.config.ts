import { Options } from "$fresh/plugins/twind.ts";

export default {
  selfURL: import.meta.url,
  theme: {
    extend: {
      colors: {
        "purple": "#3f3cbb",
        "midnight": "#121063",
        "metal": "#565584",
        "tahiti": "#3ab7bf",
        "silver": "#ecebff",
        "bubble-gum": "#ff77e9",
        "bermuda": "#78dcca",
        "turquoise": "#11dda0",
      },
    },
  },
} as Options;
