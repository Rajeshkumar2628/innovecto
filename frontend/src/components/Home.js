import React from 'react'
import './home.css'
import first_img from '../images/first_img.png'
import image2 from '../images/s_text_image.svg'
import image3 from '../images/s_three_columns-01.svg'
import image4 from '../images/s_three_columns-02.svg'
import image5 from '../images/s_three_columns-03.svg'
import image6 from '../images/s_image_text.svg'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

export default function Home() {
    return (
        <div class="body">
            <div class="container_1">
                <div class="button_1">
                    <h1>Great education for great minds.</h1>
                    <h3>Join the smartest educational institutions and revolutionize the way you teach and learn.</h3>
                    <button>Get Started     <i class="fa-solid fa-arrow-right"></i></button>
                </div>
                <div class="slice"></div>
            </div>

            <div class="container_2">
                <div class="info_1">
                    <h1>Maximize your learning potential</h1>
                    <h4>It's not easy to learn effectively without the right tools. Can you imagine a surgeon performing a surgery without the proper instruments?</h4>
                    <h4>Unlock your full potential with our platform.</h4>
                    <button>Discover more</button>
                </div>
                <div class="image_1"></div>
            </div>



            <CardGroup class="cardgroup_1">
                <Card class="card_1">
                    <img src={first_img} />
                    <Card.Body class="body">
                        <h1>Built to fit your unique learning style.</h1>
                        <p>Our platform offers a range of options to fit your institution's unique needs. From customizable content to personalized learning paths, we have everything you need to succeed.</p>
                    </Card.Body>
                </Card>
                <Card class="card_2">
                    <img src={image4} />
                    <Card.Body class="body">
                        <h1>Customizable to fit your needs.</h1>
                        <p>
                            Feel free to customize your learning experience without any technical knowledge. Our intuitive tools will guide you.
                        </p>
                    </Card.Body>
                </Card>
                <Card class="card_3">
                    <img src={image5} />
                    <Card.Body class="body">
                        <h1>All educational data in your hands.</h1>
                        <p>
                            Get real-time insights and reports to track your progress and improve your learning outcomes. Our platform is designed to help you succeed.
                        </p>
                    </Card.Body>
                </Card>
            </CardGroup>

            <div class="container_3">
                <div class="image_2"></div>
                <div class="info_2">
                    <h1>Experience a new world of education</h1>
                    <h4>Learning from anywhere is great, but learning with personalized tools without distraction is even better. With our Edutech service, accessing educational resources has never been so easy.
                    <br/><br/>Get the education you want, where and when you want it.</h4>
            <button>Learn more about our platform</button>
        </div>
    </div >

    <CardGroup class="cardgroup_2">
    <Card >
        <Card.Body> 
            <Card.Text>
                <h1>12</h1>
                <h3>Interactive features</h3>
            </Card.Text>
        </Card.Body>
    </Card>
    <br />

    <Card >
        <Card.Body>
            <Card.Text>
                <h1>45</h1>
                <h3>Engaging content</h3>
            </Card.Text>
        </Card.Body>
    </Card>
    <br />

    <Card >
        <Card.Body>
            <Card.Text>
                <h1>8</h1>
                <h3>Innovative learning resources</h3>
            </Card.Text>
        </Card.Body>
    </Card>
    <br />

    <Card >
        <Card.Body>
            <Card.Text>
                <h1>37</h1>
                <h3>High-quality visuals</h3>
            </Card.Text>
        </Card.Body>
    </Card>
    </CardGroup>

    <div class='container_4'>
            <div class='info_3'>
                <h1>Transform the way you teach and learn with our powerful edutech tools.</h1>
                <h3>Make your future a brighter place.</h3>
            </div>
            <div class='button_2'>
                <button>Get In Touch</button>
            </div>
    </div>

</div >
    )
}
