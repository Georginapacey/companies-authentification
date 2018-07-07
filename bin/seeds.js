const mongoose = require('mongoose');
const Company = require("../models/company.model.js");

require('../configs/db.config.js');

const Companies = require('../data/company.data.js');
Company.insertMany(Companies)
    .then(data => {
        console.log('Data insert!!')
        mongoose.connection.close();
    })
    .catch(error => {
        console.error(error)
        mongoose.connection.close();
    })


