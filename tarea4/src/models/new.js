




const noticia = {
    buscar: (keyword) =>{
        let url = "https://newsapi.org/v2/everything?q=" + keyword + "&apiKey=" + process.env.NEWS_APIKEY
        let req = new Request(url);
        fetch(req).then(function(response){
            console.log(response.json())
        })

    }
}