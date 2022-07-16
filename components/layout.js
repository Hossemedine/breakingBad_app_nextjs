import NavBar from './NavBar';
import Footer from './Footer'

const  Layout= ({children}) => {
    return ( 

        <>
        
        <div className='layout'>
        <NavBar/>
        <div className='layout--content'>
        {children}
        </div>
        <Footer/>
        </div>
        
        </>
     );
}
 
export default Layout ;