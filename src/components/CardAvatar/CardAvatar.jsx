/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import { useState, useEffect } from "react";
import { translate } from "../../translate/translate";
import { connect } from "react-redux";
import "./style.css";

const CardAvatar = ({ avatar, userRedux, coins, handleClickAdd }) => {
    const [hover, setHover] = useState(false);

  return (
    <div
      className="avatares__border"
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="avatares__cardBG">
        <div
          className="avatares__imgBG"
          style={{
            backgroundImage: `url(/imgs/cardbg/bgCard.png)`,
            backgroundColor: avatar?.color,
            backgroundSize: "100%",
            boxShadow:
              hover && `inset 0px 0px 20px ${avatar?.color}, 0px 0px 10px ${avatar?.color}`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <img id="avatares__parrot" src={avatar?.img} />
        </div>

        <div className="avatares__letraPixel">
          <p>{avatar?.nome}</p>
        </div>
        {userRedux.avatares.some(useravatar => useravatar?.id !== avatar?.id) ? (
          <div className="lojaskin__cardFooter" >
            <img
              className="lojaskin__imgEdit"
              src="/imgs/icons/Kapicoin_icon.png"
            />
            <p> {avatar?.coins} </p>
            {avatar?.coins <= coins?.coins && <div className="lojaskin__SVG" >
              <i class="fa-solid fa-cart-shopping" onClick={() => handleClickAdd(avatar)}></i>
            </div>}
          </div>
        ) : (
          <div className="avatares__cardFooter">
            <p className={userRedux.avatar?.id !== avatar?.id ? "equipar" : "equipado"}> {userRedux.avatar?.id !== avatar?.id ? translate("Equipar") : translate("Equipado")} </p>
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
    userRedux: state.userRedux,
    coins: state.coins
});
  
export default connect(mapStateToProps)(CardAvatar);
