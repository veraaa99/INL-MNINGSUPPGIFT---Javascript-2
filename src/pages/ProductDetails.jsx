import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { useProductContext } from "../contexts/ProductContext"
import SetQuantityButton from "../components/SetQuantityButton"

function ProductDetails() {

    const { productId } = useParams()

    const { product } = useProductContext()
    const { setProduct } = useProductContext()
    const { setProductId } = useProductContext()
    const { imgSrc } = useProductContext()
    const { setImgSrc } = useProductContext()

    const [bigImage, setBigImage] = useState()

    useEffect(() => {
      setProductId(productId)
      const getProduct = async() => {
        try {
          const res = await fetch(`https://js2-ecommerce-api.vercel.app/api/products/${productId}`)
          const data = await res.json()
          setProduct(data)
          setImgSrc(data.images)
          setBigImage(data.images[0])
          return true
    
        } catch(err) {console.log(err.message)}
      }
      getProduct()
    }, [])

    const viewImage = (image) => {
      
      let tempArray = [...imgSrc]
      const index = imgSrc.findIndex(obj => obj === image);
      const index2 = imgSrc.findIndex(obj => obj === bigImage);

      tempArray[index] = bigImage
      tempArray[index2] = image

      setImgSrc(tempArray)
      setBigImage(image)
    }

  return (
    <div className='grid grid-cols-2 md:m-25 sm:m-10'>

      <div className='flex flex-col gap-1'>
        <div className='justify-items-center'>
          <img className='object-contain rounded-xl'src={bigImage}></img>
        </div>

        <div className={`grid md:grid-cols-${imgSrc.length - 1} sm:grid-cols-2 justify-evenly gap-3`}>
        {
          imgSrc.slice(1).map((image) => (
            <img key={image} className='object-contain rounded-lg mt-5' src={image} onClick={() => {viewImage(image)}}></img>
          ))
        }
        </div>

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