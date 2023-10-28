import "./style.css";
import React from "react";


export default props => {
    return (
        <section className="headerWithFilter__title">
            <div className="headerWithFilter__title__name">
                <img src={props.imgIcon} alt="icone de controle de botões" className="headerWithFilter--center" />
                <h1 className="headerWithFilter--center">{props.name || "Título"}</h1>
            </div>
            <div>
                <i class="fa-solid fa-filter headerWithFilter--center" alt="icone de filtro"></i>
                <p className="headerWithFilter--center">Relevância</p>
            </div>
        </section>
    )
}

