import express from 'express';
import cors from 'cors';
import multer from 'multer';
import mongoose from 'mongoose';
import checkAuth from './utils/checkAuth.js';

import * as UserController from './controllers/UserController.js';
import * as BusinessController from './controllers/BusinessController.js';

const URL = 'mongodb+srv://admin:cK6e_CNLJc-8K9p@cluster0.mjknbht.mongodb.net/blog?retryWrites=true&w=majority';

mongoose
    .connect(URL)
    .then(() => console.log('DB ok'))
    .catch((err) => console.log('DB error ' + err));

const app = express();

const storage = multer.diskStorage({
    destination: ( _, __, cb)=>{
        cb(null, 'uploads');
    },
    filename: ( _, file, cb) => {
        cb(null, file.originalname);
    },
});

const upload = multer({storage});

app.use(express.json());
app.use(cors());
app.use('/uploads', express.static('uploads'));

app.post('/auth/login', UserController.login);
app.post('/auth/register', UserController.register);
app.get('/auth/me', checkAuth, UserController.getMe);

app.get('/bizs', checkAuth, BusinessController.getAll);
app.get('/bizs/:id', checkAuth, BusinessController.getOne);
app.post('/bizs', checkAuth, BusinessController.create);
app.delete('/bizs/:id', checkAuth, BusinessController.remove);
app.patch('/bizs/:id', checkAuth, BusinessController.update);

app.listen(4444, (err) => {
    if (err) {
        return console.log(err);
    }

    console.log('Server OK');
});