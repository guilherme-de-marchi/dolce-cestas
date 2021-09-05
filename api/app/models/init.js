require(`${__dirname}/commodities/junction_tables/ProductTag`)
require(`${__dirname}/commodities/junction_tables/PackageImage`)
require(`${__dirname}/commodities/junction_tables/PackageTag`)
require(`${__dirname}/commodities/junction_tables/ProductPackage`);
require(`${__dirname}/commodities/junction_tables/ProductImage`);
require(`${__dirname}/commodities/Tag`);
require(`${__dirname}/commodities/Package`);
require(`${__dirname}/commodities/Product`);
require(`${__dirname}/commodities/Image`);

require(`${__dirname}/clients/junction_tables/RequestPackage`);
require(`${__dirname}/clients/Client`);
require(`${__dirname}/clients/Request`);


const models = require(`${__dirname}/../databases/index`).main.models;

models.Product.belongsToMany(models.Tag, { 
    'through': models.ProductTag,
    'as': 'tags',
    'foreignKey': 'productId',
});
models.Tag.belongsToMany(models.Product, { 
    'through': models.ProductTag,
    'as': 'products',
    'foreignKey': 'tagId',
});


models.Product.belongsToMany(models.Image, { 
    'through': models.ProductImage,
    'as': 'images',
    'foreignKey': 'productId',
});
models.Image.belongsToMany(models.Product, { 
    'through': models.ProductImage,
    'as': 'products',
    'foreignKey': 'imageId',
});


models.Product.belongsToMany(models.Package, { 
    'through': models.ProductPackage,
    'as': 'packages',
    'foreignKey': 'productId',
});
models.Package.belongsToMany(models.Product, { 
    'through': models.ProductPackage,
    'as': 'products',
    'foreignKey': 'packageId',
});


models.Package.belongsToMany(models.Tag, { 
    'through': models.PackageTag,
    'as': 'tags',
    'foreignKey': 'packageId',
});
models.Tag.belongsToMany(models.Package, { 
    'through': models.PackageTag,
    'as': 'packages',
    'foreignKey': 'tagId',
});


models.Package.belongsToMany(models.Image, { 
    'through': models.PackageImage,
    'as': 'images',
    'foreignKey': 'packageId',
});
models.Image.belongsToMany(models.Package, { 
    'through': models.PackageImage,
    'as': 'packages',
    'foreignKey': 'imageId',
});

models.Client.hasMany(models.Request, {
    'as': 'requests',
    'foreignKey': 'clientId',
});
models.Request.belongsTo(models.Client, {
    'as': 'client',
    'foreignKey': 'requestId',
});

models.Package.belongsToMany(models.Request, {
    'through': models.RequestPackage,
    'as': 'requests',
    'foreignKey': 'packageId',
});
models.Request.belongsToMany(models.Package, {
    'through': models.RequestPackage,
    'as': 'packages',
    'foreignKey': 'requestId',
});
