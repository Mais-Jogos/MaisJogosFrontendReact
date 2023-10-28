import "./style.css";

export default props => {

    return (
        <div className="pagamentoDev__pixContainer__content__register">
            <div>
                {props.typeOfPix == "cpf" ? (
                    <>
                        <label htmlFor="cpf">CPF</label>
                        <input type="text" name="cpf" id="cpf" value={props.cpf} />
                    </>
                ) : ""}

                {props.typeOfPix == "telefone" ? (
                    <>
                        <label htmlFor="telefone">Telefone</label>
                        <input type="tel" name="telefone" id="telefone" value={props.telefone} />
                    </>
                ) : ""}

                {props.typeOfPix == "email" ? (
                    <>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" value={props.email} />
                    </>
                ) : ""}

                {props.typeOfPix == "aleatorio" ? (
                    <>
                        <label htmlFor="aleatorio">Aleatório</label>
                        <input type="text" name="aleatorio" id="aleatorio" value={props.aleatorio} />
                    </>
                ) : ""}

            </div>

            <div>
                <label htmlFor="nome">Nome completo</label>
                <input type="text" name="nome" id="nome" value={props.nomePix} />
            </div>
        </div>
    )
}

