/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            backgroundImage: {
                "cta-bg": "url('../src/bgmarble.webp')"
            }
        }
    },
    plugins: []
};
