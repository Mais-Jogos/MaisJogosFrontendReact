import "./style.css";
import Menu from '../../components/Menu/Menu'
import Acessibilidade from '../../components/Acessibilidade/Acessibilidade'
import Footer from "../../components/Footer/Footer";


export default props => {
    return (
        <div id='container-page'>
            <Menu />
            <Acessibilidade />

            <main className="cadastroJogo__main">
                <section className="cadastroJogo__title">

                    <div class="cadastroJogo__title__setas">
                        <div class="cadastroJogo__title__seta esquerda"></div>
                    </div>

                    <h1>Cadastre seu jogo</h1>

                    <div class="cadastroJogo__title__setas">
                        <div class="cadastroJogo__title__seta direita"></div>
                    </div>
                </section>

                <section className="cadastroJogo__menu">
                    <div className="cadastroJogo__menu__block">
                        <div className="cadastroJogo__menu__block__circle cadastroJogo__menu__block__circle--select">
                            <p>1</p>
                        </div>
                        <div className="cadastroJogo__menu__block__text cadastroJogo__menu__block__text--select">
                            <p>Dados</p>
                        </div>
                    </div>

                    <div className="cadastroJogo__menu__block">
                        <div className="cadastroJogo__menu__block__circle">
                            <p>2</p>
                        </div>
                        <div className="cadastroJogo__menu__block__text">
                            <p>Requisitos</p>
                        </div>
                    </div>

                    <div className="cadastroJogo__menu__block">
                        <div className="cadastroJogo__menu__block__circle">
                            <p>3</p>
                        </div>
                        <div className="cadastroJogo__menu__block__text">
                            <p>Uploads</p>
                        </div>
                    </div>
                </section>
                <section className="cadastroJogo__content">

                </section>
            </main>

            <Footer />
        </div>
    )
}