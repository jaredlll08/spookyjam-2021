const colors = require('tailwindcss/colors')

module.exports = {
    mode: "jit",
    purge: ["./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                gray: {
                    ...colors.trueGray,
                },
            },
            height: {}
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
