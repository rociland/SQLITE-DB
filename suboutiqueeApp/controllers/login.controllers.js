// 401 indica que la petición (request) no ha sido 
// ejecutada porque carece de credenciales válidas
//  de autenticación para el recurso solicitado.

// Código 200: esto no es un error HTTP, sino todo lo contrario.
//  Significa que la página ha cargado de forma correcta

 const loginService = require('../services/login.service')
  
  const loginUser = async (req, res) => {
    try {
      const { user, token } = await loginService.login(req.body.usuario, req.body.password)
      res.status(200).send({ user, token})
    } catch (error) {
      res.status(401).send(error.message)
    }
  }


module.exports = { loginUser };