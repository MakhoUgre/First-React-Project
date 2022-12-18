import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './Styles/Contacts.css'


function Contacts() {
    return(
       <Container>
        <Row className="mb-5 mt-3" >
            <Col lg='8' >
                <h1 className="display-4 mb-4 TT ">
                    Contct Me
                </h1>
            </Col>
        </Row>

        <Row className="sec_sp">
            <Col lg='5' className="mb-5" >
                <h3 className="color_sec py-4 TT"> Get in touch</h3>
                <address className="TT">
                    <strong>Email: makhougre@gmail.com</strong>
                    <br />
                    <br />
                    <p>
                        <strong>Phone: +995 599 135 510</strong>
                    </p>
                </address>
                <p className="TT">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </Col>
            <Col lg='7' className="d-flex align-items-center" >
                <form className="contact_form w-100">
                    <Row>
                     <Col lg='6' className="form-group">
                        <input 
                        className="form-control"
                        id= 'name'
                        name="name"
                        placeholder="Name"
                        type="text"
                        /> 
                     </Col> 
                     <br />
                     <br />
                     <Col lg='6' className="form-group">
                        <input 
                        className="form-control rounded-0"
                        id="email"
                        name="email"
                        placeholder="Email"
                        type="email"
                        /> 
                     </Col>  
                    </Row>
                    <textarea 
                                className="form-control rounded-0" id="message" 
                                name="message"
                                placeholder="Message"
                                rows="5"
                    ></textarea>
                    <br />
                    <Row>
                        <Col lg='12' className="form-group">
                          <button className="btn  ac_btn" type="submit">Send</button>
                        </Col>
                    </Row>
                </form>
            </Col>
        </Row>
    </Container>

    );
}

export default Contacts ;