import React, { useState } from 'react'

export default function Products({addProduct}) {
    const data = [
        {
          id: 1,
          productName: "Irish Cream - Baileys",
          productPrice: 85,
          productPic: "https://picsum.photos/id/1/500/500",
          productDescription:
            "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
        },
        {
          id: 2,
          productName: "Bread - Rosemary Focaccia",
          productPrice: 72,
          productPic: "https://picsum.photos/id/2/500/500",
          productDescription:
            "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
        },
        {
          id: 3,
          productName: "Bread - Roll, Italian",
          productPrice: 12,
          productPic: "https://picsum.photos/id/3/500/500",
          productDescription:
            "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
        },
        {
          id: 4,
          productName: "Irish Cream - Baileys",
          productPrice: 78,
          productPic: "https://picsum.photos/id/4/500/500",
          productDescription:
            "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
        },
        {
          id: 5,
          productName: "Ham - Cooked",
          productPrice: 37,
          productPic: "https://picsum.photos/id/5/500/500",
          productDescription: "Fusce consequat. Nulla nisl. Nunc nisl.",
        },
        {
          id: 6,
          productName: "Truffle Shells - Semi - Sweet",
          productPrice: 31,
          productPic: "https://picsum.photos/id/6/500/500",
          productDescription: "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
        },
        {
          id: 7,
          productName: "Pepper - White, Whole",
          productPrice: 100,
          productPic: "https://picsum.photos/id/7/500/500",
          productDescription:
            "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
        },
        {
          id: 8,
          productName: "Liqueur - Melon",
          productPrice: 94,
          productPic: "https://picsum.photos/id/8/500/500",
          productDescription:
            "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
        },
        {
          id: 9,
          productName: "Tofu - Firm",
          productPrice: 77,
          productPic: "https://picsum.photos/id/9/500/500",
          productDescription: "Sed ante. Vivamus tortor. Duis mattis egestas metus.",
        },
        {
          id: 10,
          productName: "Triple Sec - Mcguinness",
          productPrice: 60,
          productPic: "https://picsum.photos/id/10/500/500",
          productDescription: "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
        },
      ];

        const [product, setproducts]= useState(data)
  return (
    <div className=' container col-xxl-12 col-xl-12 col-lg-10 col-md-10 col-sm-10 ' > 
    <h2 className=' text-black text-center'> Products </h2>
        <div className=' row row-cols-xxl-4 row-cols-xl-4 row-cols-lg-3  row-cols-md-2 row-cols-sm-1  gap-1 '>
          
                {product.map((product)=>(
                    <div className='row g-1'  key={product.id}> 
                    <div className='card  ' style={{}}>
                    <img src={product.productPic} className='card-img-top' alt={product.productName} /> 
                    <div className=' card-body d-grid p-1'>
                    <h4 className=' card-title'>{product.productName}</h4>
                    <p className='card-text overflow-y-scroll fs-5 ' style={{ maxHeight: "4.5rem", overflowY: "auto" }}>{product.productDescription}</p>
                    <button className='btn btn-danger btn-sm ' onClick={()=>{addProduct(product.id, product.productName, product.productPrice)}}> 
                    Add
                    </button>
                    </div>   
                     </div>
                    </div>
                ))}    
         </div>

    
     </div>
  )
}


// import React, { useState } from "react";

// export default function Products({ addProduct }) {
//   const data = [
//     {
//       id: 1,
//       productName: "Irish Cream - Baileys",
//       productPrice: 85,
//       productPic: "https://picsum.photos/id/1/500/500",
//       productDescription:
//         "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
//     },
//     {
//       id: 2,
//       productName: "Bread - Rosemary Focaccia",
//       productPrice: 72,
//       productPic: "https://picsum.photos/id/2/500/500",
//       productDescription:
//         "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
//     },
//     {
//       id: 3,
//       productName: "Bread - Roll, Italian",
//       productPrice: 12,
//       productPic: "https://picsum.photos/id/3/500/500",
//       productDescription:
//         "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
//     },
//     {
//       id: 4,
//       productName: "Irish Cream - Baileys",
//       productPrice: 78,
//       productPic: "https://picsum.photos/id/4/500/500",
//       productDescription:
//         "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
//     },
//     {
//       id: 5,
//       productName: "Ham - Cooked",
//       productPrice: 37,
//       productPic: "https://picsum.photos/id/5/500/500",
//       productDescription: "Fusce consequat. Nulla nisl. Nunc nisl.",
//     },
//     {
//       id: 6,
//       productName: "Truffle Shells - Semi - Sweet",
//       productPrice: 31,
//       productPic: "https://picsum.photos/id/6/500/500",
//       productDescription: "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
//     },
//     {
//       id: 7,
//       productName: "Pepper - White, Whole",
//       productPrice: 100,
//       productPic: "https://picsum.photos/id/7/500/500",
//       productDescription:
//         "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
//     },
//     {
//       id: 8,
//       productName: "Liqueur - Melon",
//       productPrice: 94,
//       productPic: "https://picsum.photos/id/8/500/500",
//       productDescription:
//         "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
//     },
//     {
//       id: 9,
//       productName: "Tofu - Firm",
//       productPrice: 77,
//       productPic: "https://picsum.photos/id/9/500/500",
//       productDescription: "Sed ante. Vivamus tortor. Duis mattis egestas metus.",
//     },
//     {
//       id: 10,
//       productName: "Triple Sec - Mcguinness",
//       productPrice: 60,
//       productPic: "https://picsum.photos/id/10/500/500",
//       productDescription: "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
//     },
//   ];
//   const [products, setProducts] = useState(data);
//   return (
//     <div className='container'>
//       <div className='row row-cols-5 g-4 mt-4'>
//         {products.map((product) => (
//           <div className='col' key={product.id}>
//             <div className='card'>
//               <img src={product.productPic} className='card-img-top' alt={product.productName} />
//               <div className='card-body'>
//                 <h5 className='card-title text-truncate'>{product.productName}</h5>
//                 <p className='card-text text-truncate'>{product.productDescription}</p>
//                 <button
//                   className='btn btn-primary'
//                   onClick={() => {
//                     addProduct(product.id, product.productName, product.productPrice);
//                   }}>
//                   ADD
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

