import React from 'react'
// import image1 from '../images/s_banner'
import image2 from '../images/s_text_image.svg'
import image3 from '../images/s_three_columns-01.svg'
import image4 from '../images/s_three_columns-02.svg'
import image5 from '../images/s_three_columns-03.svg'
import image6 from '../images/s_image_text.svg'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

export default function Home() {
    return (
        <div>
            <div className='container-fluid' style={{"backgroundImage":"../images/s_banner.svg"}}>
                <h1>Great education for great minds.</h1>
                <h3>Join the smartest educational institutions and revolutionize the way you teach and learn.</h3>
                <button>Get Started</button>
            </div>

            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-6'>
                        <h1>Maximize your learning potential</h1>
                        <h4>It's not easy to learn effectively without the right tools. Can you imagine a surgeon performing a surgery without the proper instruments?</h4>
                        <h4>Unlock your full potential with our platform.</h4>
                    </div>
                    <div className='col-6'>
                        <img src={image2} />
                    </div>
                </div>
            </div>



            <CardGroup>
                <Card>
                    <Card.Img variant="top" src={image3} />
                    <Card.Body>
                        <Card.Title>Built to fit your unique learning style.</Card.Title>
                        <Card.Text>
                            Our platform offers a range of options to fit your institution's unique needs. From customizable content to personalized learning paths, we have everything you need to succeed.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={image4} />
                    <Card.Body>
                        <Card.Title>Customizable to fit your needs</Card.Title>
                        <Card.Text>
                            Feel free to customize your learning experience without any technical knowledge. Our intuitive tools will guide you.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={image5} />
                    <Card.Body>
                        <Card.Title>All educational data in your hands.</Card.Title>
                        <Card.Text>
                            Get real-time insights and reports to track your progress and improve your learning outcomes. Our platform is designed to help you succeed.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>

            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-6'>
                        <img src={image6} />
                    </div>
                    <div className='col-6'>
                        <h1>Experience a new world of education</h1>
                        <h4>Learning from anywhere is great, but learning with personalized tools without distraction is even better. With our Edutech service, accessing educational resources has never been so easy.
                            Get the education you want, where and when you want it.</h4>
                    </div>
                </div>
            </div>

            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Text>
                        <h1>12</h1>
                        <h3>Interactive features</h3>
                    </Card.Text>
                </Card.Body>
            </Card>
            <br />

            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Text>
                        <h1>45</h1>
                        <h3>Engaging content</h3>
                    </Card.Text>
                </Card.Body>
            </Card>
            <br />

            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Text>
                        <h1>8</h1>
                        <h3>Innovative learning resources</h3>
                    </Card.Text>
                </Card.Body>
            </Card>
            <br />

            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Text>
                        <h1>37</h1>
                        <h3>High-quality visuals</h3>
                    </Card.Text>
                </Card.Body>
            </Card>

            <div className='container'>
                <div className='row'>
                    <div className='col-6'>
                        <h1>Transform the way you teach and learn with our powerful edutech tools.</h1>
                        <h3>Make your future a brighter place.</h3>
                    </div>
                    <div className='col-6'>
                        <button>Get In Touch</button>
                    </div>
                </div>
            </div>

        </div>
    )
}
