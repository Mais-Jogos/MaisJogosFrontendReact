import "./style.css";
import Menu from '../../components/Menu/Menu'
import Acessibilidade from '../../components/Acessibilidade/Acessibilidade'
import Footer from "../../components/Footer/Footer";
import Vlibras from '../../components/Vlibras/Vlibras'


export default props => {
    return (
        <div id='container-page'>
            <Menu />
            <Vlibras />
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
                    {/* Etapa 1 */}
                    <div className="cadastroJogo__content__descriptionGame">
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

                    {/* Etapa 2 */}
                    <div className="cadastroJogo__content__step2">
                        <div className="cadastroJogo__content__plataforms">
                            <h2>Plataformas</h2>
                            <div className="cadastroJogo__content__plataforms__checkboxs">
                                <label htmlFor="windows">
                                    <input type="checkbox" id="windows" name="windows" checked />
                                    Windows
                                </label>
                            </div>
                            <div className="cadastroJogo__content__plataforms__checkboxs">
                                <label htmlFor="macOs">
                                    <input type="checkbox" id="macOs" name="macOs" />
                                    MacOs
                                </label>
                            </div>
                            <div className="cadastroJogo__content__plataforms__checkboxs">
                                <label htmlFor="linux">
                                    <input type="checkbox" id="linux" name="linux" />
                                    Linux
                                </label>
                            </div>
                            <div className="cadastroJogo__content__plataforms__checkboxs">
                                <label htmlFor="android">
                                    <input type="checkbox" id="android" name="android" />
                                    Android
                                </label>
                            </div>
                            <div className="cadastroJogo__content__plataforms__checkboxs">
                                <label htmlFor="ios">
                                    <input type="checkbox" id="ios" name="ios" />
                                    IOS
                                </label>
                            </div>
                        </div>

                        <div className="cadastroJogo__content__requirements">
                            <h2>Requisitos Windows</h2>
                            <div className="cadastroJogo__content__requirements__selected">
                                <h3>Mínimo</h3>
                                <div className="cadastroJogo__content__requirements__inputs">
                                    <label htmlFor="so">SO</label>
                                    <input type="text" id="so" className="cadastroJogo__content__requirements__inputs--inputStyle"></input>
                                </div>
                                <div className="cadastroJogo__content__requirements__inputs">
                                    <label htmlFor="processador">Processador</label>
                                    <input type="text" id="processador" className="cadastroJogo__content__requirements__inputs--inputStyle"></input>
                                </div>
                                <div className="cadastroJogo__content__requirements__inputs">
                                    <label htmlFor="placaVideo">Placa de vídeo</label>
                                    <input type="text" id="placaVideo" className="cadastroJogo__content__requirements__inputs--inputStyle"></input>
                                </div>
                                <div className="cadastroJogo__content__requirements__inputs--select">
                                    <div><label htmlFor="memoria">Memória</label></div>
                                    <div>
                                        <input type="number" id="memoria" min={1}></input>
                                        <select name="memoriaQTD" id="memoriaQTD">
                                            <option value="mb">MB</option>
                                            <option value="gm">GB</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="cadastroJogo__content__requirements__inputs--select">
                                    <div><label htmlFor="armazenamento">Armazenamento</label></div>
                                    <div>
                                        <input type="number" id="armazenamento" value={1}  min={1}></input>
                                        <select name="armazenamentoQTD" id="armazenamentoQTD">
                                            <option value="mb">MB</option>
                                            <option value="gm" selected>GB</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        
                            <div className="cadastroJogo__content__requirements__selected">
                                <h3>Recomendado</h3>
                                <div className="cadastroJogo__content__requirements__inputs">
                                    <label htmlFor="so">SO</label>
                                    <input type="text" id="so" className="cadastroJogo__content__requirements__inputs--inputStyle"></input>
                                </div>
                                <div className="cadastroJogo__content__requirements__inputs">
                                    <label htmlFor="processador">Processador</label>
                                    <input type="text" id="processador" className="cadastroJogo__content__requirements__inputs--inputStyle"></input>
                                </div>
                                <div className="cadastroJogo__content__requirements__inputs">
                                    <label htmlFor="placaVideo">Placa de vídeo</label>
                                    <input type="text" id="placaVideo" className="cadastroJogo__content__requirements__inputs--inputStyle"></input>
                                </div>
                                <div className="cadastroJogo__content__requirements__inputs--select">
                                    <div><label htmlFor="memoria">Memória</label></div>
                                    <div>
                                        <input type="number" id="memoria" min={1}></input>
                                        <select name="memoriaQTD" id="memoriaQTD">
                                            <option value="mb">MB</option>
                                            <option value="gm">GB</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="cadastroJogo__content__requirements__inputs--select">
                                    <div><label htmlFor="armazenamento">Armazenamento</label></div>
                                    <div>
                                        <input type="number" id="armazenamento" value={1}  min={1}></input>
                                        <select name="armazenamentoQTD" id="armazenamentoQTD">
                                            <option value="mb">MB</option>
                                            <option value="gm" selected>GB</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="cadastroJogo__content__requirements">
                            <h2>Requisitos Android</h2>
                            <div className="cadastroJogo__content__requirements__selected">
                                <h3>Mínimo</h3>
                                <div className="cadastroJogo__content__requirements__inputs">
                                    <label htmlFor="so">SO</label>
                                    <input type="text" id="so" className="cadastroJogo__content__requirements__inputs--inputStyle"></input>
                                </div>
                                <div className="cadastroJogo__content__requirements__inputs">
                                    <label htmlFor="processador">Processador</label>
                                    <input type="text" id="processador" className="cadastroJogo__content__requirements__inputs--inputStyle"></input>
                                </div>
           
                                <div className="cadastroJogo__content__requirements__inputs--select">
                                    <div><label htmlFor="memoria">Memória</label></div>
                                    <div>
                                        <input type="number" id="memoria" min={1}></input>
                                        <select name="memoriaQTD" id="memoriaQTD">
                                            <option value="mb">MB</option>
                                            <option value="gm">GB</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="cadastroJogo__content__requirements__inputs--select">
                                    <div><label htmlFor="armazenamento">Armazenamento</label></div>
                                    <div>
                                        <input type="number" id="armazenamento" value={1}  min={1}></input>
                                        <select name="armazenamentoQTD" id="armazenamentoQTD">
                                            <option value="mb">MB</option>
                                            <option value="gm" selected>GB</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        
                            <div className="cadastroJogo__content__requirements__selected">
                                <h3>Recomendado</h3>
                                <div className="cadastroJogo__content__requirements__inputs">
                                    <label htmlFor="so">SO</label>
                                    <input type="text" id="so" className="cadastroJogo__content__requirements__inputs--inputStyle"></input>
                                </div>
                                <div className="cadastroJogo__content__requirements__inputs">
                                    <label htmlFor="processador">Processador</label>
                                    <input type="text" id="processador" className="cadastroJogo__content__requirements__inputs--inputStyle"></input>
                                </div>
                          
                                <div className="cadastroJogo__content__requirements__inputs--select">
                                    <div><label htmlFor="memoria">Memória</label></div>
                                    <div>
                                        <input type="number" id="memoria" min={1}></input>
                                        <select name="memoriaQTD" id="memoriaQTD">
                                            <option value="mb">MB</option>
                                            <option value="gm">GB</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="cadastroJogo__content__requirements__inputs--select">
                                    <div><label htmlFor="armazenamento">Armazenamento</label></div>
                                    <div>
                                        <input type="number" id="armazenamento" value={1}  min={1}></input>
                                        <select name="armazenamentoQTD" id="armazenamentoQTD">
                                            <option value="mb">MB</option>
                                            <option value="gm" selected>GB</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Etapa 3 */}
                    <div className="cadastroJogo__content__step3">
                        <div className="cadastroJogo__content__uploads">
                            <h2>Uploads</h2>
                            <div className="cadastroJogo__content__uploadContent">
                                <h3>Jogo</h3>

                                <div className="cadastroJogo__content__uploadContent__fileUpload">
                                    <div>
                                        <label htmlFor="windows">Windows</label>
                                        <div>
                                            <input type="file" accept=".zip" id="windows"></input>
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="android">Android</label>
                                        <div>
                                            <input type="file" accept=".zip" id="android"></input>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="cadastroJogo__content__uploadContent">
                                <h3>Mídia</h3>

                                <div className="cadastroJogo__content__uploadContent__fileUpload">
                                    <div>
                                        <label htmlFor="fotos">Fotos</label>
                                        <div>
                                            <input type="file" accept=".png,.jpeg,.jpg" id="fotos" multiple></input>
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="videos">Vídeos</label>
                                        <div>
                                            <input type="file" accept=".mp4,.mov,.mkv" id="videos" multiple></input>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="cadastroJogo__content__uploadContent">
                                <h3>Classificação indicativa</h3>
                                <div className="cadastroJogo__content__uploadContent__fileUpload cadastroJogo__content__uploadContent--flexRight">
                                    <div>
                                        <label htmlFor="doc">Documento</label>
                                        <div>
                                            <input type="file" accept=".png,.jpeg,.jpg,.pdf" id="doc"></input>
                                        </div>
                                    </div>
                                    <select name="classificacao" id="classificacao">
                                        <option value="Livre" selected>Livre</option>
                                        <option value="menores_10">10</option>
                                        <option value="menores_12">12</option>
                                        <option value="menores_14">14</option>
                                        <option value="menores_16">16</option>
                                        <option value="menores_18">18</option>
                                    </select>
                                </div>
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