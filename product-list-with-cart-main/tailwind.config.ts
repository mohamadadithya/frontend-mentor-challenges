import containerQueries from '@tailwindcss/container-queries';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				primary: 'hsl(14, 86%, 42%)',
				secondary: 'hsl(159, 69%, 38%)',
				rose: {
					50: 'hsl(20, 50%, 98%)',
					100: 'hsl(13, 31%, 94%)',
					300: 'hsl(14, 25%, 72%)',
					400: 'hsl(7, 20%, 60%)',
					500: 'hsl(12, 20%, 44%)',
					900: 'hsl(14, 65%, 9%)'
				}
			},
			fontFamily: {
				redhat: ['RedHatText', 'sans-serif'],
				'redhat-semibold': ['RedHatText Semibold', 'sans-serif'],
				'redhat-bold': ['RedHatText Bold', 'sans-serif']
			}
		}
	},

	plugins: [containerQueries]
} as Config;
