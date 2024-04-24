import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-4 pb-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-3"> 
            <h5>Yoav's Company</h5>
            <p>This website is to be used by the employees only. You can follow the different projects, clients, employees, departments and expenses of this company.</p>
          </div>
          <div className="col-md-6 mb-3 ">
            <h5>Contact the Superiors</h5>
            <ul className="list-unstyled">
              <li>Phone: +44 7 425 409 576</li>
              <li>Email: <a href="mailto:w2002883@westminster.ac.uk">w2002883@westminster.ac.uk</a></li> 
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
