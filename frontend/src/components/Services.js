import React from 'react'
import image3 from '../images/s_three_columns-01.svg'
import image4 from '../images/s_three_columns-02.svg'
import image5 from '../images/s_three_columns-03.svg'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
export default function Services() {
  return (
    <div><h1>Services</h1>
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
    </div>
  )
}
