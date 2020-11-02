import React, { useReducer } from 'react';
import './Modal.css';


export function Modal({show, user}) {

    if  (!show) return null

  return (
    <div className="modal text-dark display-block">
        <div className="">
            <div className="modal-content">
                <img src={user.picture.thumbnail} alt="avatar" className="rounded-circle PP img-responsive"/>
                <div className="body">
                    <h4 className="mt-1 mb-2 font-weight-bold">{user.name.first} {user.name.last}</h4>
                    <p>{user.email}</p>
                    <p>{user.phone}</p>
                    <p>{user.location.street.number} {user.location.street.name}  {user.location.city} {user.location.postcode}</p>
                </div>
            </div>
        </div>
    </div>
  );
}

