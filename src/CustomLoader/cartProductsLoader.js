import { getShoppingCart } from "../utilities/fakedb";


const cartProductsLoader = async ()=>{
 const loadProducts = await fetch ('products.json')
 const products = await loadProducts.json();
 // if cart date is in database , you have to use async await
 const storedCart = getShoppingCart();
//  console.log(storedCart);
const savedCart =[];
 for(const id in storedCart ){
//   console.log(id);
//   const addedProduct = products.find(pd=>console.log(pd.id))
  const addedProduct = products.find(pd=>pd.id===id)
  console.log(addedProduct)
  if(addedProduct){
   const quantity =storedCart[id]

//    console.log(quantity)
        addedProduct.quantity = quantity
        savedCart.push(addedProduct) // object 3 property {id:'9496d72b-04ec-41f8-9bc3-0a7c9697be8e', category: "Men's     Sneaker", name: ' 4DFWD SHOES', seller: 'Addidas', price: 287, …}  added to []
  }

 }
//  console.log(products);
// if you need to send two things 
// return [products , savedCart]
//another options 
// return {products , savedCart}
// return {products , cart: savedCart}
//  return products;
return savedCart;
}
export default cartProductsLoader;