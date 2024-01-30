import React from "react";
import styled from "styled-components";
import threebars from "../../../images/NftDevelopment/threebars.png";

import tbanner from "../../../images/UIUXDesign/uiBanner.png";
import adobe from "../../../images/UIUXDesign/Adobe.png";
import figma from "../../../images/UIUXDesign/figma.png";
import flanto from "../../../images/UIUXDesign/flanto.png";
import sketch from "../../../images/UIUXDesign/sketch.png";
import inv from "../../../images/UIUXDesign/inv.png";
import zeplin from "../../../images/UIUXDesign/zeplin.png";
import { NavHashLink } from "react-router-hash-link";

import node from "../../../images/WebDevelopment/node.png";
import java from "../../../images/WebDevelopment/java.png";
import angular from "../../../images/WebDevelopment/angular.png";
import customWeb from "../../../images/WebDevelopment/customWeb.png";



import Wrapper from "./UIDesignBanner.styled";
function UIDesignBanner() {
  const BannerItem = styled.div`
    text-align: center;
  `;
  const BannerContent = styled.div``;
  const ButtonGroup = styled.div`
    margin-top: 20px;
  `;
  const LinkButton = styled.a`
    border: 1px solid #fc7e13;
    padding: 10px 20px;
    border-radius: 5px;
    margin-right: 30px;
    transition: 0.5s ease-in-out;
    // cursor: pointer;

    &:hover {
      background-color: #fc7e13;
      border: 1px solid #fc7e13;
      color: white;
    }
    @media (max-width: 575.98px) {
      padding: 10px 10px;

      margin-right: 10px;
    }
  `;

  const PolygonWrap = styled.div`
    position: absolute;
    top: 50%;
    transform: translate(0, -30%);
    @media (max-width: 575.98px) {
      transform: translate(0, 20%);
    }
  `;
  const PolygonImg = styled.img`
    width: 70%;
    @media (max-width: 1192px) {
      width: 54%;
    }
    @media (max-width: 992px) {
      width: 40%;
    }
    @media (max-width: 992px) {
      width: 28%;
    }
    @media (max-width: 575.98px) {
      width: 15%;
    }
  `;
  const Ellipse = styled.div``;
  const Circle = styled.img`
    width: 8%;
    position: absolute;
    top: 48%;
    transform: translate(0, -30%);
    left: auto;
    right: 0;
    @media (max-width: 1192px) {
      width: 15%;
    }
    @media (max-width: 575.98px) {
      transform: translate(0, -10%);
      top: 22%;
    }
  `;
  return (
    <Wrapper>
     
      <div className="container" id="ui_ux_design"> 

        <div className="row">
          <div className="col-md-8  col-sm-8 col-8 ">
            <h1 className="web_banner_heading">UI/UX Design</h1>
            <p className="web_banner_para ">
            UI UX design is the process of creating digital products, such as websites or mobile applications, with a focus on enhancing user experience and user interface design. Our UI UX design service involves understanding the needs of the user and designing interfaces that are intuitive, easy to use, and visually appealing. We work closely with our clients to create designs that not only meet their requirements but also exceed their expectations, resulting in digital products that are both functional and visually stunning.
            </p>
            <ButtonGroup className="web_banner_btn">
             <NavHashLink to="/#bookappointment"> <LinkButton   style={{ color: 'white', backgroundColor: '#fc7e13' }}>Book an Appoinment</LinkButton></NavHashLink>
            <NavHashLink to="/#bookappointment">  <LinkButton className="gr_button" >Let’s Talk</LinkButton></NavHashLink>
            </ButtonGroup>

          </div>
          <div className="col-md-4 col-sm-4 col-4">
           <div className="cube" style={{paddingRight:'40px'}}>
           <img
                    src={tbanner}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />
       
           </div>
            <Ellipse>

              <Circle
                src={threebars}
                className="img-fluid mt-2"
                loading="lazy"
                alt="">

              </Circle>

            </Ellipse>

          </div>
        </div>
        <hr className="banner_line mt-5" />
        <div className="flex-container mt-5">
          <div className="slider-container">
            <ul className="slider">
              <li className="slider__slide">
                <div className="slider__content">
                  <img
                    src={zeplin}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />
                  {/* <span className="slider_span_para"> Custom Web Development</span> */}
                </div>
              </li>
              <li className="slider__slide">
                <div className="slider__content">
                  <img
                    src={inv}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />
                  {/* <span className="slider_span_para">Angular JS Development</span> */}
                </div>
              </li>
              <li className="slider__slide">
                <div className="slider__content">
                  <img
                    src={sketch}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />
                  {/* <span className="slider_span_para">Node JS Development</span> */}
                </div>
              </li>
              <li className="slider__slide">
                <div className="slider__content">
                  <img
                    src={flanto}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />
                  {/* <span className="slider_span_para"> Java Web Development</span> */}
                </div>
              </li>
              <li className="slider__slide">
                <div className="slider__content">
                  <img
                    src={figma}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />
                  {/* <span className="slider_span_para"> Custom Web Development</span> */}
                </div>
              </li>
              <li className="slider__slide">
                <div className="slider__content">
                  <img
                    src={adobe}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />
                  {/* <span className="slider_span_para"> Custom Web Development</span> */}
                </div>
              </li>
              <li className="slider__slide">
                <div className="slider__content">
                  <img
                    src={zeplin}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />
                  {/* <span className="slider_span_para"> Custom Web Development</span> */}
                </div>
              </li>
              <li className="slider__slide">
                <div className="slider__content">
                  <img
                    src={inv}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />
                  {/* <span className="slider_span_para">Angular JS Development</span> */}
                </div>
              </li>
              <li className="slider__slide">
                <div className="slider__content">
                  <img
                    src={sketch}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />
                  {/* <span className="slider_span_para">Node JS Development</span> */}
                </div>
              </li>
              <li className="slider__slide">
                <div className="slider__content">
                  <img
                    src={flanto}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />
                  {/* <span className="slider_span_para"> Java Web Development</span> */}
                </div>
              </li>
              <li className="slider__slide">
                <div className="slider__content">
                  <img
                    src={figma}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />
                  {/* <span className="slider_span_para"> Custom Web Development</span> */}
                </div>
              </li>
              <li className="slider__slide">
                <div className="slider__content">
                  <img
                    src={adobe}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />
                  {/* <span className="slider_span_para"> Custom Web Development</span> */}
                </div>
              </li>
      
              
             
            </ul>
          </div>
        </div>
      
        

      </div>


    
    </Wrapper>
  );
}

export default UIDesignBanner;
