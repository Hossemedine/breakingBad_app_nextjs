import { useState } from "react";



const NavBar = () => {

     const [datavisible, setdatavisible] = useState("false");
     const [ariaexpanded,setariaexpanded]=useState("false")
    

    function hundel(){
            
            if(datavisible=="false"){
                setdatavisible("true")
                setariaexpanded("true")
            }else{
                setdatavisible("false")
                setariaexpanded("false")
        }

            

    
        
    }



   
   
    


    return (  
        <div className="header flex">
            <div className="logo">
                <p className="logo--text">Breaking<span>Bad</span></p>
            </div>

            <button className="mobile-nav-toggle" aria-controls="primary-navigation" aria-expanded={ariaexpanded}
            onClick={(e)=>hundel(e.id)}><span className="sr-only">Menu</span></button>
            
            <nav >
                <ul id="primary-navigation" className="primary-navigation flex " data-visible={datavisible}>
                    <li className="active">
                      <a>Home</a>
                    </li>
                    <li>
                      <a>Characters</a>
                    </li>
                    <li>
                      <a>Episodes</a>
                    </li>
                    <li>
                      <a>Quotes</a>
                    </li>
                </ul>

            </nav>

        </div>
    );
}
 
export default NavBar;