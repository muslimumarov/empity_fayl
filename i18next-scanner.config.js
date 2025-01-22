module.exports = {
    input: [
        'src/**/*.{js,jsx,ts,tsx}', // Adjust the path based on where your files are located
    ],
    output: './public/locales/$LOCALE/$NAMESPACE.json',
    options: {
        removeUnusedKeys: true,
        keySeparator: false, // Disable key separator (optional, depending on your key structure)
        nsSeparator: false, // Disable namespace separator (optional, depending on your key structure)
        interpolation: {
            prefix: '{{',
            suffix: '}}',
        },
    },
};
