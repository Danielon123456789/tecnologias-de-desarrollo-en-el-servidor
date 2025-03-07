
function authMiddleware (req, res, next) {

    const {token} = req.query;

    if(token === process.env.TOKEN){
        
        req.user = {
            id: 123
        }

        next();
    } else {

        res.sendStatus(401)

    }
}





module.exports = authMiddleware;