
import { useQuery } from '@tanstack/react-query';
import Category from './Category/Category';


const Categories = () => {


    const { data: categories = [] } = useQuery({
        queryKey: ['categories'],
        queryFn: () => fetch(`https://resale-market-server-side-nu.vercel.app/categories`)
            .then(res => res.json())
    })


    return (
        <div className='mt-24'>
            <h2 className='text-4xl font-bold'>Laptop Brands For You</h2>
            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8'>
                {
                    categories.map(category => <Category
                        key={category._id}
                        category={category}
                    ></Category>
                    )}
            </div>
        </div>
    );
};

export default Categories;