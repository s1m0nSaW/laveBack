import CreditModel from "../models/Credit.js";

export const getAll = async (req,res) => {
    try {
        const credits = await CreditModel.find().exec();

        res.json(credits);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Не удалось найти',
        });
    }
}

export const getOne = async (req,res) => {
    try {
        const credit = await CreditModel.find({ _id: req.params.id}).exec();

        res.json(credit);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Не удалось найти',
        });
    }
}

export const create = async (req,res) => {
    try {
        const doc = new CreditModel({
            creditName: req.body.creditName,
            creditAmount: req.body.creditAmount,
            creditTotal: req.body.creditTotal,
            creditPeriod: req.body.creditPeriod,
            creditPay: req.body.creditPay,
            creditPercent: req.body.creditPercent,
            imageUrl: req.body.imageUrl,
        });

        const credit = await doc.save();

        res.json(credit);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Не удалось создать',
        });
    }
}

export const update = async (req,res) => {
    try {
        await CreditModel.updateOne({
            _id: req.params.id
        },{
            creditName: req.body.creditName,
            creditAmount: req.body.creditAmount,
            creditTotal: req.body.creditTotal,
            creditPeriod: req.body.creditPeriod,
            creditPay: req.body.creditPay,
            creditPercent: req.body.creditPercent,
            imageUrl: req.body.imageUrl,
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
        CreditModel.findOneAndDelete(
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
                        message: 'Недвижимость не найдена'
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