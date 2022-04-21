import express from 'express';
import {router} from './src/routes/router'

const app = express();

app.use(express.json());
app.use('/api',router)

app.listen(5000, () => {
    console.log('server started')
})