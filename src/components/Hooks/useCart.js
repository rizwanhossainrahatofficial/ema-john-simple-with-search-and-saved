import {useState,useEffect} from 'react'
import {getStoredCart} from '../../utilities/fakedb'


const useCart=products=>{
    const [cart,setCart]=useState([])

    useEffect(()=>{

        if(products.length){
            const savedCart=getStoredCart()
            const storedCart=[]
            // saveCart ar modde for loop chaliye key nichi  in dibo object ar jonno r of dibo array ar jonno
            for(const key in savedCart){
                const addedProduct=products.find(product=>product.key===key)
                if(addedProduct){
                    const quantity=savedCart[key]
                    addedProduct.quantity=quantity
                    storedCart.push(addedProduct)
                }
                setCart(storedCart)
            }
            
        }
    },[products])
    
    return [cart,setCart];
}

export default useCart;