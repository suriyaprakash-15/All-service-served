import React from 'react';
import { Link } from 'react-router-dom';
import './Cards.css';
import Grocery from '../Grocery/Grocery';

export default function Cards() {
  return (
    //   <html>
    // <head>
    //     <title>cards creation</title>
    // </head>
    // <body>
        <div>
            <div className="rowone">
                <div className="card-container">
                    <div className="card">
                        <img src="/Images/grocery.jpg"/>
                        <div className="card-content">
                            <h3>grocery</h3>
                            <p>hello world</p>
                            <a href="/Grocery" className="btn">readme</a>
                            {/* <link to="/Grocery"  className="btn">readme</link>  */}
                        </div>
                    </div>
                    <div className="card">
                        <img className='medicalimg' src="/Images/medical-store.jpg"/>
                        <div className="card-content">
                            <h3>medical</h3>
                            <p>hello world</p>
                            <a href="" className="btn">readme</a>
                        </div>
                    </div>
                    <div className="card">
                        <img src="/Images/pipes.webp"/>
                        <div className="card-content">
                            <h3>HardWare</h3>
                            <p>hello world</p>
                            <a href="" className="btn">readme</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rowtwo">
                <div className="card-container">
                    <div className="card">
                        <img src="/Images/active-drive.jpg"/>
                        <div className="card-content">
                            <h3>Active-driver</h3>
                            <p>hello world</p>
                            <a href="" className="btn">readme</a>
                        </div>
                    </div>
                    <div className="card">
                        <img src="/Images/ac.jpg"/>
                        <div className="card-content">
                            <h3>Ac-mechanic</h3>
                            <p>hello world</p>
                            <a href="" className="btn">readme</a>
                        </div>
                    </div>
                    <div className="card">
                        <img src="/Images/Electricion.jpg"/>
                        <div className="card-content">
                            <h3>Electrcion</h3>
                            <p>hello world</p>
                            <a href="" className="btn">readme</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rowthree">
                <div className="card-container">
                    <div className="card">
                        <img src="/Images/Plumber.jpg"/>
                        <div className="card-content">
                            <h3>plumbing</h3>
                            <p>hello world</p>
                            <a href="" className="btn">readme</a>
                        </div>
                    </div>
                    <div className="card">
                        <img src="/Images/Carpenter.jpg"/>
                        <div className="card-content">
                            <h3>carpender</h3>
                            <p>hello world</p>
                            <a href="" className="btn">readme</a>
                        </div>
                    </div>
                    <div className="card">
                        <img src="/Images/Tv.jpg"/>
                        <div className="card-content">
                            <h3>tv-service</h3>
                            <p>hello world</p>
                            <a href="" className="btn">readme</a>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
//     </body>
// </html>
    
  )
}

