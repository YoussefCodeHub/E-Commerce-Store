import ProductList from "./ProductList";

function Home({ searchQuery }) {
    return (
        <>
        <ProductList searchQuery={searchQuery} /> 
        </>
    );
}

export default Home;
