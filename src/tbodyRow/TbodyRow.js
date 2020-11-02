import React, { useState } from 'react';
import { Modal } from '../modal/Modal';

export function TbodyRow({user}) {

  const [show, setShow] = useState(false)
  const modalDisplay= ()=> setShow(show => !show)

  return (
    <tr onClick={modalDisplay}>
        <td><img className="rounded-circle" src={user.picture.thumbnail} alt="profil picture"/></td>
        <td>{user.name.first} {user.name.last}</td>
        <td>{user.email}</td>
        <td>{user.phone}</td>
        <Modal show={show} user={user}/>
    </tr>
    
  );
}


