import "./style.css";
import React from "react";
import { Link } from "react-router-dom";

export default props => {
    return (
        
        <div className="review__border">
                    <div className="review__gameIMG">
                    <img src={props.minhaIMG}/>
                    </div>
                    <div className="review__TextEdit">
                        
                        <p className="review__gameName"> {props.nome} <span className="review_Avalicao">{props.nota}/5 <i class="fa-solid fa-star"></i></span></p>
                        
                        <div className="review_FontSize">
                            <p><u> {props.descricao} </u></p>
                            <p><u> {props.data}</u></p>
                        </div>
                        
                        <div className="review__partInferior">
                            <p className="review__corpoDescricao">{props.corpo}</p>
                            <Link to={`/cadastro-review/${props?.nome.toLowerCase().replace(/ /g,"-")}`}className="review__Button" aria-label={props?.nome.toLowerCase().replace(/ /g,"-")}>
                                    <button aria-label={props?.nome.toLowerCase().replace(/ /g,"-")}>
                                        <label>Editar</label> 
                                        <img src="\imgs\icons\edit_icon.png"/>
                                    </button>
                            </Link>
                        </div>
                    </div>
            </div>

    )
}