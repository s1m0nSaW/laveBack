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

export const getMy = async (req,res) => {
    try {
        const managers = await ManagerModel.find({ userId: req.body.userId}).exec();
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
            managerName: req.body.managerName,
            managerPrice: req.body.managerPrice,
            bizType: req.body.bizType,
            bizsCount: req.body.bizsCount,
            bizs: req.body.bizs,
            userId: req.body.userId,
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
            managerName: req.body.managerName,
            managerPrice: req.body.managerPrice,
            bizType: req.body.bizType,
            bizsCount: req.body.bizsCount,
            bizs: req.body.bizs,
            userId: req.body.userId,
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