import { useEffect, useState } from "react";
import "./CreateProduct.css";
import { useLocation } from "react-router-dom";

const CreateProduct = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const location = useLocation();
    const product = location.state?.product;
    console.log(product);

    async function submitHandle() {
        event.preventDefault();
        if (product) {
            const newProduct = { name: name.trim(), price: Number(price), image: image.trim(), id: product?._id };
            console.log(newProduct);
            const res = await fetch("http://localhost:3001/api/products/update", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(newProduct)
            });
            console.log(res);
            if (res.ok) {
                alert(`Product ${product ? "updated" : "created"} successfully!`);
                setName("");
                setPrice("");
                setImage("");
            } else {
                alert("Error creating/updating product");
            }

        } else {
            const newProduct = { name: name.trim(), price: Number(price), image: image.trim() };
            console.log(newProduct);
            const res = await fetch("http://localhost:3001/api/products/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(newProduct)
            });
            console.log(res);
            if (res.ok) {
                alert(`Product ${product ? "updated" : "created"} successfully!`);
                setName("");
                setPrice("");
                setImage("");
            } else {
                alert("Error creating/updating product");
            }
        }
    }
    useEffect(() => {
        if (product) {
            setName(product.name);
            setPrice(product.price);
            setImage(product.image);
        }
    }, [product]);

    return (
        <div className="container">
            <h1>Create Product Page</h1>
            <form className="form">
                <div className="form-group">
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Product Name"
                        className="form-control"
                    />
                    <input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        placeholder="Product Price"
                        className="form-control"
                    />
                    <input
                        type="text"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        placeholder="Product Image URL"
                        className="form-control"
                    />
                    <button className="btn" type="submit" onClick={() => submitHandle()}>{product ? "Update product" : "Create Product"}</button>
                </div>
            </form>
        </div>
    )
}
export default CreateProduct;