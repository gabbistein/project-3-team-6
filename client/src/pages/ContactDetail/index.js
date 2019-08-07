import React, { Component } from "react";
import "./style.css";

class ContactDetail extends Component {
    render(){
        return(
            <div className="ContactDetail container">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-2">
                            <img src="https://via.placeholder.com/128" alt="Profile"/>
                        </div>
                        <div className="col-md-10">
                            <h1 className="text-left">Vish Diwan</h1>
                        </div>
                    </div>
                    <div className="row">
                        <button className="btn navButton" type="button">Twitter</button>
                        <button className="btn navButton" type="button">Tumblr</button>
                        <button className="btn navButton" type="button">Personal</button>
                        <button className="btn navButton" type="button">Socials</button>
                    </div>
                    <hr/>
                    <div className="container scroller">
                        <div className="card">
                            <img className="card-img-top"src="https://via.placeholder.com/300" alt="First Post"/>
                            <div className="card-body">
                                <h5>@vishdiwan</h5>
                                <p>Vish is the best</p>
                            </div>
                        </div>
                        <div className="card">
                            <img className="card-img-top"src="https://via.placeholder.com/300" alt="First Post"/>
                            <div className="card-body">
                                <h5>@vishdiwan</h5>
                                <p>Chris is coooooooool</p>
                            </div>
                        </div>
                        <button className="btn" type="button"><p>+</p></button>
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-md-7">
                        <h5>Email: </h5>
                        <p>vishdiwan@gmail.com</p>
                        <h5>Phone Number: </h5>
                        <p>253-334-5715</p>
                        <h5>Birthdate: </h5>
                        <p>11/29/91</p>
                    </div>
                    <div className="col-md-5">
                        <h5>Notes:</h5>
                        <p>Cool guy</p>
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-md-6">
                        <button className="btn"type="button">F</button>
                        <button className="btn"type="button">I</button>
                        <button className="btn"type="button">Tw</button>
                    </div>
                    <div className="col md-6">
                        <button className="btn"type="button">L</button>
                        <button className="btn"type="button">Tum</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default ContactDetail;