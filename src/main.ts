import express from 'express';

import router from '@/controllers';

function main() {
  const app = express();

  app.use(express.json());
  app.use(router);

  app.listen(3000, () => {
    console.log("🚀 it's alive 🎉 (http://localhost:3000)");
  });
}

main();
