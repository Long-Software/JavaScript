import 'dotenv/config';
import { env } from './helpers/index';
import app from 'app';

const port = env('PORT');

app.listen(port, () => {
  `Server is running on port: ${port}\nLink => http://localhost:${port}`;
});
