
import './style.css'

const CardAvatar = ({nome, rotulo, img}) => {
 
    return (
        <div className="avatares__border">
        <div className="avatares__cardBG">
            <div className="avatares__imgBG">
                <img id="avatares__parrot" src={img} />
            </div>
            
            <div className="avatares__letraPixel">
                
                <p>{nome}</p>
            
            </div>
            
            <div className="avatares__cardFooter">
                <p> {rotulo} </p>
            </div>
        </div>
    </div>  )}

export default CardAvatar;