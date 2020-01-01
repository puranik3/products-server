# Store Server

The store server serves a catalog of (fictitious) products sold in the (again fictitious) store. Every product has details like name, description, price etc., and a product has many reivews (each review is posted by a reviewer). A review maintains the the title, text of review, reviewer name, and a rating. This server allows you to view details of products, details of reviews of products, and also add a new product/review, edit existing products and delete products/reviews. 

__Note__:
* Every product has an id that is unique among all products in the store.
* Every review has a unique id that is unique among all reviews.
* Every review has an productId property that is the id of the product to which the review belongs.
* Every review has an starRating property that maintains the rating for the product (out of 5).

---

## Accessing the server online
You can [access the server at the following URL](https://store-server.herokuapp.com).  

To get started, you can [view all producuts here](https://store-server.herokuapp.com/products), and [all reviews here](https://store-server.herokuapp.com/reviews).

---

## Starting the server locally
Assuming you have Node.js installed on your system,
1. Navigate to the store-server folder in the command line/terminal. For example, if you are on a folder which has the store-server/ folder, then
```
$> cd store-server
```
2. Install required dependencies by running the following command
```
$> npm install
```
3. Start the server
```
$> npm start
```
__Note__:
* $> is the command prompt. DO NOT type it out!
* The server can also be started in authenticated mode. In this mode, an authentication token must first be obtained by POSTing to the https://store-server.herokuapp.com/login API, the following object.
```
{
    "email": "john.doe@example.com",
    "password": "password"
}
```
No other credentials are supported by the server.  

  
---

## API Documentation

## Products - View all
```
GET https://store-server.herokuapp.com/products
```

## Products - View a page (with maximum 10 entries)
```
GET https://store-server.herokuapp.com/products?_page=<page_id>
```
For example, to view the second page
```
GET https://store-server.herokuapp.com/products?_page=2
```

## Products - View reviews for a product
```
GET https://store-server.herokuapp.com/products/<product_id>/reviews
```
For example, to view reviews of product with id = 2
```
GET https://store-server.herokuapp.com/products/2/reviews
```

## Reviews - View all reviews
```
GET https://store-server.herokuapp.com/reviews
```

## Add a new product
```
POST https://store-server.herokuapp.com/products
```
The JSON data that must be sent is shown in below sample (modify the data as per your needs). DO NOT specify the id for the product. The response will have the same object with the automatically generated id for the product.
```
{
    "name": "iPhone XR",
    "code": "IPH-0010",
    "releaseDate": "May 19, 2019",
    "description": "iPhone XR",
    "price": 750,
    "starRating": 4.6,
    "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/51qBzX0pGYL._AC_SY679_.jpg"
}
```

## Add a new review
```
POST https://store-server.herokuapp.com/reviews
```
The JSON data that must be sent is shown in below sample (modify the data as per your needs). Specify the productId and set it to the id of the product for which this is a review. DO NOT specify the id for the review. The response will have the same object with the automatically generated id for the review.
```
{
    "productId": 6,
    "reviewer": "Naveen Shankar",
    "starRating": 5,
    "title": "Awesome",
    "text": "Super slick. Super fast.",
}
```

## Additional Reference
For more API documentation, please check the [documentation of json-server](https://github.com/typicode/json-server) using which this server has been built