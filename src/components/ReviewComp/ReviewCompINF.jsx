import "./style.css";
import React from "react";
import { Link } from "react-router-dom";

export default (props) => {
  const { review, game } = props;

  return (
    <div className="review__border">
      <div className="review__gameIMG">
        <img src={`data:image/png;base64, ${game?.bannerUm}`} />
      </div>
      <div className="review__TextEdit">
        <p className="review__gameName">
          {" "}
          {review?.tituloReview}{" "}
          <span className="review_Avalicao">
            {review?.notaReview}/5 <i class="fa-solid fa-star"></i>
          </span>
        </p>

        <div className="review_FontSize">
          <p>
            <u> {game?.titulo} </u>
          </p>
          <p>
            <u> {review?.dataReview}</u>
          </p>
        </div>

        <div className="review__partInferior">
          <p className="review__corpoDescricao">{review?.descricaoReview}</p>
          <Link
            to={`/cadastro-review/${review?.idJogo}`}
            className="review__Button"
            aria-label={game?.titulo?.toLowerCase().replace(/ /g, "-")}
          >
            <button aria-label={game?.titulo}>
              <label>Editar</label>
              <img src="\imgs\icons\edit_icon.png" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
