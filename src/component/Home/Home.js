import React from 'react';
import'./Home.css'
import useService from '../../Hook/useService';
import HomeServices from '../HomeServices/HomeServices';
/* import Image from '../../img/4ef0ccc160e72faef54e1425cf6197c6.jpg' */
import Image from '../../img/download.jpg'


const Home = () => {
    const [service, /* setService */] = useService([]);
    return (
        <div>
            <div className="container mt-4">
                <h1>Our Education and Learning System Demo</h1>
               <div className="row mt-4">
                  <div className="col-md-6">
                      <img src={Image} alt="" />
                  </div>
                  <div className="col-md-6 detials">
                      <h1 className="pt-4">Children club</h1>
                      <p>A kids club, children's club or mini club is a childcare facility (daycare), which includes a fully staffed mini playground or complete village specially designed for children; is usually offered by private companies, health and fitness clubs, major sports events, trade fairs, etc.;</p>
                  </div>
               </div>
            </div>
            <div className="bg-color mt-5">
                <h1 className="pt-4">Welcome To Children Club</h1>
                <div className="row row-cols-2 row-cols-md-4 g-5 h-100 p-5">
                    {
                        service.slice(0,4).map(services => <HomeServices services ={services}
                        key = {services.id}
                        ></HomeServices>) 
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;