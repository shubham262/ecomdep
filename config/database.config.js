require('dotenv').config();

const databasePassword = process.env.DEVELOPMENT_DATABASE_PASSWORD;

module.exports = {
    "development": {
      "username": "uh13eodh7gfefy20",
      "password": databasePassword,
      "database": "bn7nrqlu1tzc56fllfyx",
      "host": "bn7nrqlu1tzc56fllfyx-mysql.services.clever-cloud.com",
      "dialect": "mysql"
    },
    "test": {
      "username": "root",
      "password": null,
      "database": "database_test",
      "host": "127.0.0.1",
      "dialect": "mysql"
    },
    "production": {
      "username": "root",
      "password": null,
      "database": "database_production",
      "host": "127.0.0.1",
      "dialect": "mysql"
    }
  }
  
