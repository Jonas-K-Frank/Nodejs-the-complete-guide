const fs = require('fs');
const path = require('path');

const getProductsFromFile = (callBack) => {
    const gem = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json');
    fs.readFile(gem, (err, fileContent) => {
        if (err) {
            callBack([]);
        }
        callBack(JSON.parse(fileContent));
    });
};

module.exports = class Product {
    constructor(name) {
        this.title = name;
    }

    save() {
      getProductsFromFile();
        fs.readFile(gem, (err, fileContent) => {
            let products = [];
            if (!err){
                products = JSON.parse(fileContent);
            }
            products.push(this);
            fs.writeFile(gem, JSON.stringify(products), (err) => {
                console.log(err);
            });
        });
    }

    static fetchAll(callBack) {
        getProductsFromFile(callBack);
    }
};