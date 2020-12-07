const Sequelize = require('sequelize');

class DataBase {

    constructor({ database, username, password, host, port }) {
        this.sequelize = new Sequelize(database, username, password, {
            host,
            port,
            define: {
                freezeTableName: true,
                underscored: false
            },
            logging: false,
            dialect: 'mysql',
            pool: {
                max: 5,
                min: 0,
                acquire: 30000,
                idle: 10000
            }
        });
        
        this.models = {
            worldcities: this.sequelize.define('worldcities', {
                id: {
                    type: Sequelize.INTEGER,
                    primaryKey: true,
                },
                city: Sequelize.STRING,
                city_ascii: Sequelize.STRING,
                lat: Sequelize.STRING,
                lng: Sequelize.STRING,
                country: Sequelize.STRING,
                iso2: Sequelize.STRING,
                iso3: Sequelize.STRING,
                admin_name: Sequelize.TEXT,
                capital: Sequelize.STRING,
                population: Sequelize.STRING,
                _id: Sequelize.STRING,
            })
        }
    }

    async bulkCreateData(data) {
        try {
            const rowLimits = 500;
            const groupLimits = 5;
            const groupToRows = [];
            const groupToPromise = [];
            const worldcitiesModel = this.models.worldcities;
            while (data.length) {
                const rowsToCreate = data.splice(0, rowLimits);
                groupToRows.push(rowsToCreate.map(this.__parseToObject));
            }
            while (groupToRows.length) {
                const groups = groupToRows.splice(0, groupLimits);
                const promises = () => groups.map(
                    group => worldcitiesModel.bulkCreate(group, {
                        returning: true
                    })
                );
                groupToPromise.push(promises);
            }
            const total = groupToPromise.length;
            let i = 0;
            for (const promises of groupToPromise) {
                console.log(`guardando grupo ${i++} de ${total}`)
                await Promise.all(promises());
            }
        }
        catch(error) {
            throw error;
        }
    }

    __parseToObject(row) {
        const [ city, city_ascii, lat, lng, country, iso2, iso3, admin_name, capital, population, _id ] = row.split(';');
        return { city, city_ascii, lat, lng, country, iso2, iso3, admin_name, capital, population, _id };
    }

}

module.exports = { DataBase }