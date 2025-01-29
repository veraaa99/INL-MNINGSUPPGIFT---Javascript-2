import { Link } from "react-router"
import { useProductContext } from "../contexts/ProductContext"
import { useEffect } from "react"
import SetQuantityButton from "../components/SetQuantityButton"

function Products() {

  const { products } = useProductContext()
  const { getProducts } = useProductContext()

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <>
    <div className='m-8'>
      <h1 className='text-5xl justify-self-center px-5'>PRODUCTS</h1>
        <ul className='grid grid-cols-3 gap-6 m-5'>
          {
            products.map((product) => (
              <div className='flex flex-col text-sm' key={product._id}>
                <div className=''>
                  <Link to={`/Products/${product._id}`}>
                    <img className='object-cover rounded-lg' src={product.images[0]} ></img>
                  </Link>
                </div>
                <div className='flex flex-row justify-between p-3'>
                  <div>
                    <li><Link to={`/Products/${product._id}`}>{product.name}</Link></li>
                    <p>Price: {product.price} kr</p>
                  </div>
                  <div className='grid justify-items-center'>
                  <SetQuantityButton product={product} />
                  </div>
                </div>
              </div>
            ))
          }
        </ul>
      </div>
    </>
  )

}
export default Products