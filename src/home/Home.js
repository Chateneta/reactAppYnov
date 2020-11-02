import React, { useEffect, useState } from 'react';
import axios from "axios";
import {Table} from '../table/Table';
import { Btn } from '../btn/Btn';

const useSortFunction= () => {
    const [sortFunction, setSortFunction] = useState(() => () => null)
    return [sortFunction, (newFunction)=> setSortFunction(() =>newFunction)]
  }
export function Home() {
    const [users, setUsers] = useState([]);
    const getData = (int) =>{
        axios.get('https://randomuser.me/api/?results='+int).then(({ data: { results } }) => {
        setUsers((oldUsers)=>[...oldUsers, ...results])
        })
    }
    useEffect(
        ()=>{ 
        getData(5)
        },
        [],
    )


    const [txt, setTxt] = useState("");
    const searchTxt = (e) =>{
        setTxt(e.target.value)
    }


    const [sortFunction, setSortFunction] = useSortFunction()

    const usersFiltered = users
    .filter( user => txt ? user.name.first.toUpperCase().startsWith(txt.toUpperCase()) : true)
    .sort( (a, b) => {
        const resA= sortFunction(a)
        const resB= sortFunction(b)
        if(resA===resB) return 0
        return resA>resB ? 1 : -1
    });

    return (
        <div className="container">
            <div className="d-flex justify-content-between mt-4 mb-4">
                <Btn getData={() => getData(10)} classN='btn btn-primary' children="Fetch"/>
                <h3 className="d-none d-md-block">All Users</h3>
                <input type="text" placeholder="Search"  onChange={searchTxt}/>
            </div>
            <Table users={usersFiltered} setSortFunction={setSortFunction}/>
        </div>
    );
  }