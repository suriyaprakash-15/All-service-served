import React from 'react'

export default function Grocery() {
  return (
    <div>
      <div className="rowone">
                <div className="card-container">
                    <div className="card">
                        <img src="/Images/grocery.jpg"/>
                        <div className="card-content">
                            <h3>grocery</h3>
                            <p>hello world</p>
                            <a href="" className="btn">readme</a>
                        </div>
                    </div>
                    <div className="card">
                        <img className='medicalimg' src="/Images/vegetables.jpg"/>
                        <div className="card-content">
                            <h3>vegitables</h3>
                            <p>hello world</p>
                            <a href="" className="btn">readme</a>
                        </div>
                    </div>
                    <div className="card">
                        <img src="/Images/Fruits.jpg"/>
                        <div className="card-content">
                            <h3>fruits</h3>
                            <p>hello world</p>
                            <a href="" className="btn">readme</a>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}