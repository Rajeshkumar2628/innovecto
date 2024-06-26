import React from 'react'
import image2 from '../images/s_text_image.svg'
import image6 from '../images/s_image_text.svg'
import './navbar.css'
export default function About() {
    return (
        <div class="about">
        <div class="header"><h1>About us</h1></div>
            <div class="container_2">
                <div class="info_1">
                    <h1>Maximize your learning potential</h1>
                    <h4>It's not easy to learn effectively without the right tools. Can you imagine a surgeon performing a surgery without the proper instruments?</h4>
                    <h4>Unlock your full potential with our platform.</h4>
                    <button>Discover more</button>
                </div>
                <div class="image_1"></div>
            </div>

            <div class="container_3">
                <div class="image_2"></div>
                <div class="info_2">
                    <h1>Experience a new world of education</h1>
                    <h4>Learning from anywhere is great, but learning with personalized tools without distraction is even better. With our Edutech service, accessing educational resources has never been so easy.
                    <br/><div><br/></div>Get the education you want, where and when you want it.</h4>
                    <button>Learn more about our platform</button>
                </div>
            </div>

            <div class="transform">
                <h1>Transform the way you learn</h1>
            </div>

            <div class='credit'>
                    <div class="credit_1">
                    <img src="Screenshot 2024-05-22 185015.png"/>
                    <div class='CEO'>
                        <h1>Rajesh Kumar, CEO</h1>
                        <h3>Our founder and chief visionary, Rajesh, is passionate about transforming education. He is involved in every aspect of the platform's development, from content creation to marketing strategies.</h3>
                    </div>
                    </div>
                    <div class="credit_2">
                    <img src="Screenshot 2024-05-22 185015.png"/>
                    <div class='COO'>
                        <h1>Bala Murugan, COO</h1>
                        <h3>As our Head of Education, Bala brings years of experience in the education industry. He has played a crucial role in the development of our platform and is committed to providing the best learning experience for students.</h3>
                    </div>
                    </div>
                </div>
            </div>
    )
}
