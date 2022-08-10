const List = require('../models/List');
const { ObjectID } = require('mongodb');
// Obtiene todos los proyectos del usuario actual
exports.createTask = async (req, res) => {

    try {
        const list = await List.findOne({ _id: new ObjectID(req.body.idList) });
        if (list === null) res.status(500).send(`There was an error creating the task, error: ${error}`);
        const task = req.body.task;
        list.tasks = [ ... list.tasks, task ]
        await list.save();
        res.json( list.tasks );




    } catch (error) {
        console.log(error);
        res.status(500).send(`There was an error creating the task, error: ${error}`);
    }


}

exports.deleteTask = async (req, res) => {


    try {
        const list = await List.findOne({ _id: new ObjectID(req.body.idList) });
        if (list === null) res.status(500).send(`There was an error creating the task, error: ${error}`);

        const taskToRemove = req.body.task;
        list.tasks = list.tasks.filter(task => task !== taskToRemove)
        await list.save();
        res.json( list.tasks );




    } catch (error) {
        console.log(error);
        res.status(500).send(`There was an error creating the task, error: ${error}`);
    }

}

