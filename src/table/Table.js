import React from 'react';
import { TbodyRow } from '../tbodyRow/TbodyRow';
import './Table.css';


export function Table({users,setSortFunction}) {
  return (
    <div className="table-responsive">
      <table className="table table-hover">
          <thead className="thead-dark">
          <tr>
              <th></th>
              <th onClick={()=>setSortFunction((user)=> user.name.first) }>Nom</th>
              <th onClick={()=>setSortFunction((user)=> user.email)}>Email</th>
              <th onClick={()=>setSortFunction((user)=> user.phone)}>Tel</th>
          </tr>
          </thead>
          <tbody>
            {users.map( user => <TbodyRow user={user} key={user.login.uuid}/>)}
          </tbody>
      </table>
    </div>
  );
}

