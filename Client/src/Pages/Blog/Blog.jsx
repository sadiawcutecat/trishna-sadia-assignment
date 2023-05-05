import React from 'react';

import { Accordion, Button } from "react-bootstrap";
import NavSection from "../Shared/NavSection";
import Footer from "../Shared/Footer/Footer";
import { FaDownload } from "react-icons/fa";
import ReactToPdf from 'react-to-pdf';

const Blog = () => {
  const ref = React.createRef();

  // console.log(import.meta.env.VITE_PASS);
  return (
    <div>
      <NavSection></NavSection>
      <div className="d-flex justify-content-center my-3">

        <ReactToPdf targetRef={ref} filename="Blog.pdf">
          {({ toPdf }) => (
            <Button variant="success" onClick={toPdf}><FaDownload /> Download</Button>
            
          )}
        </ReactToPdf>
        {/* <div style={{ width: 500, height: 500, background: 'blue' }} ref={ref} /> */}
  
      </div>

      <div ref={ref}>
        <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header className="fw-bold text-success">1. Tell us the differences between uncontrolled and controlled components.</Accordion.Header>
          <Accordion.Body className="text-bg-danger bg-opacity-10 text-black">
            <p>In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally. They use a ref to access the DOM elements current value and update the state accordingly.</p>

          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>2. How to validate React props using PropTypes</Accordion.Header>
          <Accordion.Body className="text-bg-danger bg-opacity-10 text-black">
            <p>The PropTypes utility exports a wide range of validators for configuring type definitions. Below, we’ll list the available validators for basic, renderable, instance, multiple, collection, and required prop types.</p>
            <h4>Below are the validators for the basic data types:</h4>
            <ul>
              <li>PropTypes.any: The prop can be of any data type</li>
              <li>PropTypes.bool: The prop should be a Boolean</li>
              <li>PropTypes.number: The prop should be a number</li>
              <li>PropTypes.string: The prop should be a string</li>
              <li>PropTypes.func: The prop should be a function</li>
              <li>PropTypes.array: The prop should be an array</li>
              <li>PropTypes.object: The prop should be an object</li>
              <li>PropTypes.symbol: The prop should be a symbol</li>
            </ul>

          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>3. Tell us the difference between nodejs and express js.</Accordion.Header>
          <Accordion.Body className="text-bg-danger bg-opacity-10 text-black">
            <p><span className="fw-bold text-success">Node Js:</span>NodeJS is open-source, cross-platform JavaScript code that runs on servers. It uses an asynchronous event-driven model and is designed to build scalable network applications. It’s built on Google Chrome’s V8 engine, which makes it fast and efficient to develop apps.</p>
            <p><span className="fw-bold text-success">Express Js:</span>ExpressJS is a web application framework for NodeJS. That’s what mainly makes the difference between Express JS and Node JS. The former provides various features that make web application development fast and easy, which otherwise takes more time using only the latter. It provides a robust set of features for web and mobile applications.</p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>4. What is a custom hook, and why will you create a custom hook?</Accordion.Header>
          <Accordion.Body className="text-bg-danger bg-opacity-10 text-black">
            <p>Custom Hook is a JavaScript function which we create by ourselves, when we want to share logic between other JavaScript functions. It allows you to reuse some piece of code in several parts of your app.</p>
            <p>Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code</p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
        </div>
    
     

      <Footer></Footer>
    </div>
  );
};

export default Blog;