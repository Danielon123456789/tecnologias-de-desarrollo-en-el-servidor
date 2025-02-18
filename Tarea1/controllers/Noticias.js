
const axios = require('axios');

function getNotices(req, res){

    const API_KEY = process.env.API_KEY;

    const { q , searchIn } = req.query;

    let url = `https://newsapi.org/v2/everything?apiKey=${API_KEY}`;

    if (q) url += `&q=${q}`;
    if (searchIn) url += `&searchIn=${searchIn}`;

    axios.get(url).then(
        response => {
            res.json(response.data);
        }
    ).catch( error => {
        console.error(error);
        res.status(500).json({ error: 'Error obteniendo noticias'})
    })

}


module.exports = {
    getNotices
}