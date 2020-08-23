
const RestaurantsList = [
    {
        id: 1,
        name: "Papa John's",
        description: "Papa John's is an American pizza restaurant franchise. It is the fourth largest pizza delivery restaurant chain in the United States, with headquarters in Jeffersontown, Kentucky, a suburb of Louisville",
        path: '/papajohns',
        logo: "https://mediaservice.retailmenot.com/ws/mediagroup/ZKGK6LH3NFGDZPIUB53NJSUBEY?width=340&height=340",
        categories: [
            {
                name: "Pizza",
                id: 1
            }, 
            {
                name:"Sides",
                id:2
            }, 
            {
                name: "Salads",
                id:3
            }
    ],
        menu: [


            {
                name: "Chicken Ranch",
                description: "Grilled chicken, tomatoes, raunch sauce, mozzarella",
                price: 13.00,
                img: "https://www.papajohnsegypt.com/images/Products/Chicken-Ranch.jpg",
                category: {
                    name: "Pizza"
                },
                stock: 10
            },
            {
                name: "Chicken BBQ",
                description: "Grilled chicken, fresh mushrooms, bbq sauce, mozzarella",
                price: 13.00,
                img: "https://www.papajohnsegypt.com/images/Products/Chicken-BBQ.jpg",
                category: {
                    id: 1,
                    name: "Pizza"
                },
                stock: 5
            },
            {
                name: "Mexican",
                description: "Grilled chicken, tomatoes, fresh mushrooms, green peppers, jalapeno peppers, mozzarella",
                price: 13.00,
                img: "https://www.papajohnsegypt.com/images/Products/Mexican-Ole.jpg",
                category: {
                    id: 1,
                    name: "Pizza"
                },
                stock: 3
            },
            {
                name: "Super Papa's",
                description: "Pepperoni, Italian sausage, ham, fresh mushrooms, green peppers, black olives, mozzarella",
                price: 20.00,
                img: "https://www.papajohnsegypt.com/images/Products/Super-Papa.jpg",
                category: {
                    id: 1,
                    name: "Pizza"
                },
                stock: 18
            }

            ,



            {
                name: "Chicken Calzone",
                description: "Grilled chicken, fresh mushrooms garlic sauce, mozzarella",
                price: 6.00,
                img: "https://www.papajohns.az/uploads/images/Calzone_Chicken.jpg",
                category: {
                    id: 2,
                    name: "Sides"
                },
                stock: 10
            },
            {
                name: "Meat Calzone",
                description: "Pepperoni, Italian sausages, garlic sauce, mozzarella",
                price: 6.00,
                img: "https://www.papajohns.az/uploads/images/Calzone_Pepperoni.jpg",
                category: {
                    id: 2,
                    name: "Sides"
                },
                stock: 12
            },
            {
                name: "Chicken Wings with BBQ Sauce",
                description: "",
                price: 8.00,
                img: "https://www.papajohns.az/uploads/images/toyuq_qanadlari.jpg",
                category: {
                    id: 2,
                    name: "Sides"
                },
                stock: 15

            },
            {
                name: "Chicken Wings with Buffalo Sauce",
                description: "Spicy",
                img: "https://www.papajohns.az/uploads/images/toyuq_qanadlari.jpg",
                price: 8.00,
                category: {
                    id: 2,
                    name: "Sides"
                },
                stock: 13
            }

            ,



            {
                name: "Tuna Salad",
                description: "Tuna, iceberg letucce, black olives, corn, cucumbers, italian dressing",
                price: 7.00,
                img: "https://www.papajohns.az/uploads/images/salads/Tuna%20Salad_no_tomato_Azer_158_1.jpg",
                category: {
                    id: 3,
                    name: "Salads"
                },
                stock: 19
            }


        ]
    },

    {
        id: 2,
        name: "McDonald's",
        description: "McDonald's Corporation is an American fast food company, founded in 1940 as a restaurant operated by Richard and Maurice McDonald, in San Bernardino, California, United States.",
        path: '/mcdonalds',
        logo: "https://d1nqx6es26drid.cloudfront.net/app/uploads/2015/06/03172655/default_tile_logo_mcd_red.png",
        categories: [
            {
                id: 1,
                name:"Fries"
            },
            {
                id:2,
                name: "Burgers"
            }
        ],
        menu: [
            {
                name: "French Fries (Small)",
                description: "Delicious, deep-fried and slightly salted patato sticks",
                price: 1.50,
                img: "https://www.mcdonalds.az/site/assets/files/1140/fri_1.200x200.png",
                category: {
                    id: 1,
                    name: "Fries"
                },
                stock: 11
            },
            {
                name: "French Fries (Medium)",
                description: "Delicious, deep-fried and slightly salted patato sticks",
                price: 2.00,
                img: "https://www.mcdonalds.az/site/assets/files/1140/fri_1.200x200.png",
                category: {
                    id: 1,
                    name: "Fries"
                },
                stock: 10
            },
            {
                name: "French Fries (Large)",
                description: "Delicious, deep-fried and slightly salted patato sticks",
                price: 2.50,
                img: "https://www.mcdonalds.az/site/assets/files/1140/fri_1.200x200.png",
                category: {
                    id: 1,
                    name: "Fries"
                },
                stock: 10
            },
            {
                name: "Hamburger",
                description: "Burger made of a 100% pure beef patty, onions, pickles and just the right amount of mustard and ketchup wrapped in a caramelized bun",
                price: 1.50,
                img: "https://www.mcdonalds.az/site/assets/files/1206/hamburger_big.png",
                category: {
                    id: 2,
                    name: "Burgers"
                },
                stock: 20
            },
            {
                name: "Cheeseburger",
                description: "Our simple, classic cheeseburger begins with a 100% pure beef patty seasoned with just a pinch of salt and pepper. ",
                price: 2.00,
                img: "https://www.mcdonalds.az/site/assets/files/1225/cheeseburger_big-800_-_copy.png",
                category: {
                    id: 2,
                    name: "Burgers"
                },
                stock: 20
            },
            {
                name: "Big Mac",
                description: "Mouthwatering perfection starts with two 100% pure beef patties and Big Mac sauce sandwiched between a sesame seed bun.",
                price: 8.00,
                img: "https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Big-Mac.jpg?$Product_Desktop$",
                category: {
                    id: 2,
                    name: "Burgers"
                },
                stock: 20
            }
        ]
    }
]

export default RestaurantsList;