import { useState } from "react";
import { translate } from "../../translate/translate";
import { connect } from "react-redux";
import { addAvatar, changeAvatar, buyWithCoins } from "../../redux/actions";
import "./style.css";

const CardAvatar = ({ avatar, cor, userRedux, coins, dispatch }) => {
    const [hover, setHover] = useState(false);
    const handleClickAdd = (avatar) =>{
      dispatch(addAvatar(avatar))
      setTimeout(()=>{
        dispatch(buyWithCoins(avatar.valor))
      }, 4000)
    }   
    const handleClickChangeAvatar = (avatar) =>{
      dispatch(changeAvatar(avatar))
    }

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
            backgroundColor: cor,
            backgroundSize: "100%",
            boxShadow:
              hover && `inset 0px 0px 20px ${cor}, 0px 0px 10px ${avatar?.color}`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <img id="avatares__parrot" src={`${avatar?.id !== 1 ? 'data:image/png;base64,' : ""}${avatar?.arquivo}`} />
        </div>

        <div className="avatares__letraPixel">
          <p>{avatar?.nome}</p>
        </div>
          <div className="lojaskin__cardFooter"
           style={{
            display:userRedux.avatares.every(useravatar => useravatar?.id !== avatar?.id) ? 'flex':'none'
           }}>
            <img
              className="lojaskin__imgEdit"
              src="/imgs/icons/Kapicoin_icon.png"
            />
            <p> {avatar?.valor} </p>
            {avatar?.valor <= coins?.coins && <div className="lojaskin__SVG" >
              <i class="fa-solid fa-cart-shopping" onClick={() => handleClickAdd(avatar)}></i>
            </div>}
          </div>

          <div className="avatares__cardFooter" style={{
            display:userRedux.avatares.some(useravatar => useravatar?.id === avatar?.id) ? 'flex':'none'
           }}>
            <p className={userRedux.avatar?.id !== avatar?.id ? "equipar" : "equipado"}
            onClick={() => handleClickChangeAvatar(avatar)}> 
              {userRedux.avatar?.id !== avatar?.id ? translate("Equipar") : translate("Equipado")} 
            </p>
          </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
    userRedux: state.userRedux,
    coins: state.coins
});
  
export default connect(mapStateToProps)(CardAvatar);
