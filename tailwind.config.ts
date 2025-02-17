import type {Config} from "tailwindcss";

export default {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                lightYellow: '#F6D876',
                white2: '#FFFBF2',
                darkGreen: '#05AB54',
                dark: '#1E1E1E',
            },
            fontFamily: {
                sans: ['Poppins', 'sans-serif'],
                league: ['League Gothic', 'sans-serif'],
            },
            container: {
                center: true,
                padding: {
                    DEFAULT: '1rem',
                    sm: '2rem',
                    lg: '4rem',
                    xl: '5rem',
                    '2xl': '6rem',
                },
            },
        },
    },
    plugins: [],
} satisfies Config;
