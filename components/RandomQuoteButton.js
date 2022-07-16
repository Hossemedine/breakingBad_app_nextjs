import Styles from '../styles/randomquotebutton.module.css'

const RandomQuoteButton = (props) => {
    return ( 
        <div className={Styles.wrapper}>
        <button className={Styles.button}
        onClick={props.GenerateRandomNumber}
        ><h3>Click For a Random Quote</h3></button>
        </div>
     );
}
 
export default RandomQuoteButton;