import Fastify from 'fastify';

const fastify = Fastify();

// Define a simple GET endpoint
const getPersonHandler = async (request: any, reply: any) => {
  reply.send({ message: 'Hello, Person!' });
};

// Register the route
fastify.get('/person', getPersonHandler);

// Start the server
const startServer = async () => {
  try {
    await fastify.listen({ port: 3000 });
    console.log('Server is running at http://localhost:3000');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

startServer();