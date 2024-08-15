import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Home page</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis iusto maiores quia ipsa doloremque 
        temporibus quas dolores sunt id velit ducimus deleniti, nihil sapiente eaque vitae nobis! At, ipsa voluptatibus?</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis iusto maiores quia ipsa doloremque 
      temporibus quas dolores sunt id velit ducimus deleniti, nihil sapiente eaque vitae nobis! At, ipsa voluptatibus?</p>
      <Link href="/ninjas">See all ninjas</Link>
      <Footer />
    </div>
  )
}
