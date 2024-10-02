import { createContext, useState } from "react";

export let datacontext=createContext({})
const Dataprovider =({children}) =>
    {
        let[registeredname,setregisteredinfo]=useState([]);
        let[logged,infolog]=useState();
        let [searchTerm, setSearchTerm] = useState('');
         
      
      let [products,setproduct] = useState([
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
  ]);
  
  
        return (
            <div>
               <datacontext.Provider value={{registeredname,setregisteredinfo,logged,infolog,products,setproduct,searchTerm,setSearchTerm}}>{children}</datacontext.Provider>
            </div>
        )
    }
    
    export default Dataprovider; 