const List = require('../models/List');
const { ObjectID } = require('mongodb');

// Obtiene todos los proyectos del usuario actual
exports.getLists = async (req, res) => {

    try {
        const list = await List.find();
        res.json( list );


    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }


}

exports.getList = async (req, res) => {

    try {
        const list = await List.findOne({ _id: new ObjectID(req.params.id) });
        res.json( list );


    } catch (error) {
        console.log(error);
        res.status(500).send(`There was an error trying to get the list, error: ${error}`);
    }


}

exports.createList = async (req, res) => {


    try {
        const list = new List(req.body);
        await list.save();
        res.json(list);

    } catch (error) {
        console.log(error);
        res.status(500).send(`There was an error creating the List, error: ${error}`);
    }
}

exports.updateList = async (req, res) => {


    try {
        const list = new List(req.body);
        const newList = await List.findOneAndUpdate({_id: req.params.id }, { tasks: list.tasks }, { new: true });
        res.json(newList);

    } catch (error) {
        console.log(error);
        res.status(500).send(`There was an error creating the List, error: ${error}`);
    }
}


