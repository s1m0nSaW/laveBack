import jwt from 'jsonwebtoken';

import UserModel from '../models/User.js'

export const register =  async (req,res)=>{
    try{

    const doc = new UserModel({
        firstName: req.body.firstName,
        photo100: req.body.photo100,
        prof: req.body.prof,
        workTime: req.body.workTime,
        salary: req.body.salary,
        userId: req.body.userId,
        balance: req.body.balance,
        debts: req.body.debts,
        age: req.body.age,
        children: req.body.children,
        house: req.body.house,
        car: req.body.car,
        rent: req.body.rent,
        bizs: req.body.bizs,
        deposit: req.body.deposit,
        datePoint: req.body.datePoint,
        freeEnergizer: req.body.freeEnergizer,
        freeEnergizerCount: req.body.freeEnergizerCount,
        onGame: req.body.onGame,
        credits: req.body.credits,
        record: req.body.record,
        expenses: req.body.expenses,
        energy: req.body.energy,
        time: req.body.time,
        maxEnergy: req.body.maxEnergy,
        energizer: req.body.energizer,
        freeEnergizerOn: req.body.freeEnergizerOn,
        lifesCount: req.body.lifesCount,
        greetingIn: req.body.greetingIn,
        greetingOut: req.body.greetingOut,
        promoter: req.body.promoter,
        disabled: req.body.disabled,
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
            photo100: req.body.photo100,
            prof: req.body.prof,
            workTime: req.body.workTime,
            salary: req.body.salary,
            userId: req.body.userId,
            balance: req.body.balance,
            debts: req.body.debts,
            age: req.body.age,
            children: req.body.children,
            house: req.body.house,
            car: req.body.car,
            rent: req.body.rent,
            bizs: req.body.bizs,
            deposit: req.body.deposit,
            datePoint: req.body.datePoint,
            freeEnergizer: req.body.freeEnergizer,
            freeEnergizerCount: req.body.freeEnergizerCount,
            onGame: req.body.onGame,
            credits: req.body.credits,
            record: req.body.record,
            expenses: req.body.expenses,
            energy: req.body.energy,
            time: req.body.time,
            maxEnergy: req.body.maxEnergy,
            energizer: req.body.energizer,
            freeEnergizerOn: req.body.freeEnergizerOn,
            lifesCount: req.body.lifesCount,
            greetingIn: req.body.greetingIn,
            greetingOut: req.body.greetingOut,
            promoter: req.body.promoter,
            disabled: req.body.disabled,
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