import express from 'express';

import routes from '@/routes';

const server = express();

server.use(express.json());
server.use('/api', routes);

server.listen(3000, () => {
  console.log("🚀 it's alive 🎉 (http://localhost:3000)");
});
