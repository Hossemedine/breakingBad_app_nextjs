import React, { useState } from "react";
import Image from "next/dist/client/image";
import ReactPaginate from "react-paginate";
import Styles from '../styles/pagination.module.css'


const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,15,16,17,18,19,20,21,22,23,24,25,26,27,38,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99];
const Pagination = () => {
  
   const [currentpage,setcurrentpage]=useState(1);
   
   const itemPerPAge=5;
   const totalPages=Math.ceil(items.length/itemPerPAge);
   const indexOfLastItem=currentpage*itemPerPAge;
   const indexOfFirstItem=indexOfLastItem-itemPerPAge;
   
   const currentItem= items.slice(indexOfFirstItem,indexOfLastItem);
   const ItemToshow=currentItem.map((item)=><div className={Styles.item}>{item}</div>);

      const hundelPageChange=(event)=>{
         setcurrentpage(event.selected)
        
      }
   console.log(ItemToshow)

    return (
       <>
       <div className={Styles.itemwrapper}>
                  {ItemToshow} 
       </div>
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
    );
}
export default Pagination;