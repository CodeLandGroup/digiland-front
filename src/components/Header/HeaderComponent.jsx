import React, { useEffect , useState} from 'react'
import '../../assets/css/Header/Header.css'
import NavbarComponent from './NavbarComponent'

export default function HeaderComponent() {
    const [navbarDisplay,  setNavbarDisplay] = useState("60px")
    useEffect(()=>{
        function handleScroll (){
           const scrollPosition =  window.pageYOffset
           if(scrollPosition >= 150){
            setNavbarDisplay("0px")
           }else if(scrollPosition < 100){
            setNavbarDisplay("60px")
           }
          
           
        }
        window.addEventListener("scroll", handleScroll);

      return ()=> {
        window.removeEventListener("scroll" , handleScroll)
      }
    },[])
    return (
        <div className='header' >
            <div className='header-top'>
                <img src={require('../../assets/images/header-image.jpeg')} alt="" className='transition w-100'  style={{ height: navbarDisplay }}/>
            </div>
      
            <NavbarComponent />

        </div>


    )
}
