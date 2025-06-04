const mongoose = require('mongoose');

exports.getAllCollections = async (req, res) => {
    try {
        const collections = await mongoose.connection.db.listCollections().toArray();
        const result = {};

        for (const collection of collections) {
            const collectionName = collection.name;
            const documents = await mongoose.connection.db.collection(collectionName).find({}).toArray();
            result[collectionName] = documents;
        }

        res.status(200).json({
            success: true,
            data: result
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
}; 