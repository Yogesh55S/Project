import { useState } from "react";
import styles from "./fheader.module.css";
const Fheader = ()=>{
    const [name, setName] = useState('');

return (
    <>
    <header>
        <div className={styles.container}>
            <h1 id={styles.name}>{name}</h1>
        </div>
        <input 
            type="text" 
            name="name" 
            id="name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
        />
        <button onClick={() => console.log(name)}>Enter</button>
    </header>
    </>
    )
}
export default Fheader;