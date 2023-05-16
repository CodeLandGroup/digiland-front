import React, { useEffect , useState} from 'react'
import '../../assets/css/Header/Header.css'
import NavbarComponent from './NavbarComponent'

export default function HeaderComponent() {
    const [navbarDisplay,  setNavbarDisplay] = useState("block")
    useEffect(()=>{
        function handleScroll (){
           const scrollPosition =  window.pageYOffset
           if(scrollPosition >= 150){
            setNavbarDisplay("none")
           }else if(scrollPosition < 100){
            setNavbarDisplay("block")
           }
          
           
        }
        window.addEventListener("scroll", handleScroll);

      return ()=> {
        window.removeEventListener("scroll" , handleScroll)
      }
    },[])
    return (
        <div className='header' >
            <div className='header-top' style={{ display: navbarDisplay }}>
                <img src={require('../../assets/images/header-image.jpeg')} alt="" />
            </div>
      
            <NavbarComponent />

        </div>


    )
}
