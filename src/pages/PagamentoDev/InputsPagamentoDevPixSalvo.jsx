import "./style.css";

export default props => {

    return (
        <div className="pagamentoDev__pixContainer__content__register">
            <div>
                {props.typeOfPix == "cpf" ? (
                    <>
                        <label htmlFor="cpf">CPF</label>
                        <input type="text" name="cpf" id="cpf" value={props.cpf}  aria-label="cpf" className="input__content__register--input" />
                    </>
                ) : ""}

                {props.typeOfPix == "telefone" ? (
                    <>
                        <label htmlFor="telefone">Telefone</label>
                        <input type="tel" name="telefone" id="telefone" value={props.telefone}  aria-label="telefone" className="input__content__register--input" />
                    </>
                ) : ""}

                {props.typeOfPix == "email" ? (
                    <>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" value={props.email}  aria-label="email" className="input__content__register--input" />
                    </>
                ) : ""}

                {props.typeOfPix == "aleatorio" ? (
                    <>
                        <label htmlFor="aleatorio">Aleatório</label>
                        <input type="text" name="aleatorio" id="aleatorio" value={props.aleatorio}  aria-label="aleatório" className="input__content__register--input" />
                    </>
                ) : ""}

            </div>

            <div>
                <label htmlFor="nome">Nome completo</label>
                <input type="text" name="nome" id="nome" value={props.nomePix}  aria-label="nome" className="typeOfPix__nameInput"/>
            </div>
        </div>
    )
}

