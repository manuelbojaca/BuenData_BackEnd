import dotenv from 'dotenv';
import app from '@src/app';

dotenv.config();

function main() {
  const port = app.get('port');
  app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
  });
}

main();
