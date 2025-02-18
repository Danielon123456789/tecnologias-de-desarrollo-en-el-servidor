// importo express

const express = require ('express')
const router = express.Router();

const Lista_de_fuentesRoutes = require('./Lista_de_fuentes');
const NoticiasRouters = require('./Noticias');
const Top_headllinesRouters = require('./Top_headlines');

router.use('/sources',Lista_de_fuentesRoutes)
router.use('/everything',NoticiasRouters)
router.use('/headlines',Top_headllinesRouters)

module.exports = router;