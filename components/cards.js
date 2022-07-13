import Card from "./card";

import Styles from '../styles/cards.module.css'

const Cards = ({char}) => {
    
   
    return (
    <div className={Styles.containner}>
    {char.map((e)=> <Card key={e.char_id} {...e}/>)}
    </div>
    
    )
}

export default Cards;