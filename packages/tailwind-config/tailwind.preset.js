module.exports = {
  theme: {
    colors: {
      transparent: "transparent",
      teal: {
        100: "#CBFEEA",
        200: "#97FDDF",
        300: "#63F9DA",
        400: "#3DF4DE",
        500: "#00EEE6",
        600: "#009994",
        700: "#44737C",
        800: "#1C3B4A",
        900: "#0D253B",
      },
      red: {
        100: "#FCDBC9",
        200: "#F9AF95",
        300: "#EE785F",
        400: "#DE4537",
        500: "#C80000",
        600: "#AC000E",
        700: "#900018",
        800: "#74001E",
        900: "#480013",
      },
      blue: {
        100: "#C6D3F6",
        200: "#90A8ED",
        300: "#5370C9",
        400: "#283F94",
        500: "#02114E",
        600: "#010D43",
        700: "#010938",
        800: "#00062D",
        900: "#000425",
      },
      yellow: {
        100: "#FEF7D4",
        200: "#FEEDAA",
        300: "#FDE07F",
        400: "#FBD35F",
        500: "#F9BE2B",
        600: "#D69C1F",
        700: "#B37C15",
        800: "#905F0D",
        900: "#774A08",
      },
      lime: {
        100: "#FDFDD1",
        200: "#FBFCA5",
        300: "#F5F777",
        400: "#EDF054",
        500: "#E2E71F",
        600: "#C1C616",
        700: "#A1A60F",
        800: "#818509",
        900: "#6B6E05",
      },
      bronze: {
        100: "#F9EED1",
        200: "#F4DBA5",
        300: "#DEB772",
        400: "#A26F30",
        500: "#915D1C",
        600: "#7C4914",
        700: "#68380E",
        800: "#542808",
        900: "#451D05",
      },
      grey: {
        100: "#D6D6D6",
        200: "#CCCCCC",
        300: "#A3A3A3",
        400: "#999999",
        500: "#8F8F8F",
        600: "#6C6C6C",
        700: "#525252",
        800: "#333333",
        900: "#222222",
      },
      white: {
        100: "#FFFFFFFF",
        64: "#FFFFFFA3",
        56: "#FFFFFF8F",
        40: "#FFFFFF66",
        24: "#FFFFFF3D",
        16: "#FFFFFF29",
        8: "#FFFFFF14",
      },
      black: {
        100: "#000000FF",
        64: "#000000A3",
        56: "#0000008F",
        40: "#00000066",
        24: "#0000003D",
        16: "#00000029",
        8: "#00000014",
      },
    },
    sizes: {
      fs: ".75rem",
      fs00: ".875rem",
      fs01: "1rem",
      fs02: "1.125rem",
      fs03: "1.25rem",
      fs04: "1.375rem",
      fs05: "1.5rem",
      fs06: "1.75rem",
      fs07: "2rem",
      fs08: "2.25rem",
      fs09: "2.5rem",
      fs10: "2.75rem",
      fs11: "3rem",
      fs12: "3.25rem",
      fs13: "3.5rem",
      fs14: "3.75rem",
      fs15: "4rem",
      fs16: "4.25rem",
      fs17: "4.5rem",
      fs18: "4.75rem",
      fs19: "5rem",
      fs20: "6rem",
      fs21: "7rem",
    },
    weights: {
      "extra-light": 200,
      light: 300,
      normal: 400,
      "semi-bold": 500,
      bold: 700,
      "extra-bold": 900,
    },
    // Below is typography for amcplus without custom font families and text transform
    // Bad practice to overwrite tailwind defaults, such as text transform
    fontSize: ({theme}) => ({
      // All display-primary fonts use font-primary font family
      // and no text transform
      "display-primary-8": [
        theme("sizes.fs20"),
        {
          lineHeight: "6.5rem",
          letterSpacing: "-3px",
          fontWeight: theme("weights.light"),
        },
      ],
      "display-primary-7": [
        theme("sizes.fs18"),
        {
          lineHeight: "5rem",
          letterSpacing: "-3px",
          fontWeight: theme("weights.light"),
        },
      ],
      "display-primary-6": [
        theme("sizes.fs15"),
        {
          lineHeight: "4.5rem",
          letterSpacing: "-2px",
          fontWeight: theme("weights.light"),
        },
      ],
      "display-primary-5": [
        theme("sizes.fs11"),
        {
          lineHeight: "3.5rem",
          letterSpacing: "-1px",
          fontWeight: theme("weights.light"),
        },
      ],
      "display-primary-4": [
        theme("sizes.fs10"),
        {
          lineHeight: "3rem",
          letterSpacing: "-1px",
          fontWeight: theme("weights.light"),
        },
      ],
      "display-primary-3": [
        theme("sizes.fs09"),
        {
          lineHeight: "3rem",
          letterSpacing: "normal",
          fontWeight: theme("weights.light"),
        },
      ],
      "display-primary-2": [
        theme("sizes.fs08"),
        {
          lineHeight: "2.5rem",
          letterSpacing: "normal",
          fontWeight: theme("weights.light"),
        },
      ],
      "display-primary-1": [
        theme("sizes.fs06"),
        {
          lineHeight: "2rem",
          letterSpacing: "normal",
          fontWeight: theme("weights.light"),
        },
      ],
      "display-primary-0": [
        theme("sizes.fs03"),
        {
          lineHeight: "1.75rem",
          letterSpacing: "normal",
          fontWeight: theme("weights.light"),
        },
      ],
      // All display-secondary fonts use font-secondary font family
      // and uppercase text transform
      "display-secondary-8": [
        theme("sizes.fs17"),
        {
          lineHeight: "4rem",
          letterSpacing: "-2px",
          fontWeight: theme("weights.bold"),
        },
      ],
      "display-secondary-7": [
        theme("sizes.fs14"),
        {
          lineHeight: "3.375rem",
          letterSpacing: "-1.75px",
          fontWeight: theme("weights.bold"),
        },
      ],
      "display-secondary-6": [
        theme("sizes.fs11"),
        {
          lineHeight: "2.5rem",
          letterSpacing: "-1.5px",
          fontWeight: theme("weights.bold"),
        },
      ],
      "display-secondary-5": [
        theme("sizes.fs09"),
        {
          lineHeight: "2rem",
          letterSpacing: "-1px",
          fontWeight: theme("weights.bold"),
        },
      ],
      "display-secondary-4": [
        theme("sizes.fs08"),
        {
          lineHeight: "2rem",
          letterSpacing: "-1px",
          fontWeight: theme("weights.bold"),
        },
      ],
      "display-secondary-3": [
        theme("sizes.fs07"),
        {
          lineHeight: "1.75rem",
          letterSpacing: "normal",
          fontWeight: theme("weights.bold"),
        },
      ],
      "display-secondary-2": [
        theme("sizes.fs05"),
        {
          lineHeight: "1.25rem",
          letterSpacing: "normal",
          fontWeight: theme("weights.bold"),
        },
      ],
      "display-secondary-1": [
        theme("sizes.fs04"),
        {
          lineHeight: "1.125rem",
          letterSpacing: "normal",
          fontWeight: theme("weights.bold"),
        },
      ],
      // All label-primary fonts use font-secondary font family
      // and uppercase text transform
      "label-primary-xl": [
        theme("sizes.fs05"),
        {
          lineHeight: "100%",
          letterSpacing: "normal",
          fontWeight: theme("weights.bold"),
        },
      ],
      "label-primary-xlg": [
        theme("sizes.fs03"),
        {
          lineHeight: "100%",
          letterSpacing: "normal",
          fontWeight: theme("weights.bold"),
        },
      ],
      "label-primary-lg": [
        theme("sizes.fs01"),
        {
          lineHeight: "100%",
          letterSpacing: "normal",
          fontWeight: theme("weights.bold"),
        },
      ],
      "label-primary-md": [
        theme("sizes.fs00"),
        {
          lineHeight: "1rem",
          letterSpacing: "1px",
          fontWeight: theme("weights.bold"),
        },
      ],
      "label-primary-sm": [
        theme("sizes.fs"),
        {
          lineHeight: "1rem",
          letterSpacing: "1px",
          fontWeight: theme("weights.bold"),
        },
      ],
      // All label-secondary fonts use font-secondary font family
      // and capitalize text transform
      "label-secondary-xl": [
        theme("sizes.fs05"),
        {
          lineHeight: "1rem",
          letterSpacing: "1px",
          fontWeight: theme("weights.normal"),
        },
      ],
      "label-secondary-lg": [
        theme("sizes.fs03"),
        {
          lineHeight: "1rem",
          letterSpacing: "1px",
          fontWeight: theme("weights.normal"),
        },
      ],
      "label-secondary-md": [
        theme("sizes.fs01"),
        {
          lineHeight: "1rem",
          letterSpacing: "normal",
          fontWeight: theme("weights.normal"),
        },
      ],
      "label-secondary-sm": [
        theme("sizes.fs00"),
        {
          lineHeight: "1rem",
          letterSpacing: "normal",
          fontWeight: theme("weights.normal"),
        },
      ],
      // All button fonts use font-secondary font family
      // and uppercase text transform
      "button-lg": [
        theme("sizes.fs03"),
        {
          lineHeight: "1.5rem",
          letterSpacing: "1px",
          fontWeight: theme("weights.bold"),
        },
      ],
      "button-md": [
        theme("sizes.fs01"),
        {
          lineHeight: "1rem",
          letterSpacing: "1px",
          fontWeight: theme("weights.bold"),
        },
      ],
      "button-sm": [
        theme("sizes.fs00"),
        {
          lineHeight: "1rem",
          letterSpacing: "1px",
          fontWeight: theme("weights.bold"),
        },
      ],
      "button-xs": [
        theme("sizes.fs"),
        {
          lineHeight: ".75rem",
          letterSpacing: "normal",
          fontWeight: theme("weights.bold"),
        },
      ],
      // All body WITHOUT -bold fonts use font-tertiary font family
      // and no text transform
      "body-4": [
        theme("sizes.fs07"),
        {
          lineHeight: "2.5rem",
          letterSpacing: "-0.5px",
          fontWeight: theme("weights.normal"),
        },
      ],
      "body-3": [
        theme("sizes.fs05"),
        {
          lineHeight: "2rem",
          letterSpacing: "normal",
          fontWeight: theme("weights.normal"),
        },
      ],
      "body-2": [
        theme("sizes.fs03"),
        {
          lineHeight: "1.75rem",
          letterSpacing: "normal",
          fontWeight: theme("weights.normal"),
        },
      ],
      "body-1": [
        theme("sizes.fs01"),
        {
          lineHeight: "1.5rem",
          letterSpacing: "normal",
          fontWeight: theme("weights.normal"),
        },
      ],
      "body-0": [
        theme("sizes.fs00"),
        {
          lineHeight: "1.25rem",
          letterSpacing: "normal",
          fontWeight: theme("weights.normal"),
        },
      ],
      "body-00": [
        theme("sizes.fs"),
        {
          lineHeight: ".9375rem",
          letterSpacing: "normal",
          fontWeight: theme("weights.normal"),
        },
      ],
      // All body WITH -bold fonts use font-quaternary font family
      // and no text transform
      "body-4-bold": [
        theme("sizes.fs07"),
        {
          lineHeight: "2.5rem",
          letterSpacing: "-0.5px",
          fontWeight: theme("weights.normal"),
        },
      ],
      "body-3-bold": [
        theme("sizes.fs05"),
        {
          lineHeight: "2rem",
          letterSpacing: "normal",
          fontWeight: theme("weights.normal"),
        },
      ],
      "body-2-bold": [
        theme("sizes.fs03"),
        {
          lineHeight: "1.75rem",
          letterSpacing: "normal",
          fontWeight: theme("weights.normal"),
        },
      ],
      "body-1-bold": [
        theme("sizes.fs01"),
        {
          lineHeight: "1.5rem",
          letterSpacing: "normal",
          fontWeight: theme("weights.normal"),
        },
      ],
      "body-0-bold": [
        theme("sizes.fs00"),
        {
          lineHeight: "1.25rem",
          letterSpacing: "normal",
          fontWeight: theme("weights.normal"),
        },
      ],
      "body-00-bold": [
        theme("sizes.fs"),
        {
          lineHeight: ".9375rem",
          letterSpacing: "normal",
          fontWeight: theme("weights.normal"),
        },
      ],
      // All (one) body-link fonts use font-tertiary font family
      // and no text transform
      "body-link-0": [
        theme("sizes.fs01"),
        {
          lineHeight: "1.25rem",
          letterSpacing: "normal",
          fontWeight: theme("weights.normal"),
        },
      ],
    }),
    textColor: ({theme}) => ({
      primary: {
        enabled: "var(--primary-enabled)",
        hover: "var(--primary-hover)",
        pressed: "var(--primary-pressed)",
        disabled: "var(--primary-disabled)",
        onPrimary: "var(--primary-onPrimary)",
        onDisabled: "var(--primary-onDisabled)",
      },
      secondary: {
        enabled: theme("colors.white.100"),
        hover: theme("colors.grey.200"),
        pressed: theme("colors.grey.700"),
        disabled: theme("colors.grey.400"),
        onPrimary: theme("colors.grey.900"),
        onDisabled: theme("colors.grey.700"),
      },
      danger: {
        enabled: theme("colors.red.500"),
        hover: theme("colors.red.600"),
        pressed: theme("colors.red.700"),
        disabled: theme("colors.grey.400"),
        onPrimary: theme("colors.red.500"),
        onDisabled: theme("colors.grey.700"),
      },
      text: {
        low: theme("colors.grey.400"),
        medium: theme("colors.grey.200"),
        high: theme("colors.white.100"),
      },
      static: {
        background: theme("colors.black.100"),
        divider: theme("colors.white.64"),
      },
      overlay: {
        white: {
          low: theme("colors.white.16"),
          medium: theme("colors.white.24"),
          high: theme("colors.white.40"),
        },
        black: {
          low: theme("colors.black.16"),
          medium: theme("colors.black.24"),
          high: theme("colors.black.40"),
        },
      },
    }),
    backgroundColor: ({theme}) => ({
      static: {
        background: theme("colors.black.100"),
        divider: theme("colors.white.64"),
      },
    }),
    borderColor: ({theme}) => ({
      primary: {
        enabled: theme("colors.teal.500"),
        hover: theme("colors.teal.600"),
        pressed: theme("colors.teal.100"),
        disabled: theme("colors.grey.400"),
        onPrimary: theme("colors.teal.500"),
        onDisabled: theme("colors.grey.700"),
      },
      secondary: {
        enabled: theme("colors.white.100"),
        hover: theme("colors.grey.200"),
        pressed: theme("colors.grey.700"),
        disabled: theme("colors.grey.400"),
        onPrimary: theme("colors.grey.900"),
        onDisabled: theme("colors.grey.700"),
      },
      danger: {
        enabled: theme("colors.red.500"),
        hover: theme("colors.red.600"),
        pressed: theme("colors.red.700"),
        disabled: theme("colors.grey.400"),
        onPrimary: theme("colors.red.500"),
        onDisabled: theme("colors.grey.700"),
      },
      text: {
        low: theme("colors.grey.400"),
        medium: theme("colors.grey.200"),
        high: theme("colors.white.100"),
      },
      static: {
        background: theme("colors.black.100"),
        divider: theme("colors.white.64"),
      },
      overlay: {
        white: {
          low: theme("colors.white.16"),
          medium: theme("colors.white.24"),
          high: theme("colors.white.40"),
        },
        black: {
          low: theme("colors.black.16"),
          medium: theme("colors.black.24"),
          high: theme("colors.black.40"),
        },
      },
    }),
    // temporarily added fill copying textColor
    fill: ({theme}) => ({
      primary: {
        enabled: theme("colors.teal.500"),
        hover: theme("colors.teal.600"),
        pressed: theme("colors.teal.100"),
        disabled: theme("colors.grey.400"),
        onPrimary: theme("colors.teal.500"),
        onDisabled: theme("colors.grey.700"),
      },
      secondary: {
        enabled: theme("colors.white.100"),
        hover: theme("colors.grey.200"),
        pressed: theme("colors.grey.700"),
        disabled: theme("colors.grey.400"),
        onPrimary: theme("colors.grey.900"),
        onDisabled: theme("colors.grey.700"),
      },
      danger: {
        enabled: theme("colors.red.500"),
        hover: theme("colors.red.600"),
        pressed: theme("colors.red.700"),
        disabled: theme("colors.grey.400"),
        onPrimary: theme("colors.red.500"),
        onDisabled: theme("colors.grey.700"),
      },
      text: {
        low: theme("colors.grey.400"),
        medium: theme("colors.grey.200"),
        high: theme("colors.white.100"),
      },
      static: {
        background: theme("colors.black.100"),
        divider: theme("colors.white.64"),
      },
      overlay: {
        white: {
          low: theme("colors.white.16"),
          medium: theme("colors.white.24"),
          high: theme("colors.white.40"),
        },
        black: {
          low: theme("colors.black.16"),
          medium: theme("colors.black.24"),
          high: theme("colors.black.40"),
        },
      },
    }),
    extend: {
      fontFamily: {
        primary: ["var(--font-crimson-pro)"],
        secondary: ["var(--font-oswald)"],
        tertiary: ["var(--font-roboto-serif)"],
        quaternary: ["var(--font-inter)"],
      },
    },
  },
  plugins: [],
};
