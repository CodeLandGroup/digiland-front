import React from 'react'
import Modal from '@mui/material/Modal';
import '../../assets/css/Header/LoginModal.css'
import { AiOutlineClose } from 'react-icons/ai'

export default function LoginModalComponent(props) {

    return (
        <Modal
            open={props.isActive}
            onClose={props.handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <div className='login-modal' >
                <div className='close-btn' onClick={props.handleClose}>
                    <AiOutlineClose />
                </div>
                <h3>
                    ورود و ثبت نام
                </h3>
                <div className='login-input'>
                    <label htmlFor="">لطفا برای ادامه شماره همراه خود را وارد کنید</label>
                    <input type="text" placeholder='شماره همراه' />
                    <button>ادامه</button>
                    <h3>ورود شما به معنای پذیرش
                        شرایط و قوانین دی جی لند
                        است</h3>
                </div>
            </div>

        </Modal>
    )
}
