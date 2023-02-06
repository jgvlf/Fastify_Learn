'use strict'

const users = require("../../../../Database/users/usersData")

module.exports = async function (fastify, opts) {
  fastify.get('users/:id', async function (request, reply) {
    let user;

    for(let i = 0; i<users.length; i++){
      if(users[i].id == request.params.id){
        user = users[i];
        break;
        }
      }
      if(user){
        reply.code(200).send(user);
      }
      else{
        const emptyResponse ={
          "Error": "Page not Found."
        }
        reply.code(404).send(emptyResponse)
      }
    })
}

module.exports = async function (fastify, opts) {
  fastify.get('/',async function (request, reply) {
    return reply.send(users)
    })
}
