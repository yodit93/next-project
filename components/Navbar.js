import Link from "next/link";

const Navbar = () => {
    return ( 
        <nav>
            <h1>Ninja Logo</h1>
            <div className="links">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/ninjas">Ninja Listing</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;