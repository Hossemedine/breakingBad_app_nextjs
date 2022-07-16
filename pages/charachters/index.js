import { getInitialProps } from 'next/dist/shared/lib/utils'
import React ,{useState} from 'react'
import ReactPaginate from 'react-paginate';
import Cards from '../../components/cards'
import Styles from '../../styles/pagination.module.css'


function Charachters( {data}) {
  console.log(data[0])
  const [currentpage,setcurrentpage]=useState(1);
   
   const itemPerPAge=5;
   const totalPages=Math.ceil(data.length/itemPerPAge);
   const indexOfLastItem=currentpage*itemPerPAge;
   const indexOfFirstItem=indexOfLastItem-itemPerPAge;
 

  const dataToshow=data.slice(indexOfFirstItem,indexOfLastItem)
  

  const hundelPageChange=(event)=>{
    setcurrentpage(event.selected+1)
   console.log(event.selected)
 }

  return (
    <>
    <Cards char={dataToshow} key={dataToshow.char_id}/>
    <ReactPaginate
            pageCount={totalPages}
            pageRangeDisplayed={3}
            marginPagesDisplayed={1}
            nextLabel={'next'}
            previousLabel={'prev'}
            onPageChange={hundelPageChange}
            containerClassName={Styles.pagination_wrapper}
            pageClassName={Styles.page}
            activeClassName={Styles.active}
            previousClassName={Styles.previous}
            nextClassName={Styles.next}
         />
      
    </>
  )
}

export default Charachters

Charachters.getInitialProps = async () => {
  const res = await fetch('https://www.breakingbadapi.com/api/characters')
  const data = await res.json()
  return { data }
} 