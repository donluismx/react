import React from 'react';
import { Link } from 'react-router-dom';

const Posts = () => {
  return (
    <div className="home">
      <div className="container">
        <Link to="this-is-a-post-title">
          <div className="row align-items-center my-5">
            <div className="col-lg-7">
              <img src="http://placehold.it/900x400" alt="" className="img-fluid round mb-4 mb-lg-0" />
            </div>
            <div className="col-lg-5">
              <h1 className="font-weight-light">This is a post title</h1>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam vero animi consectetur quia itaque enim eius expedita aliquid natus asperiores rem dicta cum cumque quasi, cupiditate laudantium, neque quas debitis.</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Posts;