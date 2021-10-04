import React from 'react';
import img from'../../img/how-do-clubs-work-header.jpg'
const Detials = () => {
    return (
        <div className="container mt-4">
            <div class="card mb-3">
                <img src={img} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Our Club Details</h5>
                    <p class="card-text">Groups and clubs designed for children and youth offer many benefits. They help kids make friends and practice social skills with both adults and peers. They allow to children to learn new skills or pursue a favorite hobby or activity. They foster feelings of competence and pride to boost kids' confidence and self-esteem.
                    Some children join clubs to serve the community or explore their faith. Others prefer the spirit of competition that comes from youth sports. When you are choosing a club for your child, consider what your child hopes to get out of the experience and the various types of organizations available. Here is a quick list to give you some direction and help you find the right club or team for your child.</p>
                </div>
                
            </div>
        </div>
    );
};

export default Detials;