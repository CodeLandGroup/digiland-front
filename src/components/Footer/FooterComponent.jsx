import React from 'react'
import '../../assets/css/Footer/footer.css'
export default function FooterComponent() {
    return (

        <div className='footer position-relative'>
            <div className='container mt-20'>
                <div className='footer-logo'>
                    <img src={require('../../assets/images/dgland.svg').default} alt="" />
                </div>
                <div className='item-list d-flex mt-20'>
                    <div className='footer-item'>
                        <p className='mb-10 text-gray-2 title'>ما را دنبال کنید</p>
                        <a href="">
                            <p className='mt-10 text-gray'>تماس با ما</p>
                        </a>
                        <a href="">
                            <p className='mt-10 text-gray'>تماس با ما</p>
                        </a>
                        <a href="">
                            <p className='mt-10 text-gray'>تماس با ما</p>
                        </a>
                    </div>
                    <div className='footer-item'>
                        <p className='mb-10 text-gray-2 title'>درباره دیجی لند</p>
                        <a href="">
                            <p className='mt-10 text-gray'>تماس با ما</p>
                        </a>
                        <a href="">
                            <p className='mt-10 text-gray'>تماس با ما</p>
                        </a>
                        <a href="">
                            <p className='mt-10 text-gray'>تماس با ما</p>
                        </a>
                        <a href="">
                            <p className='mt-10 text-gray'>تماس با ما</p>
                        </a>
                    </div>
                    <div className='footer-item'>
                        <p className='mb-10 text-gray-2 title'>خدمات مشتریان</p>
                        <a href="">
                            <p className='mt-10 text-gray'>تماس با ما</p>
                        </a>
                        <a href="">
                            <p className='mt-10 text-gray'>تماس با ما</p>
                        </a>
                        <a href="">
                            <p className='mt-10 text-gray'>تماس با ما</p>
                        </a>
                    </div>
                    <div className='footer-item'>
                        <p className='mb-10 text-gray-2 title'>دسته‌بندی‌های پربازدید</p>
                        <a href="">
                            <p className='mt-10 text-gray'>تماس با ما</p>
                        </a>
                        <a href="">
                            <p className='mt-10 text-gray'>تماس با ما</p>
                        </a>
                    </div>
                    <div className='footer-item'>
                        <p className='mb-10 text-gray-2 title'>ساعت پاسخگویی</p>
                        <a href="">
                            <p className='mt-10 text-gray'>تماس با ما</p>
                        </a>
                        <a href="">
                            <p className='mt-10 text-gray'>تماس با ما</p>
                        </a>
                        <a href="">
                            <p className='mt-10 text-gray'>تماس با ما</p>
                        </a>
                    </div>
                </div>
                <div className='footer-description mt-20'>
                    <div className='footer-title mb-20'>
                        فروشگاه اینترنتی<span className='text-red-primary'> دی‌جی‌لند </span>
                    </div>
                    <div className='description' style={{ lineHeight: "22px" }}>
                        فروشگاه اینترنتی دی‌جی‌لند به طور رسمی در فروردین ماه ۹۹ با توجه به رشد روزافزون خدمات اینترنتی و دنیای تکنولوژی در جهان امروز و نیاز به کالاهای دیجیتال تاسیس شد. هدف این فروشگاه اینترنتی خدمت‌رسانی و تامین جدیدترین مدل‌ها از معتبرترین برند‌های کالای دیجیتال ، لوازم خانگی و سرگرمی است.
                    </div>
                </div>
                <div className='footer-copyright mt-20 p-20 w-100 text-center text-gray-2'>
                    <div className='line position-absolute w-100'></div>
                    © کلیه حقوق این وب سایت متعلق به کدلند است.
                </div>
            </div>
        </div>
    )
}
