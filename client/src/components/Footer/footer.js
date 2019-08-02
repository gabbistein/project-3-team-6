import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

let style = {
    backgroundColor: "#fbbc05",
    textAlign: "center",
    paddingTop: 0,
    position: "fixed",
    left: 0,
    bottom: 0,
    height: 80,
    width: "100%",
    backgroundClip: "content-box",
    borderTopWidth: "7px",
    borderTopStyle: "solid",
    borderTopColor: "rgb(252, 202, 54, 0.6)"
}

let divStyle = {
    paddingTop: 15
}

let phantom = {
    display: "block",
    padding: 34,
    height: 60,
    bottom: 0,
    left: 0,
    width: "100%"
}

function FooterPage() {
    return (
        // <div className="">
        //     <MDBFooter color="blue" className="font-large pt-4 mt-4">
        //         <MDBContainer fluid className="text-center text-md-left">
        //             <MDBRow>    
        //                 <MDBCol md="12 center">
        //                     <h5 className="title">Stem Links <span role="img" aria-label="Logo">🌱</span></h5>
        //                     <li className="list-unstyled">
        //                         <a href="https://github.com/gabbistein/project-3-team-6">Github Source</a>
        //                     </li>
        //                 </MDBCol>
        //             </MDBRow>
        //         </MDBContainer>
        //         <div className="footer-copyright text-center py-3">
        //             <MDBContainer fluid>
        //                 &copy; {new Date().getFullYear()} Copyright: <a href="https://github.com/gabbistein/">Gabbi Stein</a>, <a href="https://github.com/connorleee/">Connor Lee</a>, <a href="https://github.com/brandonlublin/">Brandon Lublin</a>, <a href="https://github.com/vishaaldiwan/">Vishaal Diwan</a>
        //             </MDBContainer>
        //         </div>
        //     </MDBFooter>
        // </div>

        <div>
            <div style={phantom} />
            <div style={style}>
                <div style={divStyle}>
                    <a href="https://github.com/gabbistein/project-3-team-6" target="_blank">Stem Source <span role="img" aria-label="Logo">🌱</span></a>
                </div>
                <div> &copy; {new Date().getFullYear()} Copyright: 
                    <a href="https://github.com/gabbistein/" target="_blank">Gabbi Stein</a>, 
                    <a href="https://github.com/connorleee/" target="_blank">Connor Lee</a>, 
                    <a href="https://github.com/brandonlublin/" target="_blank">Brandon Lublin</a>, 
                    <a href="https://github.com/vishaaldiwan/" target="_blank">Vishaal Diwan</a>
                </div>
            </div>
        </div>
    );
}
export default FooterPage;