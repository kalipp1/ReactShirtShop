import Button from "./Button/Button";
import OptionSize from "./OptionSize/OptionSize";
import OptionColor from "./OptionColor/OptionColor";
import styles from './ProductForm.module.scss';

const ProductForm = props => {
    return(
        <form onSubmit={props.addToCart}>
            <OptionSize currentSize={props.currentSize} setCurrentSize={props.setCurrentSize} onClick={props.onClick} sizes={props.sizes} />
        {/* <div className={styles.sizes}>
          <h3 className={styles.optionLabel}>Sizes</h3>
          <ul className={styles.choices}>
            {props.sizes.map(size => <li key={size.name}><button type='button' onClick={() => setCurrentSize(size.name)} className={size.name === currentSize ? styles.active : ""}>{size.name}</button></li>)}
          </ul>
        </div> */}
            <OptionColor currentColor={props.currentColor} setCurrentColor={props.setCurrentColor} onClick={props.onClick} colors={props.colors} />
        {/* <div className={styles.colors}>
          <h3 className={styles.optionLabel}>Colors</h3>
          <ul className={styles.choices}>
          {props.colors.map(color => <li key={color}><button type='button' onClick={() => setCurrentColor(color)} className={clsx(styles[`color${color.charAt(0).toUpperCase() + color.slice(1)}`], color === currentColor ? styles.active : "")}></button></li>)}
          </ul>
        </div> */}
        <Button className={styles.button}>
          <span className="fa fa-shopping-cart" />
        </Button>
      </form>
    )
}

export default ProductForm;