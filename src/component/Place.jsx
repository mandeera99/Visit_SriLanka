import React, { useEffect, useState } from "react";
import { useParams } from 'react-router';

import menu from "./menu";

const Place = ({handleClick}) => {
    const [data, setData] = useState([]);
    let { id } = useParams();



    const getuser = async () => {

        setData(menu[id]);

    }

    useEffect(() => {
        getuser();
    }, [id]);

    return (
        <>
            <div className="container py-5">
                <div className="row py-5">
                    <div className="col-md-6">

                        <img src={data.image} alt={data.category} height="400px" width="400px" />
                    </div>
                    <div className="col-md-6">
                        <h5 className="text-uppercase text-black-50">Beauty of the province</h5>
                        <h1 className="display-5">{data.category} province</h1>
                        <h3 class="display-6 fw-bold my-4">{data.name}</h3>
                        <p className="lead ">{data.des}</p>
                       
                       
                

                    </div>

                </div>
            </div>







        </>
    );
};

export default Place;