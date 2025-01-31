import { Link } from "react-router"
import { useProductContext } from "../contexts/ProductContext"
import { useEffect } from "react"
import SetQuantityButton from "../components/SetQuantityButton"

// Home page
function Home() {

  // Import state and function from Product Context
  const { products } = useProductContext()
  const { getProducts } = useProductContext()

  // Get all products when page is rendered
  useEffect(() => {
    getProducts()
  }, [])

  return (
    <div className='m-8'>
      <h1 className='text-5xl justify-self-center p-5'>Home</h1>
      <h2 className='text-3xl justify-self-center p-5'>Popular items</h2>

      <ul className='grid md:grid-cols-2 sm:grid-cols-1 gap-10 md:gap-20 md:m-15 px-20 justify-center'>
        {/* List with 10 products */}
        {
          products.slice(0, 10).map((product) => (
            <div className='flex flex-col text-sm justify-center' key={product._id}>
              {/* Product image (with link to Product details page. The product's ID is used as param in the url)*/}
              <div>
                <Link to={`/Products/${product._id}`}>
                  <img className='object-cover rounded-lg' src={product.images[0]} ></img>
                </Link>
              </div>

              {/* Product name (with link to Product details page), price and SetQuantityButton component 
              (to set and add a chosen amount of the product to shopping cart) */}
              <div className='flex flex-row justify-between m-3 flex-wrap'>
                <div>
                  <li><Link className='md:text-xl' to={`/Products/${product._id}`}>{product.name}</Link></li>
                  <p className='pt-2'>Price: {product.price} kr</p>
                </div>
                <div className='grid justify-items-center py-2'>
                <SetQuantityButton product={product} />
                </div>
              </div>
              
            </div>
          ))
        }
      </ul>

    </div>
  )
}
export default Home