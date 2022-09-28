import jwt from 'jsonwebtoken';

import UserModel from '../models/User.js'

export const register =  async (req,res)=>{
    try{

    const doc = new UserModel({
        firstName: req.body.firstName,
        work: req.body.work,
        userId: req.body.userId,
        balance: req.body.balance,
        house: req.body.house.split(','),
        car: req.body.car.split(','),
        credit: req.body.credit.split(','),
    });

    const user = await doc.save();

    const token = jwt.sign({
        _id: user._id,
    },'secret123',{
        expiresIn: '30d',
    });

    res.json({
        user,
        token
    });
    
    } catch(err){
        console.log(err);
        res.status(500).json({
            message: 'Не удалось зарегистрироваться',
        });
    }
};

export const login = async (req,res)=>{
    try{
        const user = await UserModel.findOne({ userId: req.body.userId });

        if (!user) {
            return res.status(404).json({
                message:'Пользователь не найден',
            });
        }

        const token = jwt.sign({
            _id: user._id,
        },'secret123',{
            expiresIn: '30d',
        });

        res.json({
        user,
        token

    });

    }catch(err){
        console.log(err);
        res.status(500).json({
            message: 'Не удалось авторизоваться',
        });
    }
};

export const getMe = async (req,res)=>{
    try{
        const user = await UserModel.findById(req.userId);

        if (!user) {
            return res.status(404).json({
                message: 'Пользователь не найден',
            })
        }
        res.json(user);
       
    }catch(err){
        console.log(err);
        res.status(500).json({
            message: 'Нет доступа',
        });
    }
};