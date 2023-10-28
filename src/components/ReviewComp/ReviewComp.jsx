import "./style.css";
import React from "react";

export default props => {
    return (
        <section className="reviewComp__title">
            <div className="reviewComp__title__name">
                <i className="fa-solid fa-book-bookmark reviewComp--center"></i>
                <h1 className="reviewComp--center">{props.name || "Título"}</h1>
            </div>
            <div>
                <i class="fa-solid fa-filter reviewComp--center-filter" alt="icone de filtro"></i>
                <p className="reviewComp--center">Relevância</p>
            </div>
            

        </section>

    )
}