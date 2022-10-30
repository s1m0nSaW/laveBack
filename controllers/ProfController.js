import ProfModel from "../models/Prof.js";

export const getAll = async (req,res) => {
    try {
        const profs = await ProfModel
        .find().exec();

        res.json(profs);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Не удалось найти',
        });
    }
}

export const getOne = async (req,res) => {
    try {
        const prof = await ProfModel
        .find({ _id: req.params.id}).exec();

        res.json(prof);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Не удалось найти',
        });
    }
}

export const create = async (req,res) => {
    try {
        const doc = new ProfModel
        ({
            profName: req.body.profName,
            salary: req.body.salary,
            childCount: req.body.childCount,
            expenses: req.body.expenses,
            car: req.body.car,
            house: req.body.house,
            age: req.body.age,
        });

        const prof = await doc.save();

        res.json(prof);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Не удалось создать',
        });
    }
}

export const update = async (req,res) => {
    try {
        await ProfModel
        .updateOne({
            _id: req.params.id
        },{
            profName: req.body.profName,
            salary: req.body.salary,
            childCount: req.body.childCount,
            expenses: req.body.expenses,
            car: req.body.car,
            house: req.body.house,
            age: req.body.age,
        });

        res.json({
            success: true,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Не удалось обновить',
        });
    }
}

export const remove = async (req,res) => {
    try {
        ProfModel
        .findOneAndDelete(
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
                        message: 'Профессия не найдена'
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