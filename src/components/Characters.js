import React from "react";


const Characters = ({ characters = [] }) => { //array personajes
    return (
        <div className="row">
            {
                characters.map((item, index) => (
                    <div key={index} className="col mb-4">
                        <div className="card" style={{ minwidth: "200px" }}>
                            <img src={item.image} alt="" />
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <hr />
                                <p>Especie:{item.species}</p>
                                <p>Ubicación:{item.location.name}</p>
                            </div>
                        </div>
                    </div>
                ))
            }

        </div>
    )
}

export default Characters;