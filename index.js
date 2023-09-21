const products = [
    {
      id: 201,
      name: "Laptop",
      category: "Electronics",
      price: 999.99,
    },
    {
      id: 202,
      name: "T-shirt",
      category: "Clothing",
      price: 19.99,
    },
    {
      id: 203,
      name: "Coffee Maker",
      category: "Kitchen Appliances",
      price: 79.99,
    },
    {
      id: 204,
      name: "Running Shoes",
      category: "Footwear",
      price: 59.99,
    },
    {
      id: 205,
      name: "Bookshelf",
      category: "Furniture",
      price: 149.99,
    },
  ];
  
  /**********
    Question 1:
    You have a function getProductName(product) that:
    - receives a product object
    - returns the name of the product
    Don't forget to uncomment the console.log
    ===
    ANSWER: Laptop
    **********/
  console.log("Question 1")
  
  function getProductName(product) {
    // Your code here
    return product.name
  }

  console.log(getProductName(products[0]));
  console.log("\n")
  
  /**********
    Question 2:
    You have a function that:
    - receives a product object
    - receives a category name
    - returns true if the product's category matches the provided category name, otherwise returns false
    ===
    ANSWER: true
    **********/
  console.log("Question 2")

  function isProductCategoryMatching(product, category) {
    // Your code here
    return product.category == category
  }
  console.log(isProductCategoryMatching(products[1], "Clothing"));
  console.log("\n")
  /**********
    Question 3:
    addProduct(products, product):
    - receives an array of product objects
    - receives a new product object (with id, name, category, and price)
    - adds the new product to the array
    - returns the updated array
    ===
    ANSWER: 
    [
      {
        "id": 201,
        "name": "Laptop",
        "category": "Electronics",
        "price": 999.99
      },
      {
        "id": 202,
        "name": "T-shirt",
        "category": "Clothing",
        "price": 19.99
      },
      {
        "id": 203,
        "name": "Coffee Maker",
        "category": "Kitchen Appliances",
        "price": 79.99
      },
      {
        "id": 204,
        "name": "Running Shoes",
        "category": "Footwear",
        "price": 59.99
      },
      {
        "id": 205,
        "name": "Bookshelf",
        "category": "Furniture",
        "price": 149.99
      },
      {
        "id": 206,
        "name": "Headphones",
        "category": "Electronics",
        "price": 149.99
      }
    ]
    **********/
  console.log("Question 3")
  function addProduct(products, product) {
    // Your code here
    products.push(product)
    return products

  }
  
   const newProduct = {
    id: 206,
    name: "Headphones",
     category: "Electronics",
     price: 149.99
   };
  
  console.log(addProduct(products, newProduct));
  console.log("\n")
  
  /**********
    Question 4:
    countElectronicsProducts(products):
    - receives an array of product objects
    - returns the number of products in the "Electronics" category
    ===
    ANSWER: 2
    **********/
  console.log("Question 4")
  let numberOfProducts = 0

  function countElectronicsProducts(products) {
    // Your code here
    products.forEach(x => { 
      if (x.category.toLowerCase() == "Electronics".toLowerCase())
        numberOfProducts++
      
    });

    return numberOfProducts

  }
  console.log(countElectronicsProducts(products));
  console.log("\n")
  
  /**********
    Question 5: 🌶️
    listProductNamesByCategory(products, category):
    - receives an array of product objects
    - receives a category name
    - returns an array of product names that belong to the specified category
    ===
    ANSWER: ["Laptop", "Headphones"]
    **********/
  console.log("Question 5")
  function listProductNamesByCategory(products, category) {
    // Your code here
    let p = []
    products.forEach(x => {

      if (x.category == category)
       p.push(x.name)

      })

      return p

  }
  console.log(listProductNamesByCategory(products, "Electronics"));
  console.log("\n")
  
  /**********
  Question 6: 🌶️🌶️
  You have a function getCheapestProduct(products) that:
  - receives an array of product objects
  - returns the product object with the lowest price
  ===
  ANSWER: 
  {
    "id": 202,
    "name": "T-shirt",
    "category": "Clothing",
    "price": 19.99
  }
  **********/
 console.log("Question 6")

  function getCheapestProduct(products) {
    // Your code here

    const lowest = products.reduce((previous, current) => {
      return current.price < previous.price  ? current : previous;
    });
  
return lowest

  }
  console.log(getCheapestProduct(products));
  console.log("\n")
  
  /**********
    Question 7:
    You have a function removeProductById(products, productId) that:
    - receives an array of product objects
    - receives a product id (number)
    - removes the product with the matching id from the array
    - returns the updated array
    ===
    ANSWER: 
    [
      {
        "id": 201,
        "name": "Laptop",
        "category": "Electronics",
        "price": 999.99
      },
      {
        "id": 203,
        "name": "Coffee Maker",
        "category": "Kitchen Appliances",
        "price": 79.99
      },
      {
        "id": 204,
        "name": "Running Shoes",
        "category": "Footwear",
        "price": 59.99
      },
      {
        "id": 205,
        "name": "Bookshelf",
        "category": "Furniture",
        "price": 149.99
      }
    ]
    **********/
   console.log("Question 7")
  
  function removeProductById(products, productId) {
    // Your code here
   const newProducts = products.filter(x => x.id != productId)
    return newProducts
  }
  
  console.log(removeProductById(products, 202));
  console.log("\n")
  
  /**********
    Question 8: 🌶️🌶️🌶️
    getProductsByPriceRange(products, minPrice, maxPrice):
    - receives an array of product objects
    - receives a minimum price (number) and a maximum price (number)
    - returns an array of product objects that fall within the specified price range (inclusive)
    ===
    ANSWER: 
    [
      {
        "id": 202,
        "name": "T-shirt",
        "category": "Clothing",
        "price": 19.99
      },
      {
        "id": 204,
        "name": "Running Shoes",
        "category": "Footwear",
        "price": 59.99
      }
    ]
    **********/
  console.log("Question 8")
  function getProductsByPriceRange(products, minPrice, maxPrice) {
    // Your code here
    let p = []
    products.forEach( x => {
      if(x.price >=  minPrice && x.price <= maxPrice )
        p.push(x)
    })
    return p
  }
  
  console.log(getProductsByPriceRange(products, 19.99, 59.99));
  