import React from "react";
import "./Techstacks.css";
import { FaReact, FaNodeJs, FaAws } from "react-icons/fa";
import {
  SiRedux,
  SiHtml5,
  SiMaterialui,
  SiExpress,
  SiRedis,
  SiTailwindcss,
  SiNetlify,
  SiJavascript
} from "react-icons/si";
import { DiCss3, DiMongodb } from "react-icons/di";
import { SiJava, SiHeroku,SiPython,SiDart,SiFlutter,SiTensorflow ,SiPytorch,SiLatex,SiMicrosoftpowerpoint,SiMicrosoftexcel,SiCanva} from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { BsBootstrap, BsWordpress } from "react-icons/bs";

export const Techstacks = () => {
  return (
    <>
      <div className="section main" data-aos="fade-right">
        <h2 className="section__title different">Skills</h2>
        <div className="techsection">
          <div>
            <SiJava />
            <h5>Java</h5>
          </div>
          <div>
            <SiJavascript />
            <h5>Javascript</h5>
          </div>
          <div>
            <SiPython />
            <h5>Python</h5>
          </div>
          <div>
            <SiDart />
            <h5>Dart</h5>
          </div>
          <div>
            <FaNodeJs />
            <h5>Nodejs</h5>
          </div>
          <div>
            <DiMongodb />
            <h5>MongoDb</h5>
          </div>

          <div>
            <SiExpress />
            <h5>Express</h5>
          </div>

          <div>
            <FaAws />
            <h5>AWS</h5>
          </div>
          <div>
            <BsBootstrap />
            <h5>Bootstrap</h5>
          </div>
          <div>
            <BsWordpress />
            <h5>Wordpress</h5>
          </div>
          
          <div>
            <VscGithub />
            <h5>Github</h5>
          </div>
          <div>
            <SiFlutter />
            <h5>Flutter</h5>

          </div>
          <div>
            <SiTensorflow />
            <h5>Tensorflow</h5>
          </div>
          <div>
            <SiPytorch />
            <h5>Pytorch</h5>
          </div>
          <div>
            <SiLatex />
            <h5>Latex</h5>
          </div>
          <div>
            <SiMicrosoftpowerpoint />
            <h5>MS Powerpoint</h5>
          </div>
          <div>
            <SiMicrosoftexcel/>
            <h5>MS Excel</h5>
          </div>
          <div>
            <SiCanva />
            <h5>Canva</h5>
          </div>
        </div>
        <div>
            <br></br>
          </div>
      </div>
    </>
  );
};
