// src/components/Home.js
import React from 'react';
import Footer from './footer';
const foodItems = [
  {
    id: 1,
    name: "Burger",
    price: 5.99,
    image: "https://img.freepik.com/free-photo/front-view-tasty-meat-burger-with-cheese-salad-dark-background_140725-89597.jpg?ga=GA1.1.1928128252.1714393713&semt=ais_hybrid"
  },
  {
    id: 2,
    name: "Pizza",
    price: 9.99,
    image:"https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg?ga=GA1.1.1928128252.1714393713&semt=ais_hybrid"
  },
  {
    id: 3,
    name: "Sushi",
    price: 12.99,
    image: "https://img.freepik.com/free-photo/top-close-up-view-cabbage-brown-plate-cabbage-fork-bowls-colorful-spices_140725-71485.jpg?ga=GA1.1.1928128252.1714393713&semt=ais_hybrid"
  },
  {
    id: 4,
    name: "Pasta",
    price: 8.99,
    image: "https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19739.jpg?ga=GA1.1.1928128252.1714393713&semt=ais_hybrid"
  },
  {
    id: 5,
    name: "Salad",
    price: 6.99,
    image: "https://img.freepik.com/free-photo/flat-lay-salad-with-chicken-sesame-seeds_23-2148700369.jpg?ga=GA1.1.1928128252.1714393713&semt=ais_hybrid"
  },
  {
    id: 6,
    name: "Fries",
    price: 2.99,
    image: "https://img.freepik.com/free-photo/crispy-french-fries-with-ketchup-mayonnaise_1150-26590.jpg?ga=GA1.1.1928128252.1714393713&semt=ais_hybrid"
  },
  {
    id: 7,
    name: "Ice Cream",
    price: 3.99,
    image: "https://img.freepik.com/free-photo/ice-cream-with-desert_144627-7406.jpg?ga=GA1.1.1928128252.1714393713&semt=ais_hybrid"
  },
  {
    id: 8,
    name: "Steak",
    price: 15.99,
    image: "https://img.freepik.com/free-photo/juicy-steak-medium-rare-beef-with-spices-grilled-vegetables_2829-18672.jpg?ga=GA1.1.1928128252.1714393713&semt=ais_hybrid"
  },
  {
    id: 9,
    name: "Fries",
    price: 2.99,
    image: "https://img.freepik.com/free-photo/crispy-french-fries-with-ketchup-mayonnaise_1150-26590.jpg?ga=GA1.1.1928128252.1714393713&semt=ais_hybrid"
  },
  {
    id: 10,
    name: "Ice Cream",
    price: 3.99,
    image: "https://img.freepik.com/free-photo/ice-cream-with-desert_144627-7406.jpg?ga=GA1.1.1928128252.1714393713&semt=ais_hybrid"
  },
  {
    id: 11,
    name: "Steak",
    price: 15.99,
    image: "https://img.freepik.com/free-photo/juicy-steak-medium-rare-beef-with-spices-grilled-vegetables_2829-18672.jpg?ga=GA1.1.1928128252.1714393713&semt=ais_hybrid"
  },
  {
    id: 12,
    name: "Steak",
    price: 15.99,
    image: "https://img.freepik.com/free-photo/juicy-steak-medium-rare-beef-with-spices-grilled-vegetables_2829-18672.jpg?ga=GA1.1.1928128252.1714393713&semt=ais_hybrid"
  }
];



const Home = ({ cart, addToCart, updateQuantity, searchTerm }) => {
  // Filter food items based on the search term from the navbar
  const filteredItems = foodItems.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
    <div className="container">
      <h2 className="mt-4">Food Menu</h2>
      <div className="row">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => {
            const cartItem = cart.find(cartItem => cartItem.id === item.id);
            return (
              <div key={item.id} className="col-md-4">
                <div className="card mb-4">
                  <img src={item.image} className="card-img-top" alt={item.name} />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">${item.price}</p>
                    {cartItem ? (
                      <div>
                        <button
                          className="btn btn-secondary"
                          onClick={() => updateQuantity(item.id, cartItem.quantity - 1)}
                        >-</button>
                        <span className="mx-2">{cartItem.quantity}</span>
                        <button
                          className="btn btn-secondary"
                          onClick={() => updateQuantity(item.id, cartItem.quantity + 1)}
                        >+</button>
                      </div>
                    ) : (
                      <button className="btn btn-primary" onClick={() => addToCart(item)}>
                        Add to Cart
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="col-md-12">
            <p>No items match your search.</p>
          </div>
        )}
      </div>
   
    </div>
    <Footer/>
    </div>
    
  );
};

export default Home;
