import { useState } from "react";
import { useEffect } from "react";
import "./Product.css";
import { useNavigate } from "react-router-dom";

const Product = () => {
    const [products, setProduct] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/api/products").then(res => res.json())
            .then(data => { setProduct(data); console.log(data); });
    }, []);

    const handleDelete = (id) => {
        fetch(`http://localhost:3001/api/products/deleted/${id}`, {
            method: 'DELETE',
        }).then(res => {
            if (res.ok) {
                setProduct(products.filter(product => product._id !== id));
            } else {
                alert("Error deleting product");
            }
        })
    }
    const navigate = useNavigate();

    const handleUpdateProduct = (product) => {
        navigate(`/add`, { state: { product } });
    }

    return <div className="page">
        <div className="page-head">
            <h1>Product Details</h1>
            <span className="icon-rocket">🚀</span>
        </div>
        <div className="product">
            {products.map((product) => (
                <div className="card" key={product._id}>
                    <div className="card-image">
                        <img src={product.image} alt="name" />
                    </div>
                    <div className="card-name">{product.name}</div>
                    <div className="card-price">${product.price}</div>
                    <div className="card-actions">
                        <button className="btn-edit" onClick={() => handleUpdateProduct(product)}>✏️</button>
                        <button className="btn-delete" onClick={() => handleDelete(product._id)}>🗑️</button>

                    </div>
                </div>
            ))
            }
        </div>
    </div>
}

export default Product;