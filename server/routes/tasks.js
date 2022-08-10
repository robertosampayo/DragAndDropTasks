const express = require('express');
const router = express.Router();
const tasksController = require('../controllers/tasksController');

// Crea una tarea
// api/tarea

router.post('/',
    tasksController.createTask
);

router.delete('/:id',
    tasksController.deleteTask
);



module.exports = router;