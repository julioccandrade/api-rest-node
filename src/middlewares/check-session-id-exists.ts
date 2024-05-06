import { FastifyReply, FastfyRequest } from 'fastify'

export async function checkSessionIdExists(
  request: FastfyRequest,
  reply: FastifyReply,
) {
  const sessionId = request.cookies.sessionId

  if (!sessionId) {
    return reply.status(401).send({
      error: 'Unauthorized.',
    })
  }
}
