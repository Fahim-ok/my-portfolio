import React from "react";
import "./Introduction.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ThemeContext } from "../../Context/theme";
import profilePic from "../../assets/Photo_fw14_056.jpg";


export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer">
              <img src={profilePic} alt="Images" style={{ width: "200px", height: "200px" }} />
            </div>
            <div className="introduction_datacontainer">
              <h4>
                Hi Everyone, My name is{" "}
                <span className="different">Md.Fahim-Ul-Islam </span>{" "}
                <span className="different">
                  {" "}
                  {/* Ahmednagar, Maharashtra (India) */}
                </span>
                . I have completed my graduation in BSc(Computer Science & Engineering)
                from{" "}
                <span className="different">
                 BRAC University.
                </span>
                {" "}
                <span className="different"></span> 
                
              </h4>
              <h4>My Current Plannings</h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Learning new frameworks & technologies{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Working on some assigned research projects{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Preparing for certifications exam{" "}
              </h4>
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
