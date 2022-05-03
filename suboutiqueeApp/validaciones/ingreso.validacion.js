const estaAutenticado = (req) => {

    let token = req.headers['authorization']
    //const token = req.header('auth-token')
    return true; // token ? true : false
}

module.exports = {
    estaAutenticado
}