import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
const NotFound = () => {
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 3000);
    }, []);
    return ( 
        <div className="not-found">
        <h1>Oooops...</h1>
        <p>That page cannot be found.</p>
        <p>Go to <Link href="/">Homepage</Link></p>
        </div>
     );
}
 
export default NotFound;