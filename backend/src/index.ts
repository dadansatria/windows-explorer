//import elysia
import { Elysia } from 'elysia';
import { cors } from '@elysiajs/cors'

//import routes
import Routes from './routes';

//initiate elysia
const app = new Elysia();

//route home
app.get('/', () => 'Hello Elysia!');

app.use(cors({
    origin: true, // Allow all origins in development
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type'],
    credentials: true
}))

//add routes
app.group('/api', (app) => app.use(Routes))

//start server on port 3000
app.listen(3000);
console.log(
    `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`
);

export { app };