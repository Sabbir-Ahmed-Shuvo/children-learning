import React from 'react';
const HomeServices = (props) => {
    const {title, price, img} = props.services;
    return (
      
    <div className="col">
        <div className="card h-100 p-4">
          <img src={img} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">
                {title}
            </h5>
            <p className="card-text">{price}</p>
          </div>
        </div>
    </div>
    );
};

export default HomeServices;