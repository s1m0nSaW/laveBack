import BusinessModel from "../models/Business.js";

export const getAll = async (req,res) => {
    try {
        const bizs = await BusinessModel.find({ user: req.userId}).populate('Business').exec();//params or body in req.params.userID?

        res.json(bizs);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Не удалось найти',
        });
    }
}

export const getOne = async (req,res) => {
    try {
        const business = await BusinessModel.find({ _id: req.params.id}).populate('Business').exec();

        res.json(business);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Не удалось найти',
        });
    }
}

export const create = async (req,res) => {
    try {
        const doc = new BusinessModel({
            busName: req.body.busName,
            user: req.userId,
            location: req.body.location,
            workersCount: req.body.workersCount,
            rent: req.body.rent,
            promotion: req.body.promotion,
            workersSalary: req.body.workersSalary,
            markup: req.body.markup,
            purchase: req.body.purchase,
        });

        const business = await doc.save();

        res.json(business);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Не удалось создать',
        });
    }
}

export const update = async (req,res) => {
    try {
        await BusinessModel.updateOne({
            _id: req.params.id
        },{
            busName: req.body.busName,
            user: req.userId,
            location: req.body.location,
            workersCount: req.body.workersCount,
            rent: req.body.rent,
            promotion: req.body.promotion,
            workersSalary: req.body.workersSalary,
            markup: req.body.markup,
            purchase: req.body.purchase,
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
        BusinessModel.findOneAndDelete(
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
                        message: 'Бизнес не найден'
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