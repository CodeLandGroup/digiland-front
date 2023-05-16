import React, { useEffect , useState} from 'react'
import '../../assets/css/Header/Header.css'
import NavbarComponent from './NavbarComponent'

export default function HeaderComponent() {
    const [navbarHeight,  setNavbarHeight] = useState("60px")
    useEffect(()=>{
        function handleScroll (){
           const scrollPosition =  window.pageYOffset
           if(scrollPosition >= 150){
            setNavbarHeight("0px")
           }else if(scrollPosition < 100){
            setNavbarHeight("60px")
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
                <img src={require('../../assets/images/header-image.jpeg')} alt="" className='transition w-100'  style={{ height: navbarHeight }}/>
            </div>
      
            <NavbarComponent />

        </div>


    )
}
