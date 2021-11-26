import { FastifyPluginAsync } from 'fastify'

const root: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get('/', async function (request, reply) {
    fastify.log.info("cheguei aqui")
    fastify.log.error("carinha triste")
    return { root: true }
  })
}

export default root;
