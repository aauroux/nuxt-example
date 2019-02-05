const pkg = require('./package')


module.exports = {
    mode: 'universal',

    /**
     * Manifest
     */
    manifest: {
        name: 'Star Wars Application',
        lang: 'en',
        short_name: 'SWAPP',
        display: 'standalone',
        orientation: 'portrait',
        background_color: '#000',
        description: 'SW application prototype',
    },
    /**
     * Manifest
     */
    meta: {
        nativeUI: true,
        theme_color: '#000',
        appleStatusBarStyle: 'black',
    },

    /*
    ** Headers of the page
    */
    head: {
        title: 'My Application',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: pkg.description },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            {
                rel: 'stylesheet',
                type: 'text/css',
                href: 'https://use.fontawesome.com/releases/v5.7.1/css/all.css',
                integrity: 'sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr',
                crossorigin: 'anonymous',
            },
        ],
    },

    /*
    ** Customize the progress-bar color
    */
    loading: '@/components/Loading.vue',

    /*
    ** Global CSS
    */
    css: [
        'element-ui/lib/theme-chalk/index.css',
        '@/assets/css/app.css',
        '@/assets/css/transitions.css',
    ],

    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        { src: '@/plugins/no-ssr', ssr: false },
        '@/plugins/element-ui',
        '@/plugins/helpers',
        '@/plugins/components',
    ],

    /*
    ** Nuxt.js modules
    */
    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/pwa',
    ],

    /*
    ** Build configuration
    */
    build: {
        transpile: [/^element-ui/],

        /*
        ** You can extend webpack config here
        */
        extend(config, ctx)
        {

        },
    },
}
