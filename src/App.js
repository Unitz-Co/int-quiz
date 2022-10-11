import "./App.css";
import data from "./data.json";
import { useState } from "react";

function App() {
  const [products, setProducts] = useState(
    data.data.advisorProfileCollection.items
  );
  const handleFilterByCategory = (searchValue) => {
    const result = products.filter((product) =>
      product.categoriesCollection.items.some(
        (category) => category.sys.id === searchValue
      )
    );
    setProducts(result);
  };
  const handleFilterByName = (searchValue) => {
    const result = products.filter(
      (product) =>
        product.displayName.trim().toLowerCase() ===
        searchValue.trim().toLowerCase()
    );
    setProducts(result);
  };
  const handleFilterByStatus = (searchValue) => {
    if (searchValue !== "") {
      const result = data.data.advisorProfileCollection.items.filter(
        (product) => product.status === searchValue
      );
      setProducts(result);
    } else {
      handleReset();
    }
  };
  const handleReset = () => {
    setProducts(data.data.advisorProfileCollection.items);
  };
  return (
    <div className="container">
      <button onClick={handleReset}>Reset</button>
      <button onClick={() => handleFilterByCategory("6dbCsjeKiwyrUurVporPzF")}>
        FilterByCategory
      </button>
      <button onClick={() => handleFilterByName("Pham Ngoc Hoang ip")}>
        FilterByName
      </button>
      <select onChange={(e) => handleFilterByStatus(e.target.value)}>
        <option value="">ALL</option>
        <option value="ACTIVE">ACTIVE</option>
        <option value="INACTIVE">INACTIVE</option>
      </select>
      <div className="list-products">
        {products &&
          products.map((product, index) => {
            return (
              <div className="product-item" key={index}>
                <div className="product-item--image">
                  <img
                    src={product?.avatarUrl?.url}
                    alt={product?.avatarUrl?.title}
                  />
                </div>
                <div className="product-item--description">
                  <h5>{product?.displayName}</h5>
                  <p>{product?.email}</p>
                  <p>{product?.phone}</p>
                  <div className="product-item--box">
                    <h5>Category</h5>
                    {product?.categoriesCollection?.items?.map(
                      (category, index) => {
                        return <span key={index}>{category?.displayName}</span>;
                      }
                    )}
                  </div>
                  <div className="product-item--box">
                    <h5>Skill</h5>
                    {product?.skillsCollection?.items?.map((skill, index) => {
                      return <span key={index}>{skill?.displayName}</span>;
                    })}
                  </div>
                  <div className="product-item--box">
                    <h5>Service</h5>
                    {product?.servicesCollection?.items?.map(
                      (service, index) => {
                        return <span key={index}>{service?.name}</span>;
                      }
                    )}
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default App;
