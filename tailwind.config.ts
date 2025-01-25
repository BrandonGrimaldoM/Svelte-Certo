import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			boxShadow:{
				"mini": "12px 12px 20px 0px rgba(0, 0, 0, 0.10)"
			}
		}
	},

	plugins: [typography, forms, containerQueries]
} satisfies Config;
