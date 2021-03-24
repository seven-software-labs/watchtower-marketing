const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: colors.blue,
                secondary: colors.purple,
                success: colors.green,
                warning: colors.amber,
                danger: colors.red,
                gray: colors.coolGray,
            },
            fontFamily: {
                sans: ["Inter var", ...defaultTheme.fontFamily.sans],
                "norwester": ["Norwester"],
                "kollektif": ["Kollektif"],
                "montserrat": ["Montserrat"],
            },
        },
    },
    variants: {
        extend: {
            opacity: ["disabled"],
            cursor: ["disabled"],
        },
    },
    plugins: [
        require("@tailwindcss/typography"),
        require("@tailwindcss/forms"),
    ],
};