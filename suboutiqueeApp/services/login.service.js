const loginRepository = require('../data/login')

//const { generateAuthToken } = require('../services/auth.service')

module.exports = {
  
  //DESACTIVE EL TOKEN PORQUE NO ME ACUERDO COMO GENERARLO XD
    login: async (usuario, password) => {
    const user = await loginRepository.findByCredentials(usuario, password)
    //const token = generateAuthToken(user)
    //return { user,token}
    return{user}
  }

}
