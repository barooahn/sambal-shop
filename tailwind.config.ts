/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	// CSS optimization
	corePlugins: {
		preflight: true,
	},
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			// Fonts matching your product labels
			fontFamily: {
				brand: ["Playfair Display", "serif"], // For main branding
				elegant: ["Cormorant Garamond", "serif"], // For elegant headings
				script: ["Dancing Script", "cursive"], // For script text like on labels
				body: ["Inter", "sans-serif"], // Clean body text
			},

			// Colors matching your product design
			colors: {
				// Deep burgundy/wine red from your jars
				burgundy: {
					50: "#fdf2f3", // Very light burgundy
					100: "#fce7e8", // Light burgundy
					200: "#fbd4d6", // Soft burgundy
					300: "#f7aab0", // Medium light burgundy
					400: "#f27881", // Medium burgundy
					500: "#ea4c5a", // Primary burgundy
					600: "#d63446", // Strong burgundy
					700: "#b52d3c", // Dark burgundy
					800: "#962838", // Darker burgundy
					900: "#7f1d2b", // Very dark burgundy (your jar color)
					950: "#450a0e", // Deepest burgundy
				},

				// Rich gold from your labels
				gold: {
					50: "#fffbeb", // Very light gold
					100: "#fef3c7", // Light gold
					200: "#fde68a", // Soft gold
					300: "#fcd34d", // Medium light gold
					400: "#fbbf24", // Medium gold
					500: "#f59e0b", // Primary gold
					600: "#d97706", // Strong gold (your label color)
					700: "#b45309", // Dark gold
					800: "#92400e", // Darker gold
					900: "#78350f", // Very dark gold
					950: "#451a03", // Deepest gold
				},

				// Cream/beige for backgrounds
				cream: {
					50: "#fefdfb", // Almost white cream
					100: "#fef9f1", // Very light cream
					200: "#fdf2e1", // Light cream
					300: "#fae8c8", // Soft cream
					400: "#f5d9a4", // Medium cream
					500: "#efc776", // Primary cream
					600: "#e2b04a", // Strong cream
					700: "#c8963d", // Dark cream
					800: "#a37838", // Darker cream
					900: "#856234", // Very dark cream
					950: "#4a3119", // Deepest cream
				},

				// Enhanced neutrals
				neutral: {
					50: "#fafaf9", // Almost white
					100: "#f5f5f4", // Very light gray
					200: "#e7e5e4", // Light gray
					300: "#d6d3d1", // Medium light gray
					400: "#a8a29e", // Medium gray
					500: "#78716c", // Primary gray
					600: "#57534e", // Dark gray
					700: "#44403c", // Darker gray
					800: "#292524", // Very dark gray
					900: "#1c1917", // Almost black
				},

				// Shadcn/UI compatibility
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
			},

			// Custom spacing and sizing
			spacing: {
				"18": "4.5rem",
				"22": "5.5rem",
				"26": "6.5rem",
				"30": "7.5rem",
				"34": "8.5rem",
				"38": "9.5rem",
				"42": "10.5rem",
				"46": "11.5rem",
				"50": "12.5rem",
			},

			// Enhanced border radius
			borderRadius: {
				xl: "1rem",
				"2xl": "1.5rem",
				"3xl": "2rem",
				"4xl": "2.5rem",
				"5xl": "3rem",
			},

			// Box shadows with burgundy and gold
			boxShadow: {
				burgundy:
					"0 4px 6px -1px rgba(127, 29, 43, 0.15), 0 2px 4px -1px rgba(127, 29, 43, 0.1)",
				gold: "0 4px 6px -1px rgba(217, 119, 6, 0.15), 0 2px 4px -1px rgba(217, 119, 6, 0.1)",
				luxury: "0 10px 15px -3px rgba(127, 29, 43, 0.15), 0 4px 6px -2px rgba(217, 119, 6, 0.1)",
				"glow-gold": "0 0 20px rgba(217, 119, 6, 0.4)",
				"inner-burgundy":
					"inset 0 2px 4px 0 rgba(127, 29, 43, 0.1)",
			},

			// Custom gradients
			backgroundImage: {
				"burgundy-gradient":
					"linear-gradient(135deg, #7f1d2b 0%, #962838 50%, #b52d3c 100%)",
				"gold-gradient":
					"linear-gradient(135deg, #f59e0b 0%, #d97706 50%, #b45309 100%)",
				"luxury-gradient":
					"linear-gradient(135deg, #7f1d2b 0%, #d97706 100%)",
				"cream-radial":
					"radial-gradient(circle at center, #fef9f1 0%, #fdf2e1 100%)",
			},

			// Animations
			keyframes: {
				float: {
					"0%, 100%": { transform: "translateY(0px)" },
					"50%": { transform: "translateY(-8px)" },
				},
				glow: {
					"0%, 100%": { opacity: "0.8" },
					"50%": { opacity: "0.4" },
				},
				"luxury-spin": {
					"0%": { transform: "rotate(0deg)" },
					"100%": { transform: "rotate(360deg)" },
				},
			},
			animation: {
				float: "float 4s ease-in-out infinite",
				glow: "glow 3s ease-in-out infinite",
				"luxury-spin": "luxury-spin 20s linear infinite",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
};
