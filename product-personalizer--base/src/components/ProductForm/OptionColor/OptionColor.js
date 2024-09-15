import styles from './OptionColor.module.scss';
import clsx from 'clsx';

const OptionColor = props => {
    return(
        <div className={styles.colors}>
          <h3 className={styles.optionLabel}>Colors</h3>
          <ul className={styles.choices}>
          {props.colors.map(color => <li key={color}><button type='button' onClick={() => props.setCurrentColor(color)} className={clsx(styles[`color${color.charAt(0).toUpperCase() + color.slice(1)}`], color === props.currentColor ? styles.active : "")}></button></li>)}
          </ul>
        </div>
    )
}

export default OptionColor;