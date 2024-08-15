import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <Image src="/logo.png" alt="logo" width={128} height={77}/>
                {/* image components are important since it automaticaly lazy loading the image, i.e it only loads the image when we need to see it on the page */}
            </div>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/ninjas">Ninja Listing</Link>
        
        </nav>
     );
}
 
export default Navbar;