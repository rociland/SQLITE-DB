// JWT (JSON Web Token): https://jwt.io/
// Es un token de seguridad que nosotros creamos al momento que el usuario se 
//registra con sus credenciales.
// Este token se devuelve al cliente el cual tendrá
// que enviar cada vez que solicita información al servidor.

const jwt = require("jsonwebtoken")
const jwtExpirySeconds = '2h'

module.exports = { 
    generateAuthToken: function(user) {
      const token = jwt.sign({
        name: user.usuario,
        id: user._id
      }, user.password, {expiresIn: jwtExpirySeconds})

      return token
    }
  }
  