import React from 'react';
import { Link } from 'react-router-dom';
export default function BeerCard(props) {
  //   console.log(props);
  return (
    <div className="card m-3" style={{ maxWidth: '540px' }}>
      <div className="row g-0">
        <div className="col-md-4">
          <Link to={`/beers/${props._id}`}>
            <img
              style={{ width: 'auto', height: '200px' }}
              src={props.image_url}
              className="img-fluid rounded-start"
              alt="..."
            />
          </Link>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">{props.tagline}</p>
            <p className="card-text">
              <small className="text-muted">{props.contributed_by}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
