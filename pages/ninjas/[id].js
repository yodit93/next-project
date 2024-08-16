// to tell next.js that the number of pages that will be generated is dynamic, we use the getStaticPaths function, which returns an object with the paths property and the fallback property
export const getStaticPaths = async () => {
/*
    this function is used to generate the paths for the dynamic routes, creates something like this 
    {
        paths: [
            { params: { id: '1' } },
            { params: { id: '2' } },
            { params: { id: '3' } }
        ],
        fallback: false
    }
*/

    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    const paths = data.map( ninja => { // we map through the data and return an object with the params property,we need to return array of objects with id property
        return {
            params: { id: ninja.id.toString() } // the id is a string, so we need to convert it to a string
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await res.json();

    return {
        props: { ninja: data }
    }
}
const Details = ( {ninja} ) => {
    return ( 
        <div>
            <h1>{ninja.name}</h1>
            <p>{ninja.email}</p>
            <p>{ninja.website}</p>
            <p>{ninja.address.city}</p>
        </div>
     );
}
 
export default Details;