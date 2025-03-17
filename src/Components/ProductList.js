import '../Styles/ProductList.css';
import { useEffect, useState } from "react";
import Product from './Product';
import '../Styles/CategoryButtons.css';

function ProductList({ searchQuery }) {
    const API_URL = "https://fakestoreapi.com/products";
    const [data, setData] = useState([]);  // Store all products
    const [filteredData, setFilteredData] = useState([]);  // Store filtered products
    const [category, setCategory] = useState("");  // Store selected category

    // Fetch data from API
    useEffect(() => {
        fetch(API_URL)
        .then(response => response.json())
        .then(data => {
            setData(data);
            setFilteredData(data);
        })
        .catch(error => console.error('Error fetching data:', error));
    }, []);

    // Filter products by category
    const filterByCategory = (category) => {
        setCategory(category);
        if (category === "") {
            setFilteredData(data);
        } else {
            const filtered = data.filter((product) => product.category === category);
            setFilteredData(filtered);
        }
    };

    // Filter products by search query
    useEffect(() => {
        if (searchQuery) {
            const filtered = data.filter((product) => 
                product.title.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setFilteredData(filtered);
        } else {
            setFilteredData(data);
        }
    }, [searchQuery, data]);

    return (
        <>
            <div className="product-list-container">
                <h2>Product List</h2>

                {/* Category Buttons */}
                <div className="category-buttons">
                    <button onClick={() => filterByCategory("")}>All Products</button>
                    <button onClick={() => filterByCategory("electronics")}>Electronics</button>
                    <button onClick={() => filterByCategory("jewelery")}>Jewelry</button>
                    <button onClick={() => filterByCategory("men's clothing")}>Men's Clothing</button>
                    <button onClick={() => filterByCategory("women's clothing")}>Women's Clothing</button>
                </div>

                {/* Display Products */}
                <div className="cards-container">
                    {filteredData.map((product) => (
                        <Product key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default ProductList;
