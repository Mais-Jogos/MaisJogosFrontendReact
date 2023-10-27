import './style.css'

const CardLojaSkin = ({nome, preco, img}) => {
 
    return (
        <div className="lojaskin__border">
                        <div className="lojaskin__cardBG">
                            <div className="lojaskin__imgBG">
                                <img id="lojaskin__parrot" src={img} />
                            </div>
                            <div className="lojaskin__letraPixel">
                                
                                <p>{nome}</p>
                            
                            </div>
                            <div className="lojaskin__cardFooter">
                                <img className="lojaskin__imgEdit" src="/imgs/icons/Kapicoin_icon.png" />
                                <p> {preco} </p>
                                <div className="lojaskin__SVG">
                                    <i class="fa-solid fa-cart-shopping"></i>
                                </div>
                            </div>
                        </div>
                    </div>
          )
    }

export default CardLojaSkin;
