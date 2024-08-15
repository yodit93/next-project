import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <h1>Home page</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis iusto maiores quia ipsa doloremque 
        temporibus quas dolores sunt id velit ducimus deleniti, nihil sapiente eaque vitae nobis! At, ipsa voluptatibus?</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis iusto maiores quia ipsa doloremque 
      temporibus quas dolores sunt id velit ducimus deleniti, nihil sapiente eaque vitae nobis! At, ipsa voluptatibus?</p>
      </div>
  )
}
