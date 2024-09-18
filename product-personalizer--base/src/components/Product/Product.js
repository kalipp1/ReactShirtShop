import styles from './Product.module.scss';
import PropTypes from 'prop-types';
import { useMemo, useState } from 'react';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';


const Product = props => {

  const[currentColor, setCurrentColor] = useState(props.colors[0]);
  const[currentSize, setCurrentSize] = useState(props.sizes[0].name);
  const TotalPrice = useMemo(() => {
    const size = props.sizes.find(item => item.name === currentSize);
    return props.basePrice + (size ? size.additionalPrice : 0);
  }, [props.basePrice, props.sizes, currentSize]);

  const addToCart = e => {
    e.preventDefault();
    console.log(props.name);
    console.log(currentColor);
    console.log(currentSize);
    console.log(props.basePrice+props.sizes.find(item => item.name === currentSize).additionalPrice);
  }

  return (
    <article className={styles.product}>
      <ProductImage name={props.name} currentColor={currentColor} title={props.title} />
      <div>
        <header>
          <h2 className={styles.name}>{props.name}</h2>
          <span className={styles.price}>Price: {TotalPrice} $</span>
        </header>
        <ProductForm onSubmit={props.onSubmit}
          currentSize={currentSize} setCurrentSize={setCurrentSize} onClick={props.onClick} sizes={props.sizes}
          currentColor={currentColor} setCurrentColor={setCurrentColor} colors={props.colors} addToCart={addToCart}  />
      </div>
    </article>
  )
};

Product.propTypes = {
 name: PropTypes.string,
 title: PropTypes.string,
 sizes: PropTypes.array
}

export default Product;