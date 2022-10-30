import jwt from 'jsonwebtoken';

import UserModel from '../models/User.js'

export const register =  async (req,res)=>{
    try{

    const doc = new UserModel({
        firstName: req.body.firstName,
        prof: req.body.prof,
        salary: req.body.salary,
        userId: req.body.userId,
        balance: req.body.balance,
        age: req.body.age,
        children: req.body.children,
        house: req.body.house.split(','),
        car: req.body.car.split(','),
        bizs: req.body.bizs.split(','),
        datePoint: req.body.datePoint,
        onGame: req.body.onGame,
        expenses: req.body.expenses,
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

export const update =  async (req,res)=>{
    try{
        const user = await UserModel.updateOne({
            _id: req.params.id
        },{
            firstName: req.body.firstName,
            prof: req.body.prof,
            salary: req.body.salary,
            userId: req.body.userId,
            balance: req.body.balance,
            age: req.body.age,
            children: req.body.children,
            house: req.body.house,
            car: req.body.car,
            bizs: req.body.bizs,
            datePoint: req.body.datePoint,
            onGame: req.body.onGame,
            expenses: req.body.expenses,
        });
    
        res.json({success: true});
    
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
        const user = await UserModel.findOne( {userId: req.params.id});

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

export const getAll = async (req,res) => {
    try {
        const users = await UserModel.find().exec();

        res.json(users);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Не удалось найти',
        });
    }
}

export const remove = async (req,res) => {
    try {
        UserModel.findOneAndDelete(
            {
                _id: req.params.id,
            },
            (err, doc) => {
                if (err){
                    console.log(err);
                    return res.status(500).json({
                        message: 'Не удалось удалить',
                    });
                }

                if (!doc){
                    return res.status(404).json({
                        message: 'Пользователь не найден'
                    });
                }

                res.json({
                    success: true
                });
            }
        );
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Проблема с удалением',
        });
    }
}