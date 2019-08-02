import React from "react";
import { relative } from "path";

let style = {
    backgroundColor: "#fbbc05",
    textAlign: "center",
    width: "100%",
    backgroundClip: "content-box",
    borderTopWidth: "7px",
    borderTopStyle: "solid",
    borderTopColor: "rgb(252, 202, 54, 0.6)",
    position: relative
}

let divStyle = {
    paddingTop: 15,
}

let bottomDiv = {
    paddingBottom: 15
}

function FooterPage() {
    return (
        <div>
            <div style={style}>
                <div style={divStyle}>
                    <a href="https://github.com/gabbistein/project-3-team-6" target="_blank">Stem Source <span role="img" aria-label="Logo">🌱</span></a>
                </div>
                <div style={bottomDiv}> &copy; {new Date().getFullYear()} Copyright: 
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