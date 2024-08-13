import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		// Add ui core for tailwindcss to scan
		"./src/ui-core/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: [
					"var(--font-quicksand)",
					...defaultTheme.fontFamily.sans,
				],
			},
			colors: {
				iceClimber: {
					400: "#2bd9af",
					500: "#24bc98",
					600: "#1da181",
				},
				brinkPink: {
					400: "#ff5e84",
					500: "#de5172",
					600: "#be4460",
				},
				magicInc: {
					400: "#3c73ff",
					500: "#3363de",
					600: "#2a54be",
					700: "#0e42fd",
				},
				desiredDawn: "#d9d9d9",
				whiteSmoke: "#f5f5f5",
				blackSheep: "#0e0e0e",

				/* Color Palette */

				primary: {
					DEFAULT: "#EB8120",
					hover: "#F17502",
					selected: "#D16400",
					inverseHover: "#F7CDA6",
					inverseHoverSelected: "#EBB888",
				},
				typography: "#001948",
				border: {
					active: "#7C89A1",
					inactive: "#C6CBD5",
				},
				background: {
					elephantGray: "#F7F8F9",
					elephantContrast: "#F0F2F5",
					white: "#FFFFFF",
				},
				link: {
					DEFAULT: "#6A81FD",
					hover: "#5467CE",
					active: "#4054C1",
					disabled: "#A5B0E3",
				},
				danger: {
					DEFAULT: "#E1273D",
					glow: "#ED9AA4",
					inactive: "#F0939E",
					disabled: "#F9D4D8",
					hover: "#C01227",
					active: "#9D0215",
				},
				shadow: "#01055D",
			},
		},
	},
	plugins: [tailwindcssAnimate],
};
export default config;
