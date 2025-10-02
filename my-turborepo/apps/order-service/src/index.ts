import Fastify, { FastifyInstance } from "fastify";

const fastify: FastifyInstance = Fastify({})

fastify.get("/", (request, reply) => {
  return reply.send("Order endpoints works");
})

const start = async () => {
  try {
    await fastify.listen({ port: 8001 });
    console.log("Order service is running on port 8001")

    const address = fastify.server.address()
    const port = typeof address === 'string' ? address : address?.port

  } catch (err) {
    console.log(err)
    process.exit(1)
  }
}

start()