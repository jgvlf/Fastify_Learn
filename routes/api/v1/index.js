'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    return {
        API: "EManual",
        Version: "1.0.0"
    }
  })
}
