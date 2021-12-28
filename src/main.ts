import express, { Router } from 'express';

function main() {
  const app = express();
  const router = Router();

  app.use(express.json());
  app.use(router);

  router.get('/', (req, res) => {
    res.status(200).json({ foo: 'bar' });
  });

  app.listen(3000, () => {
    console.log("🚀 it's alive 🎉 (http://localhost:3000)");
  });
}

main();
