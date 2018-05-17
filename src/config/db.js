const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const url = process.env.MONGOLAB_URI ? process.env.MONGOLAB_URI : 'mongodb://localhost/mymoney'
module.exports = mongoose.connect(url, {
    useMongoClient: true
})

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatorio"