import React, { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { FaRegNewspaper } from 'react-icons/fa'
import { TbDiscount2 } from 'react-icons/tb'
import { HiOutlineLogin, HiOutlineLocationMarker } from 'react-icons/hi'
import { BsSearch } from 'react-icons/bs'
import { SlBasket } from 'react-icons/sl'
import CartComponent from './CartComponent'
import CategoriesComponent from './CategoriesComponent'
import LoginModalComponent from './LoginModalComponent'
import { createSearchParams, Link, useNavigate } from 'react-router-dom'

export default function NavbarComponent() {
    const [showCart, setShowCart] = useState(false)
    const [showCategorie, setShowCategorie] = useState(false)
    const [openModal, setOpenModal] = useState(false);
    const handleOpen = () => setOpenModal(true);
    const handleClose = () => setOpenModal(false);
    const navigate = useNavigate()

    const isHomePage = window.location.pathname === '/';
    function scrollToPosition(x, y) {
        if (isHomePage) {
            window.scrollTo({
                left: x,
                top: y,
                behavior: 'smooth'
            });
        }
    }

    function serchChange(obj) {

        navigate({
            pathname: 'categories',
            search: createSearchParams({
                search: obj.target.value
            }).toString()
        });
    }

    return (
        <>
            <div className='navbar container position-relative'>
                <div className='navbar-right'>
                    <ul className='navbar-list'>
                        <li>
                            <Link to='/'>
                                <img src={require('../../assets/images/dgland.svg').default} alt="" />
                            </Link>

                        </li>
                        <li className='navbar-item' onMouseEnter={() => setShowCategorie(true)} onMouseLeave={() => setShowCategorie(false)}>
                            <i><AiOutlineMenu /></i>
                            <h3>دسته بندی کالا ها
                            </h3>
                            <CategoriesComponent isActive={showCategorie} />
                        </li>
                        <li className='navbar-item' onClick={() => scrollToPosition(0, 2400)}>
                            <i><FaRegNewspaper /></i>
                            <h3 >مجله دیجی لند</h3>

                        </li>
                        <li className='navbar-item' onClick={() => scrollToPosition(0, 800)}>
                            <i><TbDiscount2 /></i>
                            <h3 >پیشنهاد طلایی</h3>
                        </li>
                    </ul>
                </div>
                <div className='navbar-left'>
                    <div className='navbar-search'>
                        <input type="text" placeholder='جستجو...' onChange={(e) => serchChange(e)} />
                        <span className='search-icon'>
                            <BsSearch />
                        </span>
                    </div>
                    <div className='navbar-login' onClick={handleOpen}>
                        <i><HiOutlineLogin /></i>
                        <h3>وارد شوید</h3>
                    </div>
                    <div className='navbar-icons'>
                        <i><HiOutlineLocationMarker /></i>
                        <i onMouseEnter={() => setShowCart(true)} onMouseLeave={() => setShowCart(false)}><SlBasket />
                            <CartComponent isActive={showCart} />
                        </i>

                    </div>
                </div>
                <LoginModalComponent isActive={openModal} handleClose={handleClose} />
            </div>

        </>
    )
}
