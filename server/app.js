import express from 'express';
import configRouteFunction from './routes/index.js';

const app = express();

app.use(express.json());

configRouteFunction(app);

app.listen(3000, () => {
    console.log('Server is running');
    console.log('Routes are running on http://localhost:3000');
});