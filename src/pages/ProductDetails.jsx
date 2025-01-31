import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { useProductContext } from "../contexts/ProductContext"
import SetQuantityButton from "../components/SetQuantityButton"

// Product details page (when clicking on a chosen product)
function ProductDetails() {

  // product ID as a param (to show and get the chosen product's details)
  const { productId } = useParams()

  // Import states from Product Context
  const { product } = useProductContext()
  const { setProduct } = useProductContext()
  const { setProductId } = useProductContext()
  const { imgSrc } = useProductContext()
  const { setImgSrc } = useProductContext()

  // State to set and update a big image of the product
  const [bigImage, setBigImage] = useState()

  // Swap around the big image (=bigImage state) with a small image that the user clicks (=the image props)
  const viewImage = (image) => {

    // Create a temporary array from the imgSrc state (big + small images)
    // Identify the index of the small image that had been clicked, and the index of the big image
    let tempArray = [...imgSrc]
    const index = imgSrc.findIndex(obj => obj === image);
    const index2 = imgSrc.findIndex(obj => obj === bigImage);

    // In the temporary array, set the image source of the small image to the source of the big image
    // Then, set the image source of the big image to the source of the small image
    tempArray[index] = bigImage
    tempArray[index2] = image

    // Set the updated temporary array to the original imgSrc state/array
    // Set the small image to the bigImage state
    setImgSrc(tempArray)
    setBigImage(image)
  }

  // When the page renders:
  // Set the productId param to the productId state
  // Get the chosen product by fetching it from the API (using the productId param in the url)
  useEffect(() => {
    setProductId(productId)
    const getProduct = async() => {
      try {
        const res = await fetch(`https://js2-ecommerce-api.vercel.app/api/products/${productId}`)
        const data = await res.json()

        // Set the data (res.json) to the product state, the data's images array to the imgSrc state 
        // and the first image in the data's image array to the bigImage state
        setProduct(data)
        setImgSrc(data.images)
        setBigImage(data.images[0])

        return true
  
      } catch(err) {console.log(err.message)}
    }
    getProduct()
  }, [])

  return (
    <div className='grid grid-cols-2 md:m-25 sm:m-10'>

      <div className='flex flex-col gap-1'>
        {/* Big image of the product */}
        <div className='justify-items-center'>
          <img className='object-contain rounded-xl'src={bigImage}></img>
        </div>

        {/* Small images of the product (shows all images except the first one in the array, which is the big image) */}
        {/* The amount of columns in the grid changes epending on the amount of pictures the product has to display */}
        <div className={`grid md:grid-cols-${imgSrc.length - 1} sm:grid-cols-2 justify-evenly gap-3`}>
        {
          imgSrc.slice(1).map((image) => (
            <img key={image} className='object-contain rounded-lg mt-5' src={image} onClick={() => {viewImage(image)}}></img>
          ))
        }
        </div>

      {/* Product's name, description, price and SetQuantityButton component 
      (to set and add a chosen amount of the product to shopping cart) */}
      </div>
        <div className='flex flex-col justify-items-center'>
          <div className='p-7'>
            <h1 className='text-3xl pb-7'>{product.name}</h1>
            <p>{product.description}</p>
          </div>
          <div className='p-8'>
            <p className='pb-7' >Price: {product.price} kr</p>
            <SetQuantityButton product={product} />
        </div>
      </div>

    </div>
  )
}
export default ProductDetails