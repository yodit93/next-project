import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Home page</h1>
      <p className={styles.text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis iusto maiores quia ipsa doloremque 
        temporibus quas dolores sunt id velit ducimus deleniti, nihil sapiente eaque vitae nobis! At, ipsa voluptatibus?</p>
      <p className={styles.text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis iusto maiores quia ipsa doloremque 
      temporibus quas dolores sunt id velit ducimus deleniti, nihil sapiente eaque vitae nobis! At, ipsa voluptatibus?</p>
      <Link className={styles.btn}href="/ninjas">See all ninjas</Link>
    </div>
  )
}
