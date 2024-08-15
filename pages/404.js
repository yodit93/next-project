import Link from 'next/link';
const NotFound = () => {
    return ( 
        <div className="not-found">
        <h1>Oooops...</h1>
        <p>That page cannot be found.</p>
        <p>Go to <Link href="/">Homepage</Link></p>
        </div>
     );
}
 
export default NotFound;