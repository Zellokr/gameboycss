module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                'yellowcolor': '#ee9d28'
            }
        }
    },
    variants: {
        extend: {}
    },
    plugins: []
}
