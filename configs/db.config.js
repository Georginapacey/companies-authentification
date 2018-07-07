const mongoose = require('mongoose');
const DB_NAME = 'companies';
const URI = `mongodb://localhost:27017/${DB_NAME}`;

mongoose.connect(URI)
    .then(() => {
        console.info('Mu bien exo', URI);
    })
    .catch((error) => {
        console.error(error);
    })

