import "./style.css";
import Menu from '../../components/Menu/Menu'
import Acessibilidade from '../../components/Acessibilidade/Acessibilidade'
import Footer from "../../components/Footer/Footer";
import Vlibras from '../../components/Vlibras/Vlibras'


export default props => {
    return (
        <div id='container-page'>
            <Menu />
            <Vlibras/>
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
                    <div>
                        <div className="cadastroJogo__content__body">
                            <label htmlFor="cadastroJogo__content__title" className="cadastroJogo__content__label">Título</label>
                            <input type="text" id="cadastroJogo__content__title"></input>
                        </div>

                        <div className="cadastroJogo__content__body">
                            <label htmlFor="cadastroJogo__content__textarea" className="cadastroJogo__content__label">Descrição</label>
                            <textarea id="cadastroJogo__content__textarea"></textarea>
                        </div>

                        <div className="cadastroJogo__content__body">
                            <label className="cadastroJogo__content__label">Gêneros</label>
                            <div className="cadastroJogo__content__Bodybuttons">
                                <button className="cadastroJogo__content__buttons cadastroJogo__content__buttons--select">Ação</button>
                                <button className="cadastroJogo__content__buttons">Arcade</button>
                                <button className="cadastroJogo__content__buttons">Aventura</button>
                                <button className="cadastroJogo__content__buttons">Casual</button>
                                <button className="cadastroJogo__content__buttons">Corrida</button>
                                <button className="cadastroJogo__content__buttons">Esporte</button>
                                <button className="cadastroJogo__content__buttons">Estratégia</button>
                                <button className="cadastroJogo__content__buttons">Luta</button>
                                <button className="cadastroJogo__content__buttons">Puzzle</button>
                                <button className="cadastroJogo__content__buttons">RPG</button>
                                <button className="cadastroJogo__content__buttons">Shooter</button>
                                <button className="cadastroJogo__content__buttons">Terror</button>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="cadastroJogo__step">
                    <button className="cadastroJogo__step__button cadastroJogo__step__buttonBack">Voltar</button>
                    <button className="cadastroJogo__step__button cadastroJogo__step__buttonNext">Proxímo</button>
                </section>
            </main>
            <Footer />
        </div>
    )
}