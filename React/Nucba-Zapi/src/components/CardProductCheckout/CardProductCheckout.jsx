import { formatPrice } from '../../utils';

import { BsPlusLg } from 'react-icons/bs';
import { FaMinus } from 'react-icons/fa';
import {IoMdTrash} from "react-icons/io";

import Count from '../UI/Count/Count';
import Increase from '../UI/Increase/Increase';

import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../../redux/cart/cartSlice';

import {
  CardContainerStyled,
  CardInfoStyled,
  PriceStyled,
  ProductTitleStyled,
  TextStyled,
  QuantityContainerStyled,
} from './CardProductCheckoutStyles';

const CardProductCheckout = ({img,title,desc,price,quantity,id}) => {

  const dispatch = useDispatch();

  return (
    <CardContainerStyled>
      <img src={img} alt={title}/>
      <CardInfoStyled>
        <ProductTitleStyled>{title}</ProductTitleStyled>
        <TextStyled>{desc}</TextStyled>
        <PriceStyled>{formatPrice(price)}</PriceStyled>
      </CardInfoStyled>
      <QuantityContainerStyled>
        <Increase
          bgColor='var(--btn-gradient-secondary)'
          onClick={ () => dispatch(removeFromCart(id))}
        >

          {quantity===1?<IoMdTrash/>:<FaMinus />}
        </Increase>
        <Count>{quantity}</Count>
        <Increase onClick={()=> dispatch(addToCart({img,title,desc,price,quantity,id}))}>
          <BsPlusLg />
        </Increase>
      </QuantityContainerStyled>
    </CardContainerStyled>
  );
};

export default CardProductCheckout;
