import React from "react";
import Places from "./Places";

const Home = () => {
    return (
        <div className="hero">
            <div className="card text-bg-dark text-white border-0">
                <img src="/asset/bg10.jpg" className="card-img" alt="background" height="550px" />
            </div>

            <Places/>
        </div>
    );
};
export default Home;
