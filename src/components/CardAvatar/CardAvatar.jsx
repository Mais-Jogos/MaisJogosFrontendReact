
import { useState } from 'react';
import './style.css'

const CardAvatar = ({nome, rotulo, img, color}) => {
    const [hover, setHover] = useState(false)
    return (
        <div className="avatares__border" 
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        >
        <div className="avatares__cardBG">
            <div className="avatares__imgBG" style={{
                backgroundImage:`url(/imgs/cardbg/bgCard.png)` ,
                backgroundColor: color,
                backgroundSize:"100%",
                boxShadow: hover && `inset 0px 0px 20px ${color}, 0px 0px 10px ${color}`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
            }}>
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