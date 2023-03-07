const axios = require('axios')

const noticia = {
    buscar: async(keyword) => {

        const url = `https://newsapi.org/v2/everything?q=${keyword}&apiKey=${process.env.NEWS_APIKEY}`
        console.log(url)
        const news = await axios.get(url)

        return news

    }
}

module.exports = noticia