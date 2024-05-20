import React from 'react'
import image2 from '../images/s_text_image.svg'
import image6 from '../images/s_image_text.svg'
export default function About() {
    return (
        <div>
            <h1>About us</h1>
            <div className='container'>
                <div className='row'>
                    <div className='col-6'>
                        <h1>Maximize your learning potential</h1>
                        <h4>It's not easy to learn effectively without the right tools. Can you imagine a surgeon performing a surgery without the proper instruments?</h4>
                        <h4>Unlock your full potential with our platform.</h4>
                        <button>Discover more</button>
                    </div>
                    <div className='col-6'>
                        <img src={image2} />
                    </div>
                </div>

                <div className='container'>
                    <div className='row'>
                        <div className='col-6'>
                            <img src={image6} />
                        </div>
                        <div className='col-6'>
                            <h1>Experience a new world of education</h1>
                            <h4>Learning from anywhere is great, but learning with personalized tools without distraction is even better. With our Edutech service, accessing educational resources has never been so easy.</h4>
                            <h4>Get the education you want, where and when you want it.</h4>
                        </div>
                    </div>
                </div>

                <div className='container-fluid' style={{ "backgroundColor": "#38383B" }}>
                    <h1>Transform the way you learn</h1>
                </div>

                <div className='container'>
                    <div className='row'>
                        <div className='col-2'>
                            <img src='' />
                        </div>
                        <div className='col-4'>
                            <h1>Rajesh Kumar, CEO</h1>
                            <h3>Our founder and chief visionary, Rajesh, is passionate about transforming education. She is involved in every aspect of the platform's development, from content creation to marketing strategies.</h3>
                        </div>
                        <div className='col-2'>
                            <img src='' />
                        </div>
                        <div className='col-4'>
                            <h1>Bala Murugan, COO</h1>
                            <h3>As our Head of Education, Bala brings years of experience in the education industry. He has played a crucial role in the development of our platform and is committed to providing the best learning experience for students.</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
