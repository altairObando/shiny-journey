const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_CONNECTION)
.then( _ => console.log('Connected'))
.catch( err => console.log(err));

module.exports = mongoose;