const db = require('./db');

// definindo a estrutura da tabela
const Usuario = db.sequelize.define('usuario',{
    id: {
        type: db.Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: db.Sequelize.STRING,
        allowNull: false
    }
})

Usuario.sync(); //criando a tabela

module.exports = Usuario;