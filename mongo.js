// Find all the information about each products
db.collection.find()

// Find the product price which are between 400 to 800
db.collection.find({product_price:{$gt:400,$lt:800}})

// Find the product price which are not between 400 to 600
db.collection.find({product_price:{$gt:600,$lt:400}})

// List the four product which are grater than 500 in price 
db.collection.find({product_price:{$gt:500}}).limit(4)

// Find the product name and product material of each products
db.collection.find({},{_id:0,product_name:1,product_material:1})

// Find the product with a row id of 10
db.collection.find({id:"10"})

// Find only the product name and product material
db.collection.find({},{product_name:1,product_material:1})

// Find all products which contain the value of soft in product material 
db.collection.find({product_material:{$regex:'Soft'}})

// Find products which contain product color indigo  and product price 492.00
db.collection.find({product_color:'indigo',product_price:492})

// Delete the products which product price is greater than 600
db.collection.deleteMany({product_price:{$gt:600}})