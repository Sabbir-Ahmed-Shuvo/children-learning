import React from 'react';
import img from'../../img/how-do-clubs-work-header.jpg';
import image1 from'../../img/GettyImages-56901647-581032823df78c2c7349a8a0.webp';
import image2 from'../../img/GettyImages-584304124-581032cb3df78c2c7349b374.webp';
import image3 from'../../img/GettyImages-463029317-581033455f9b58564c9918cd.webp';
import image4 from'../../img/GettyImages-533978201-581033c95f9b58564c992794.webp';
import image5 from'../../img/GettyImages-200548159-003-581034de5f9b58564c99611a.webp';

const Detials = () => {
    return (
        <div className="container mt-4 w-50">
            <div class="card mb-3">
                <img src={img} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h3 class="card-title">Our Club Details</h3>
                    <p class="card-text">Groups and clubs designed for children and youth offer many benefits. They help kids make friends and practice social skills with both adults and peers. They allow to children to learn new skills or pursue a favorite hobby or activity. They foster feelings of competence and pride to boost kids' confidence and self-esteem.
                    Some children join clubs to serve the community or explore their faith. Others prefer the spirit of competition that comes from youth sports. When you are choosing a club for your child, consider what your child hopes to get out of the experience and the various types of organizations available. Here is a quick list to give you some direction and help you find the right club or team for your child.</p>
                </div>
                <h3>Volunteering</h3>
                <img src={image1} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <p class="card-text">Children learn a lot about themselves and others by volunteering. Even the youngest of children can make a difference. By choosing a project and following it through, children develop a sense of accomplishment.1 Whether planting flowers or serving in a soup kitchen, children see the results of their hard work and have the satisfaction of knowing they are making a difference.</p>
                </div>
                <h3>Scouting</h3>
                <img src={image2} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <p class="card-text">Scouting provides a well-rounded program where children earn badges, play games, camp, sing, create crafts, complete service projects and more. Scouts build friendships and learn new skills.2﻿ Many have opportunities through Scouts that they wouldn't otherwise have.</p>
                </div>
                <h3>Sports</h3>
                <img src={image3} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <p class="card-text">Sports give children a chance to engage in physical activity and make friends, develop skills, learn teamwork and build self-esteem.3 The sporting options are virtually endless.</p>
                </div>
                <h3>Academic</h3>
                <img src={image4} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <p class="card-text">Academic clubs recognize children's academic achievements and give children the opportunity to work in an academic area in more depth than offered in class. Groups that focus on math, science, and computers encourage leadership skills while helping children learn to work as a team. They are a place for kids to meet like-minded friends who share their passion for learning.</p>
                </div>
                <h3>Music & Arts</h3>
                <img src={image5} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <p class="card-text">Children develop creativity and express themselves through the arts.5 Singing, dancing, painting, and drama give children the chance to find out who they are — or sometimes pretend to be someone different — and express it in beautiful ways.
                    Contact local music schools and art studios for information on youth groups and programs. Libraries are another great resource for creative camps and programs geared for kids. For the child who loves reading, consider forming a kids' book club where children take turns choosing a favorite book to read and discuss together.</p>
                </div>
            </div>
        </div>
    );
};

export default Detials;