import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import bodyParser from 'body-parser'

import CartRoute from './routes/cart_router'
import AuthRoute from './routes/auth_router'

const app = express();

// Middleware 
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(morgan('dev'));

// Router
app.use('/api/cart', CartRoute)
app.use('/api/auth', AuthRoute)

export default app;