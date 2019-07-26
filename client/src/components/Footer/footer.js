import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
// import "./style.css"

function FooterPage() {
    return (
        <div className="fixed-bottom">
            <MDBFooter color="blue" className="font-large pt-4 mt-4">
                <MDBContainer fluid className="text-center text-md-left">
                    <MDBRow>
                        <MDBCol md="12 center">
                            <h5 className="title">Stem Links 🌱</h5>
                            <li className="list-unstyled">
                                <a href="">Github Source</a>
                            </li>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <div className="footer-copyright text-center py-3">
                    <MDBContainer fluid>
                        &copy; {new Date().getFullYear()} Copyright: <a href="https://github.com/gabbistein/">Gabbi Stein</a>, <a href="https://github.com/connorleee/">Connor Lee</a>, <a href="https://github.com/brandonlublin/">Brandon Lublin</a>, <a href="https://github.com/vishaaldiwan/">Vishaal Diwan</a>
                    </MDBContainer>
                </div>
            </MDBFooter>
        </div>
    );
}

export default FooterPage;
