
const paginado = process.env.PAGINADO === 'true'

function getUsers (req, res){

    if (paginado){
        res.sen({
            count: 10,
            data: []
        })
    } else {
        res.send([])
    }

}

function getSingleUser(req, res){

    res.send('datos del usuario: ' + req.params.id + " pedido por el usuario " + req.user.id)

}


module.exports = {
    getUsers,
    getSingleUser
} 


