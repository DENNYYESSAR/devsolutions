/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                heading: ['"Playfair Display"', 'Georgia', 'serif'],
                display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
                body: ['"Inter"', '"Outfit"', 'system-ui', 'sans-serif'],
                accent: ['"Cormorant Garamond"', 'Georgia', 'serif'],
            },
        },
    },
    plugins: [],
}
