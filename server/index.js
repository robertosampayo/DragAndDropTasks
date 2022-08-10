const express = require('express');
const conectarDB = require('./config/db.js');
const cors = require('cors');

const typeDefs = require('./schema/typeDefs');
const resolvers = require('./schema/resolvers');

const { ApolloServer } = require('apollo-server-express');

// crear el servidor
const app= express();
// Conectar a BD
conectarDB();

// Habilitar cors
app.use(cors());

// Habilitar express.json
app.use(express.json({ extended: true }));

// puerto de la app
const PORT = process.env.PORT || 4000;

// Importar rutas
app.use('/api/lists', require('./routes/lists'));
app.use('/api/tasks', require('./routes/tasks'));



// Definir la página principal
app.get('/', (req,res) => {
    res.send('Hola Mundo!')
})

const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app, path: '/api/graphql' });


// correr app
app.listen(PORT, '0.0.0.0' , () =>{
    console.log(`El servidor esta funcionando en el puerto ${PORT}`);
})