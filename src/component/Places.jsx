import React, { useState ,useEffect} from "react";
import menu from "./menu";


const Places = () => {
    const [data, setData] = useState([]);
  

    const getuser = async () => {
    setData(menu);

    }

    useEffect(() => {
        getuser();

    }, []);



    const onClickHandler = (order) => {
        const updatedList = menu.filter((x) => {
            return x.category === order;
        });
        setData(updatedList);

    }
     
        return (
            <>
            <div className="container my-5 py-5">
            <div className="row">
                <div className="col-12 mb-5">
                    <h1 className="display-6 fw-bolder text-center">Places To Visit</h1>
                    <hr />
                </div>

            </div>
            </div>

           
                <div className="buttons d-flex justify-content-center mb-5 pb-5">
                    <button className="btn btn-outline-dark me-2 btn-secondary rounded-pill" onClick={() => setData(menu)} >All</button>
                    <button className="btn btn-outline-dark me-2 btn-secondary rounded-pill" onClick={() => onClickHandler("Northern")}>Northern</button>
                    <button className="btn btn-outline-dark me-2 btn-secondary rounded-pill" onClick={() => onClickHandler("North Central")}>North Central</button>
                    <button className="btn btn-outline-dark me-2 btn-secondary rounded-pill" onClick={() => onClickHandler("North Western")}>North Western</button>
                    <button className="btn btn-outline-dark me-2 btn-secondary rounded-pill" onClick={() => onClickHandler("Central")}>Central</button>
                    <button className="btn btn-outline-dark me-2 btn-secondary rounded-pill" onClick={() => onClickHandler("Eastern")}>Eastern</button>
                    <button className="btn btn-outline-dark me-2 btn-secondary rounded-pill" onClick={() => onClickHandler("Western")}>Western</button>
                    <button className="btn btn-outline-dark me-2 btn-secondary rounded-pill" onClick={() => onClickHandler("Sabaragamuwa")}>Sabaragamuwa</button>
                    <button className="btn btn-outline-dark me-2 btn-secondary rounded-pill" onClick={() => onClickHandler("Uva")}>Uva</button>
                    <button className="btn btn-outline-dark me-2 btn-secondary rounded-pill" onClick={() => onClickHandler("Southern")}>Southern</button>

                </div>
                <div class="row">
                {
                    data.map((elem) => {
                        const { id, image, category,name } = elem;
                        

                        return (
                            <>
                                <div className="col-md-3 mb-4 ">
                                    <div class=" h-100 text-center p-5">
                                        <img src={image} class="card-img-top rounded-circle" alt={category} height="250px" width="250px" key={id}/>
                                        <div class="card-body">
                                            <h5 class="card-title">{category} Province</h5>
                                            <p class="card-text">{name}</p>
                                            
                                            <a href={`/places/${id}`} class="btn btn-outline-dark  btn-info rounded-pill">view more</a>
                                        </div>
                                    </div>
                                </div>
                                
                            </>
                        );
                    })
                }
                </div>
            </>
        );
    
}
export default Places;