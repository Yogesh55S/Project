// src/Profile.jsx
import { useState } from "react";
import styles from "./profile.module.css";

const Profile = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [bio, setBio] = useState("");
    const [profileImage, setProfileImage] = useState(null);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !bio || !profileImage) {
            setError("Please fill all fields");
            return;
        }
        // Handle the form submission logic here (e.g., API call)
        setSuccess("Profile updated successfully");
        setError(null);
        setName("");
        setEmail("");
        setBio("");
        setProfileImage(null);
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Profile Section</h1>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div>
                    <label>Name:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div>
                    <label>Bio:</label>
                    <textarea value={bio} onChange={(e) => setBio(e.target.value)} required />
                </div>
                <div>
                    <label>Upload Profile Image:</label>
                    <input type="file" onChange={(e) => setProfileImage(e.target.files[0])} required />
                </div>
                {error && <p style={{ color: "red" }}>{error}</p>}
                {success && <p style={{ color: "green" }}>{success}</p>}
                <button type="submit">Update Profile</button>
            </form>
        </div>
    );
};

export default Profile;