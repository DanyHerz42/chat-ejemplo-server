const mongoose = require('mongoose')
const {config} = require('./config')

mongoose.connect(config.DB_SERVER, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
.then(db => console.log("Db is connected"))
.catch(error => console.error(error))
