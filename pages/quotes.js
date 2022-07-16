import RandomQuoteButton from '../components/RandomQuoteButton'
import { useState } from 'react'
import Quote from '../components/Quote'

const Quotes = ({data}) => {
    
const [RandomQuote, setRandomQuote] = useState(null)
   
    const GenerateRandomNumber=()=> {
        setRandomQuote(data[Math.ceil(Math.random()*70)])
        

    }
    return (
        <>

        <RandomQuoteButton GenerateRandomNumber={GenerateRandomNumber}/>
        {RandomQuote && <Quote quote={RandomQuote}/>}
        </>
    );
}

export default Quotes;

Quotes.getInitialProps = async () => {
    const res = await fetch('https://www.breakingbadapi.com/api/quotes')
    const data = await res.json()
    return { data }
} 