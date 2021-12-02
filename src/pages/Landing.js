import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../assets/styles/main.css';

export const Landing = () => {
    return (
        <>
        <main className="parallax">
            <section className="section parallax bg1">
				<div className="content">
					<h1 className="title">karen key</h1>
					<p className="ls">software developer / designer / aspiring artist</p>
				</div>
			</section>
        	<section className="section parallax static">                
            <div class="container">
				<div className="content_box">	
                    <h2 className="heading">expertise</h2>							
                        <Container>
                            <Row>
                                <Col>frontend web development</Col>   
                                <Col className="progress">-------</Col>    
                            </Row>
                            <Row>
                                <Col>web design</Col>
                                <Col className="progress">--------</Col>                                 
                            </Row>
                            <Row>
                                <Col>graphic design</Col>
                                <Col className="progress">---------</Col>  
                            </Row>
                            <Row>
                                <Col>layout design</Col>
                                <Col className="progress">---------</Col>  
                            </Row>
                            <Row>
                                <Col>music production</Col>
                                <Col className="progress">------</Col>  
                            </Row>
                        </Container>                          
					</div>
				</div>
            </section>
            <section className="section parallax static">
                <div class="container">
                    <div className="content_box">	
                        <h2 className="heading">works</h2>
                        <div class="box-1">
							<div className="testimonial-container">
								<div className="testimonial-1">
									<h3>joint projects</h3>
									<p class="description text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    <button class="btn btn-more" type="button">show more</button>
								</div>
								<div className="testimonial-2">
									<h3>personal</h3>
									<p class="description text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>                         
						            <button class="btn btn-more" type="button">view gallery</button>
								</div>
							</div>
						</div>
                    </div>
                </div>
            </section>
        </main>
        </>
    )
}

