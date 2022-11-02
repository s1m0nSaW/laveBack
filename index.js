import express from 'express';
import cors from 'cors';
import multer from 'multer';
import mongoose from 'mongoose';
import checkAuth from './utils/checkAuth.js';

import * as UserController from './controllers/UserController.js';
import * as BusinessController from './controllers/BusinessController.js';
import * as CarController from './controllers/CarController.js';
import * as HouseController from './controllers/HouseController.js';
import * as ProfController from './controllers/ProfController.js';

const URL = 'mongodb+srv://admin:cK6e_CNLJc-8K9p@cluster0.mjknbht.mongodb.net/blog?retryWrites=true&w=majority';

mongoose
    .connect('mongodb://localhost/lave')
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

app.post('/upload', upload.single('image'), (req,res) => {
    res.json({
        url: `/uploads/${req.file.originalname}`,
    });
});

app.post('/auth/login', UserController.login);
app.post('/auth/register', UserController.register);
app.get('/auth/me/:id',UserController.getMe);
app.get('/auth/users',UserController.getAll);
app.patch('/auth/:id',UserController.update);
app.delete('/auth/:id',UserController.remove);

app.get('/bizs', BusinessController.getAll);
app.get('/bizs/:id',BusinessController.getOne);
app.post('/bizs',BusinessController.create);
app.delete('/bizs/:id',BusinessController.remove);
app.patch('/bizs/:id',BusinessController.update);

app.get('/cars', CarController.getAll);
app.get('/cars/:id',CarController.getOne);
app.post('/cars',CarController.create); 
app.delete('/cars/:id',CarController.remove);
app.patch('/cars/:id',CarController.update);

app.get('/houses', HouseController.getAll);
app.get('/houses/:id',HouseController.getOne);
app.post('/houses',HouseController.create); 
app.delete('/houses/:id',HouseController.remove);
app.patch('/houses/:id',HouseController.update);

app.get('/profs', ProfController.getAll);
app.get('/profs/:id',ProfController.getOne);
app.post('/profs',ProfController.create); 
app.delete('/profs/:id',ProfController.remove);
app.patch('/profs/:id',ProfController.update);


app.listen(4444, (err) => {
    if (err) {
        return console.log(err);
    }

    console.log('Server OK');
});