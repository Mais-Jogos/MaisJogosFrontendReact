import "./style.css";

export default props => {

    const typeOfPix = props.typeOfPix;

    return (
        <div className="pagamentoDev__pixContainer__content__register">
        <div>
            {typeOfPix.cpf.status ? (
                <>
                    <label htmlFor="cpf">CPF</label>
                    <input type="text" name="cpf" id="cpf" value={typeOfPix.cpf.value} onChange={e => {props.dispatch({ type: 'cpf_text', cpf: e.target.value }) }} />
                </>
            ) : ""}

            {typeOfPix.telefone.status ? (
                <>
                    <label htmlFor="telefone">Telefone</label>
                    <input type="tel" name="telefone" id="telefone" value={typeOfPix.telefone.value} onChange={e => { props.dispatch({ type: 'telefone_text', telefone: e.target.value }) }} />
                </>
            ) : ""}

            {typeOfPix.email.status ? (
                <>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" value={typeOfPix.email.value} onChange={e => { props.dispatch({ type: 'email_text', email: e.target.value }) }} />
                </>
            ) : ""}

            {typeOfPix.aleatorio.status ? (
                <>
                    <label htmlFor="aleatorio">Aleatório</label>
                    <input type="text" name="aleatorio" id="aleatorio" value={typeOfPix.aleatorio.value} onChange={e => { props.dispatch({ type: 'aleatorio_text', aleatorio: e.target.value }) }} />
                </>
            ) : ""}

        </div>

        <div>
            <label htmlFor="nome">Nome completo</label>
            <input type="text" name="nome" id="nome" value={props.nomePix} onChange={e => { props.setNomePix(e.target.value) }} />
        </div>
    </div>
    )
}

