 import React, { useState } from 'react'
 
 export default function Test2() {
    const data = [
        {
          id: 1,
          productName: "Pork - Back, Long Cut, Boneless",
          productPrice: 257,
          productQuantity: 8,
        },
        {
          id: 2,
          productName: "Fudge - Chocolate Fudge",
          productPrice: 259,
          productQuantity: 8,
        },
        {
          id: 3,
          productName: "Mustard - Dijon",
          productPrice: 457,
          productQuantity: 3,
        },
        {
          id: 4,
          productName: "Champagne - Brights, Dry",
          productPrice: 62,
          productQuantity: 3,
        },
        {
          id: 5,
          productName: "Salmon - Whole, 4 - 6 Pounds",
          productPrice: 437,
          productQuantity: 10,
        },
        {
          id: 6,
          productName: "Peppercorns - Green",
          productPrice: 473,
          productQuantity: 5,
        },
        {
          id: 7,
          productName: "Beef - Montreal Smoked Brisket",
          productPrice: 84,
          productQuantity: 3,
        },
        {
          id: 8,
          productName: "Ice Cream Bar - Hagen Daz",
          productPrice: 338,
          productQuantity: 10,
        },
        {
          id: 9,
          productName: "Cleaner - Pine Sol",
          productPrice: 323,
          productQuantity: 2,
        },
        {
          id: 10,
          productName: "Marzipan 50/50",
          productPrice: 477,
          productQuantity: 1,
        },
      ];

      const [basket, setBasket] = useState(data);

   return (
            <table className=' table'>
                <thead>
                    <tr>
                    <th scope='col'>#</th>
                     <th scope='col'>Name</th>
                    <th scope='col'>Price</th>
                     <th scope='col'>Count</th>
                    <th scope='col'>subTotal</th>
                    </tr>
                </thead>
                <tbody className=' table-group-divider'>
                    {basket.map((item)=>(
                          <tr key={item.id}>
                          <th scope='row'>{item.id}</th>
                          <td>{item.productName}</td>
                          <td>{item.productPrice}</td>
                          <td>{item.productQuantity}</td>
              
                          <td>{item.productQuantity * item.productPrice}</td>
                        </tr>
                    ))}

                </tbody>
            </table>
   );
 }
 