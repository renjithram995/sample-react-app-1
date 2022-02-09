import styles from './Card.module.css';

const Card = (props) => {
    return (
        <div className={`${props.classname} ${styles['card-container']}`}>{props.children}</div>
    )
}
export default Card;