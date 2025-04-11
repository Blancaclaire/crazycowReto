const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json())
const port = 3000;

{
    "burgers": [
      {
        "id": 1,
        "name": "Paca BBQ",
        "description": "A smoky and sweet explosion of flavor with irresistible bacon and BBQ sauce.",
        "ingredients": ["bun", "beef patty", "bacon", "cheddar cheese", "BBQ sauce"],
        "image": "../imagenes/burgerfondo1.png",
        "allergens": ["gluten", "dairy"]
      },
      {
        "id": 2,
        "name": "Spicy Cow",
        "description": "Just the right touch of spiciness with jalapeños to awaken your senses.",
        "ingredients": ["bun", "beef patty", "jalapeños", "lettuce", "cheddar cheese"],
        "image": "../imagenes/burguerfondo2.png",
        "allergens": ["gluten", "dairy"]
      },
      {
        "id": 3,
        "name": "Double Cow Deluxe",
        "description": "For meat lovers: double the pleasure in every bite.",
        "ingredients": ["bun", "double beef patty", "lettuce", "Swiss cheese", "caramelized onions"],
        "image": "../imagenes/burguerfondo3.png",
        "allergens": ["gluten", "dairy"]
      },
      {
        "id": 4,
        "name": "Paca Rancher",
        "description": "A ranch classic with a delightful mix of fresh flavors.",
        "ingredients": ["bun", "beef patty", "ranch sauce", "cheddar cheese", "tomato"],
        "image": "../imagenes/burguerfondo4.png",
        "allergens": ["gluten", "dairy"]
      },
      {
        "id": 5,
        "name": "Veggie Paca",
        "description": "The perfect veggie option, fresh and delicious.",
        "ingredients": ["bun", "veggie burger patty", "lettuce", "tomato", "onion"],
        "image": "../imagenes/burguerfondo5.png",
        "allergens": ["gluten"]
      },
      {
        "id": 6,
        "name": "Moozarella Supreme",
        "description": "A gourmet experience with the creamy touch of mozzarella.",
        "ingredients": ["bun", "beef patty", "mozzarella cheese", "pesto sauce", "arugula"],
        "image": "../imagenes/burguerfondo6.png",
        "allergens": ["gluten", "dairy"]
      },
      {
        "id": 7,
        "name": "Tender Classic",
        "description": "Simple and nostalgic, like a good classic burger should be.",
        "ingredients": ["bun", "beef patty", "cheddar cheese", "ketchup", "mustard", "pickles"],
        "image": "../imagenes/burguerfondo7.png",
        "allergens": ["gluten", "dairy"]
      },
      {
        "id": 8,
        "name": "Mediterranean Paca",
        "description": "A trip to the Mediterranean in every bite.",
        "ingredients": ["bun", "lamb patty", "feta cheese", "sun-dried tomatoes", "olives"],
        "image": "../imagenes/burguerfondo8.png",
        "allergens": ["gluten", "dairy"]
      },
      {
        "id": 9,
        "name": "Smoked Cow",
        "description": "Smoky and delicious, perfect for a special touch.",
        "ingredients": ["bun", "smoked beef patty", "gouda cheese", "red onion", "mustard sauce"],
        "image": "../imagenes/burguerfondo9.png",
        "allergens": ["gluten", "dairy"]
      },
      {
        "id": 10,
        "name": "Tropical Paca",
        "description": "Sweet and savory, with a tropical explosion thanks to pineapple.",
        "ingredients": ["bun", "beef patty", "pineapple", "cheddar cheese", "teriyaki sauce"],
        "image": "../imagenes/burguerfondo10.png",
        "allergens": ["gluten", "dairy"]
      },
      {
        "id": 11,
        "name": "Mooo Mexican",
        "description": "Packed with Mexican flavor with guacamole and jalapeños.",
        "ingredients": ["bun", "beef patty", "guacamole", "beans", "jalapeños", "cheddar cheese"],
        "image": "../imagenes/bugerfondo11.png",
        "allergens": ["gluten", "dairy"]
      },
      {
        "id": 12,
        "name": "Truffle Paca",
        "description": "Elegant and refined, with the unmistakable aroma of truffle.",
        "ingredients": ["bun", "beef patty", "brie cheese", "truffle sauce", "arugula"],
        "image": "../imagenes/burgerfondo12.png",
        "allergens": ["gluten", "dairy"]
      },
      {
        "id": 13,
        "name": "The Shepherd",
        "description": "A burger with pastoral inspiration, fresh and aromatic.",
        "ingredients": ["bun", "lamb patty", "mint", "feta cheese", "tzatziki sauce"],
        "image": "../imagenes/burgerfondo13.png",
        "allergens": ["gluten", "dairy"]
      },
      {
        "id": 14,
        "name": "Asian Cow",
        "description": "Exotic with a touch of the Orient in every bite.",
        "ingredients": ["bun", "beef patty", "soy sauce", "coleslaw", "ginger"],
        "image": "../imagenes/burgerfondo14.png",
        "allergens": ["gluten"]
      },
      {
        "id": 15,
        "name": "Texan Paca",
        "description": "The rustic flavor of the Wild West in a delicious bite.",
        "ingredients": ["bun", "beef patty", "cheddar cheese", "onion rings", "BBQ sauce"],
        "image": "../imagenes/burgerfondo2.png",
        "allergens": ["gluten", "dairy"]
      }
    ]
  }
  
  