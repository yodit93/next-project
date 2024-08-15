import styles from '../../styles/Ninjas.module.css';
import Link from 'next/link';
// to fetch data from an API, we use getStaticProps function to fetch data at build time and pass it as props to the component

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
  
    return {
      props: { ninjas: data }
    }
  };

const Ninjas = ( {ninjas} ) => {
    return ( 
        <div>
            <h1>All Ninjas</h1>
            {ninjas.map( (ninja) => (
                <Link href= {`/ninjas/${ninja.id}`} key={ninja.id} className={styles.single}>
                    <h3>{ninja.name}</h3>
             
                </Link>
            ))}
        </div>
     );
}
 
export default Ninjas;

// the file name is index.js found in the subfolder, so the route will be /subfolder