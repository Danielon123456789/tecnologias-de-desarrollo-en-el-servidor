
const axios = require('axios');

function getTop_HeadLines(req, res){

    const API_KEY = process.env.API_KEY;

    const { country, category, q} = req.query;


    let url = `https://newsapi.org/v2/top-headlines?apiKey=${API_KEY}`;

    if (country) url += `&country=${country} `;
    if (category) url += `&category=${category}`;
    if (q) url += `&q=${q}`;

    axios.get(url).then(
        response => {
            res.json(response.data);
     }).catch( error => {
        console.error(error);
        res.status(500).json({ error: "error obteniendo Top headlines"})

     } )

}

module.exports = { 
    getTop_HeadLines
};

