import { Link } from "react-router"
import { useProductContext } from "../contexts/ProductContext"
import { useEffect } from "react"
import SetQuantityButton from "../components/SetQuantityButton"

// Products page
function Products() {

  // Import states from Product Context
  const { products } = useProductContext()
  const { getProducts } = useProductContext()

  // Get all products when page is rendered
  useEffect(() => {
    getProducts()
  }, [])


  return (
    <div className='m-8'>
      <h1 className='text-5xl justify-self-center p-10'>Products</h1>

      <ul className='grid md:m-8 md:gap-20 md:grid-cols-3 gap-6 m-8 px-8 sm:grid-cols-2'>
        {/* List with all products */}
        {
          products.map((product) => (
            <div className='flex flex-col text-sm' key={product._id}>

              {/* Product image (with link to Product details page. The product's ID is used as param in the url) */}
              <div>
                <Link to={`/Products/${product._id}`}>
                  <img className='object-cover rounded-lg' src={product.images[0]} ></img>
                </Link>
              </div>

              {/* Product's name (with link to Product details page), price and SetQuantityButton component 
              (to set and add a chosen amount of the product to shopping cart) */}
              <div className='flex flex-row justify-between mt-3 flex-wrap'>
                <div className="mr-4">
                  <li><Link className='md:text-lg sm:text-base' to={`/Products/${product._id}`}>{product.name}</Link></li>
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
export default Products