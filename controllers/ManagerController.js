import ManagerModel from "../models/Manager.js";

export const getAll = async (req,res) => {
    try {
        const managers = await ManagerModel.find().exec();

        res.json(managers);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Не удалось найти',
        });
    }
}

export const getOne = async (req,res) => {
    try {
        const manager = await ManagerModel.find({ _id: req.params.id}).exec();

        res.json(manager);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Не удалось найти',
        });
    }
}

export const create = async (req,res) => {
    try {
        const doc = new ManagerModel({
            name: req.body.name,
            salary: req.body.salary,
            userId: req.body.userId,
            bizCount: req.body.bizCount,
            bizType: req.body.bizType,
            bizs: req.body.bizs,
        });

        const manager = await doc.save();

        res.json(manager);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Не удалось создать',
        });
    }
}

export const update = async (req,res) => {
    try {
        await ManagerModel.updateOne({
            _id: req.params.id
        },{
            name: req.body.name,
            salary: req.body.salary,
            userId: req.body.userId,
            bizCount: req.body.bizCount,
            bizType: req.body.bizType,
            bizs: req.body.bizs,
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
        ManagerModel.findOneAndDelete(
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
                        message: 'Менеджер не найден'
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