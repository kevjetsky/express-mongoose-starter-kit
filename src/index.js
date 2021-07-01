import app from './app';

import './database/connection'; // Mongoose settings connection

const main = (port) => {
    app.listen(port);
    console.log(">>> Server on port", port);
};

main(app.get('port'));