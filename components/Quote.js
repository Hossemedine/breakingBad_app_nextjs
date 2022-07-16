import Styles from '../styles/randomquote.module.css'

const Quote = ({quote,...props}) => {

    console.log(quote.quote)
    console.log(quote.author)
    return ( 
    <div className={Styles.wrapper}>
    <h1>{quote.quote}</h1>
    <p>Author: {quote.author}</p>

    </div>
     );
}
 
export default Quote;