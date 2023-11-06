import { translate } from "../../translate/translate.js";
import "./style.css";
import React, { useState } from "react";


export default props => {

    const [showFilter, setShowFilter] = useState(false)

    return (
        <section className="headerWithFilter__title">
            <div className="headerWithFilter__title__name">
                <img src={props.imgIcon} alt="icone de controle de botões" className="headerWithFilter--center" />
                <h1 className="headerWithFilter--center">{props.name || "Título"}</h1>
            </div>
            <div>
                <div onClick={_ => setShowFilter(e => !e)}>
                    <i class="fa-solid fa-filter headerWithFilter--center" alt="icone de filtro"></i>
                    <p className="headerWithFilter--center">{translate("Relevância")}</p>
                </div>

                {showFilter ? (<div className="headerWithFilter__modal__sort">
                    <p onClick={_ => {props.sortData("cres");setShowFilter(e => !e)}}>Ordem crescente</p>
                    <p onClick={_ => {props.sortData("des");setShowFilter(e => !e)}}>Ordem decrescente</p>
                </div>) : ""}
            </div>

        </section>
    )
}

