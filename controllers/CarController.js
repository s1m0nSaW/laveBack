import CarModel from "../models/Car.js";

export const getAll = async (req,res) => {
    try {
        const cars = await CarModel
        .find().exec();

        res.json(cars);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Не удалось найти',
        });
    }
}

export const getOne = async (req,res) => {
    try {
        const car = await CarModel
        .find({ _id: req.params.id}).exec();

        res.json(car);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Не удалось найти',
        });
    }
}

export const create = async (req,res) => {
    try {
        const doc = new CarModel
        ({
            name: req.body.name,
            price: req.body.price,
            expenses: req.body.expenses,
            imageUrl: req.body.imageUrl,
            sellPrice: req.body.sellPrice,
        });

        const car = await doc.save();

        res.json(car);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Не удалось создать',
        });
    }
}

export const update = async (req,res) => {
    try {
        await CarModel
        .updateOne({
            _id: req.params.id
        },{
            name: req.body.name,
            price: req.body.price,
            expenses: req.body.expenses,
            imageUrl: req.body.imageUrl,
            sellPrice: req.body.sellPrice,
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
        CarModel
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
                        message: 'Машина не найдена'
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