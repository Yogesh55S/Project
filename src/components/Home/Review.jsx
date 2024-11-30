import styles from "./review.module.css";
import { VscOctoface } from "react-icons/vsc";

const Review = () => {
    const data = [
        {
            description: "Easy navigation and clear menu options are essential. Users should easily find information on services, products, or content related to farming.",
            icon: <VscOctoface />, 
            name: "John Doe"
        },
        {
            description: "High-quality, well-researched articles or blogs about farming practices, trends, and innovations can engage visitors and build authority.",
            icon: <VscOctoface />, 
            name: "Alpha System"
        },
        {
            description: "Visuals, such as images of farms, equipment, or crop processes, should be professional and appealing. Consistent color schemes and layout help create a cohesive look.",
            icon: <VscOctoface />, 
            name: "Aren Yegar"
        },{
            description: "The website should be optimized for mobile devices, as many users may access it on smartphones or tablets.",
            icon: <VscOctoface />, 
            name: "Autobots"
        },
    ];

    return (
        <>
            <div className={styles.head}>
                <div className={styles.review}>Reviews</div>
                <div className={styles.content}>
                    {data.map((item, index) => (
                        <div key={index} className={styles.card}>
                            <p className={styles.description}>{item.description}</p>
                            {item.icon && <div className={styles.icon}>{item.icon}</div>}
                            <p className={styles.name}>{item.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Review;