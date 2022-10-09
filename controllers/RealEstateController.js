import RealEstateModel from "../models/RealEstate.js";

export const getAll = async (req,res) => {
    try {
        const estates = await RealEstateModel.find().exec();//params or body in req.params.userID?

        res.json(estates);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Не удалось найти',
        });
    }
}

export const getOne = async (req,res) => {
    try {
        const estate = await RealEstateModel.find({ _id: req.params.id}).exec();

        res.json(estate);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Не удалось найти',
        });
    }
}

export const create = async (req,res) => {
    try {
        const doc = new RealEstateModel({
            realEstateName: req.body.realEstateName,
            realEstatePrice: req.body.realEstatePrice,
            location: req.body.location,
            profit: req.body.profit,
            imageUrl: req.body.imageUrl,
        });

        const estate = await doc.save();

        res.json(estate);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Не удалось создать',
        });
    }
}

export const update = async (req,res) => {
    try {
        await RealEstateModel.updateOne({
            _id: req.params.id
        },{
            realEstateName: req.body.realEstateName,
            realEstatePrice: req.body.realEstatePrice,
            location: req.body.location,
            profit: req.body.profit,
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
        RealEstateModel.findOneAndDelete(
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