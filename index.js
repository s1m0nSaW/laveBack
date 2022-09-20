import express from 'express';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';

const URL = 'mongodb+srv://admin:cK6e_CNLJc-8K9p@cluster0.mjknbht.mongodb.net/blog?retryWrites=true&w=majority';

mongoose
    .connect(URL)
    .then(() => console.log('DB ok'))
    .catch((err) => console.log('DB error ' + err));

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.post('/auth/login', ( req, res ) => {
    console.log(req.body);

    const token = jwt.sign({
        first_name: req.body.first_name,
        id: req.body.id,
    }, 'laveSecret',);

    res.json({
        success: true,
        token,
    })
});

app.listen(4444, (err) => {
    if (err) {
        return console.log(err);
    }

    console.log('Server OK');
});