const express = require('express');
const router = express.Router();
const listsController = require('../controllers/listsController');

// Crea una tarea
// api/tarea

router.post('/',
    listsController.createList
);

// Obtener tareas
router.get('/',
    listsController.getLists
);

router.get('/:id',
    listsController.getList
);

router.patch('/:id',
    listsController.updateList
);


module.exports = router;