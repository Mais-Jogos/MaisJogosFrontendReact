import "./style.css";

export default props => {

    return (
        <div className="pagamentoDev__pixContainer__content__register">
            <div>
                {props.typeOfPix == "cpf" ? (
                    <>
                        <label htmlFor="cpf">CPF</label>
                        <input type="text" name="cpf" id="cpf" value={props.value}  aria-label="cpf" className="input__content__register--input"  readOnly/>
                    </>
                ) : ""}

                {props.typeOfPix == "telefone" ? (
                    <>
                        <label htmlFor="telefone">Telefone</label>
                        <input type="tel" name="telefone" id="telefone" value={props.value}  aria-label="telefone" className="input__content__register--input"  readOnly/>
                    </>
                ) : ""}

                {props.typeOfPix == "email" ? (
                    <>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" value={props.value}  aria-label="email" className="input__content__register--input"  readOnly/>
                    </>
                ) : ""}

                {props.typeOfPix == "aleatorio" ? (
                    <>
                        <label htmlFor="aleatorio">Aleatório</label>
                        <input type="text" name="aleatorio" id="aleatorio" value={props.value}  aria-label="aleatório" className="input__content__register--input"  readOnly/>
                    </>
                ) : ""}

            </div>

            <div>
                <label htmlFor="nome">Nome completo</label>
                <input type="text" name="nome" id="nome" value={props.nomePix}  aria-label="nome" className="typeOfPix__nameInput" readOnly/>
            </div>
        </div>
    )
}

