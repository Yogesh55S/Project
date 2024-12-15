/* eslint-disable no-unused-vars */
import { useState } from "react";
import styles from "./post.module.css";

const Post = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState(null);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !description || !price || !image) {
            setError("Please fill all fields");
            return;
        }
        const formData = new FormData();
        formData.append("name", name);
        formData.append("description", description);
        formData.append("price", price);
        formData.append("image", image);
        // API call to submit form data
        fetch("http://localhost:5000/api/submit", {
            method: "POST",
            body: formData,
        })
            .then((res) => res.json())
            .then((data) => {
                setSuccess("Order submitted successfully");
                setError(null);
                setName("");
                setDescription("");
                setPrice("");
                setImage(null);
            })
            .catch((err) => {
                setError("Error submitting order");
                setSuccess(null);
            });
    };

    return (
        <>
        <div className={styles.image}>
            <h1 className={styles.name}>Post Your Order</h1>
            <div className={styles.container}>
                <form onSubmit={handleSubmit} className={styles.box}>
                    <div>
                        <label>Name:</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)}required/>
                    </div>
                    <div>
                        <label>Description:</label>
                        <textarea value={description} onChange={(e) => setDescription(e.target.value)} required/>
                    </div>
                    <div>
                        <label>Price:</label>
                        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required/>
                    </div>
                    <div>
                        <label>Upload Image:</label>
                        <input type="file" onChange={(e) => setImage(e.target.files[0])} required />
                    </div>
                    {error && <p style={{ color: "red" }}>{error}</p>}
                    {success && <p style={{ color: "green" }}>{success}</p>}
                    <button type="submit" className={styles.button}>Submit Order</button>
                </form>
            </div>
            </div>
        </>
    );
};

export default Post;