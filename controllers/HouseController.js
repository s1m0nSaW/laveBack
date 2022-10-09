import HouseModel from "../models/House.js";

export const getAll = async (req,res) => {
    try {
        const houses = await HouseModel
        .find().exec();

        res.json(houses);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Не удалось найти',
        });
    }
}

export const getOne = async (req,res) => {
    try {
        const house = await HouseModel
        .find({ _id: req.params.id}).exec();

        res.json(house);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Не удалось найти',
        });
    }
}

export const create = async (req,res) => {
    try {
        const doc = new HouseModel
        ({
            houseName: req.body.houseName,
            housePrice: req.body.housePrice,
            houseExp: req.body.houseExp,
            imageUrl: req.body.imageUrl,
        });

        const house = await doc.save();

        res.json(house);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Не удалось создать',
        });
    }
}

export const update = async (req,res) => {
    try {
        await HouseModel
        .updateOne({
            _id: req.params.id
        },{
            houseName: req.body.houseName,
            housePrice: req.body.housePrice,
            houseExp: req.body.houseExp,
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
        HouseModel
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
                        message: 'Дом не найден'
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