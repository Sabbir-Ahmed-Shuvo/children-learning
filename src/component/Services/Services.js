import React from 'react';
import useService from '../../Hook/useService';
import'./Services.css'

const Services = () => {
    const [service, /* setService */] = useService([])
    return (
    
        <div className="container mt-5">
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    service.map(services => <div className="col">
                    <div className="card h-100 cardcolor">
                      <img src={services.img} className="card-img-top" alt="..."/>
                      <div className="card-body">
                        <h5 className="card-title">
                            {services.title}
                        </h5>
                        <h6>{services.description}</h6>
                        <p className="card-text">Price: {services.price}</p>

                      </div>
                    </div>
                </div>) 
                }
            </div>
        </div>
    
    );
};

export default Services;