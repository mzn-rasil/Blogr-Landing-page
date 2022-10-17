/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./**/*.{html, js}",
        "./node_modules/flowbite/**/*.js"
    ],
    theme: {
        extend: {
            colors: {
                "cta-text": "hsl(356, 100%, 66%)",
                "cta-hover-bg": "hsl(355, 100%, 74%)",
                "heading": "hsl(208, 49%, 24%)",
                "white": "hsl(0, 0%, 100%)",
                "footer": "hsl(240, 2%, 79%)",
                "body": "hsl(207, 13%, 34%)",
                "footer-bg": "hsl(240, 10%, 16%)",
                "nav-grad-from": "hsl(13, 100%, 72%)",
                "nav-grad-to": "hsl(353, 100%, 62%)",
                "body-grad-from": "hsl(237, 17%, 21%)",
                "body-grad-to": "hsl(237, 23%, 32%)",
            },
            fontFamily: {
                "overpass": ["Overpass", "sans-serif"],
                "ubuntu": ["Ubuntu", "sans-serif"],
            }
        },
    },
    plugins: [
        require('flowbite/plugin')
    ],
}