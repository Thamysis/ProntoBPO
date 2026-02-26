/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#6e009b',
                    dark: '#4b006b',
                    light: '#9d33cc',
                },
                secondary: {
                    DEFAULT: '#eb00ff',
                    dark: '#b800c7',
                },
                accent: {
                    DEFAULT: '#eb00ff',
                }
            },
            fontFamily: {
                heading: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
                body: ['Inter', 'system-ui', 'sans-serif'],
            },
            borderRadius: {
                lg: '1.5rem',
            }
        },
    },
    plugins: [],
}
