import { FastifyPluginAsync } from 'fastify'


const users: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  
  fastify.get('/users', async function (request, reply) {
    return { users: true }
  })

  fastify.post('/users', async ({ body } , res)=>{
  fastify.log.info(JSON.stringify(body))
      return {users2: false}
  })
}

export default users;
