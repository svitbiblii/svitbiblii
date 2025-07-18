import type { Config } from 'tailwindcss';

const config: Config = {
	darkMode: ['class'],
	content: ['./app/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			screens: {
				'sm': '640px',
				// => @media (min-width: 640px) { ... }
				'md': '768px',
				// => @media (min-width: 768px) { ... }
				'lg': '1024px',
				// => @media (min-width: 1024px) { ... }
				'xl': '1280px',
				// => @media (min-width: 1280px) { ... }
				'2xl': '1536px', // => @media (min-width: 1536px) { ... }
			},
			indent: {
				sm: '1.2em',
				md: '1.5em',
				lg: '2em',
				xl: '2.5em',
			},
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					lite: 'hsl(var(--primary-lite))',
					dark: 'hsl(var(--primary-dark))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
					dark: 'hsl(var(--destructive-dark))',
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))',
				},
			},
			fontFamily: {
				// Стандартний шрифт для рядового тексту та кнопок (Montserrat)
				sans: ['var(--font-montserrat)', 'sans-serif'],
				// Шрифт для заголовків (Playfair Display)
				heading: ['var(--font-playfair-display)', 'serif'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			boxShadow: {
				'card-soft': `0px 0px 20px hsl(var(--shadow-color) / var(--shadow-opacity))`,
				// Або, якщо ви хочете два шари тіні, як у багатьох сучасних дизайнах
				'card-elevated': `0 4px 6px -1px hsl(var(--shadow-color) / calc(var(--shadow-opacity) * 0.1)),
                          0 2px 4px -2px hsl(var(--shadow-color) / calc(var(--shadow-opacity) * 0.06))`,
				// Ви можете експериментувати з цими значеннями
			},
			height: {
				'screen-90': '90%',
				'h-122': '26rem',
				'40vh': '40vh',
			},
			maxHeight: {
				'40vh': '40vh',
			},
			inset: {
				'40vh': '40vh', // add custom top
			},
		},
	},
	/*plugins: [require("tailwindcss-animate")],*/
};
export default config;
