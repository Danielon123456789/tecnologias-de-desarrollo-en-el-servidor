const axios = require('axios');

function getSources(req, res){
    
    const API_KEY = process.env.API_KEY;

    const { country, language, category } = req.query;


    let url = `https://newsapi.org/v2/top-headlines/sources?apiKey=${API_KEY}`

    if (country) url += `&country=${country}`;
    if (language) url += `&language=${language}`
    if (category) url += `&category=${category}`

    axios.get(url).then(
        response => {
            res.json(response.data);
        }
    ).catch( error => {
        console.error(error);
        res.status(500).json({ error: 'Error obteniendo fuentes'});
    });

}

module.exports = {
    getSources
}