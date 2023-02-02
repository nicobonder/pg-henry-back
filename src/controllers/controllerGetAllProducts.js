const { Product, Photo, Category, Artist, Location } = require('../db.js');

const getAllProducts = async() => {
    return await Product.findAll(
        {
          attributes: [
                'id',
                'name',
                'Description', 
                'StartDate',
                'EndDate',
                'Stock',
                'Price',
                'StartTime',
                'Status'],
          include: [
                {
                 model: Photo,
                 attributes : ['Id', 'Path'] 
                },
                {
                  model: Category,
                  attributes: ['Id', 'Name'],
                },
                {
                  model: Artist,
                  attributes: ['Id', 'Name']
                },
                {
                  model: Location,
                  attributes: ['Id', 'Name', 'Address', 'Coordinates']  
                },
            ]
        },
    );
};

module.exports = { getAllProducts };

