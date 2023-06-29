import dotenv from 'dotenv'
import "reflect-metadata";
import mongoose, { MongooseOptions } from 'mongoose';
import { InversifyExpressServer } from "inversify-express-utils";

import app from './app';
import { container } from './container';
import './controllers/user_controller'
import './controllers/auth_controller' // remember
import './controllers/book_controller'

dotenv.config();
const port = process.env.PORT || 5002;

const uri = process.env.MONGODB_URL;

mongoose
    .connect(String(uri), {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    } as MongooseOptions)
    .then(() => {
        console.log('Connected to MongoDB')
    })
    .catch((err) => {
        console.log('Failed to connect to MongoDB', err)
    });

// let server = new InversifyExpressServer(container, null, { rootPath: "/api"}, app)  

// let appConfigured = server.build()

// Start server
app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
})

