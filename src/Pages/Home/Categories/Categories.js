
import { useQuery } from '@tanstack/react-query';
import Category from './Category/Category';


const Categories = () => {


    const { data: categories = [] } = useQuery({
        queryKey: ['categories'],
        queryFn: () => fetch(`http://localhost:5000/categories`)
            .then(res => res.json())
    })


    return (
        <div className='mt-14 '>
            <h2 className='text-2xl font-medium'>Laptop Brands For You</h2>
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