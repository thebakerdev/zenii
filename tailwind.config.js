module.exports = {
    purge: {
        content: [
            'layouts/**/*.htm',
            'pages/**/*.htm',
            'partials/**/*.htm'
        ],
        options: {
            whitelistPatterns: [
                /active$/,
                /error$/,
                /sal-animate$/,
                /disable-scroll$/,
                /^glider/],
            whitelistPatternsChildren: [/active$/]
        }
    },
    theme: {
        colors: {
            primary: '#6C63FF',
            secondary: '#8C87E6',
            tertiary: '#444444',
            error: '#FF6363',
            white: '#FFFFFF',
            lightGray: '#F9F9F9',
            gray: '#F3F3F3',
            transparent: 'transparent'
        },
        fontFamily: {
            body: ['Roboto','sans-serif'],
            display: ['Rubik', 'Roboto', 'sans-serif']
        }
    }
}