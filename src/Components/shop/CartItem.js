import styled from "styled-components";

export default function CartItem({ cartItem }) {
    const { name, quantity, imageUrl, price } = cartItem;

    return (
        <div>
            <h4>{name}</h4>
            <Img src={imageUrl} alt={`${name}`} />
            <span>Qty:{quantity}</span>
            <span>Price: ${price}</span>
            <button>Remove</button>
        </div>
    )
}

const Img = styled.img`
    height: 80px;
    width: 80px;
    margin: 0 20px;
`


// .cart-item-container {
//     width: 100%;
//     display: flex;
//     height: 80px;
//     margin-bottom: 15px;
  
//     img {
//       width: 30%;
//     }
  
//     .item-details {
//       width: 70%;
//       display: flex;
//       flex-direction: column;
//       align-items: flex-start;
//       justify-content: center;
//       padding: 10px 20px;
  
//       .name {
//         font-size: 16px;
//       }
//     }
//   }

