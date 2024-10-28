import app from './app';
import config from './config/default.config';

app.listen(config.port, () => {
  console.log(
    `Server is running at http://${config.backEndHost}:${config.port}`
  );
});
