const config = {
    production: {
        PORT: 1000,
        DB_URI:'mongodb+srv://venetaivanova:Ivanova1996V@cluster0.czclffj.mongodb.net/',
        SECRET: 'PROD'
    },
    development: {
        PORT: 3000,
        DB_URI:'mongodb+srv://venetaivanova:Ivanova1996V@cluster0.czclffj.mongodb.net/',
        SECRET: 'DEV',
        TOKEN_KEY:'token',
    }
};

module.exports = config[process.env.node_env || 'development'];