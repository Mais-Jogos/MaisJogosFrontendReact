import "./style.css";
import React from "react";

export default props => {
    return (
        <section className="reviewComp__title">
            <div className="reviewComp__title__name">
                <img src={props.imgIcon} alt="icone de controle de botões" className="reviewComp--center" />
                <h1 className="reviewComp--center">{props.name || "Título"}</h1>
            </div>
            <div>
                <img src="../../../public/imgs/icons/filter_icon.png" alt="icone de filtro" className="reviewComp--center" />
                <p className="reviewComp--center">Relevância</p>
            </div>

        </section>

    )
}