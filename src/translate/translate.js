import { connect } from 'react-redux'; 
import { useSelector } from 'react-redux';

export function translate(value){
    const {language} = useSelector(state => state.language);

    const vocabulary = {
        "Meus Avatares":{
            "pt": "Meus Avatares",
            "en":"My Avatars"
        },
        "Equipar":{
            "pt": "Equipar",
            "en":"Equip"
        },
        "Equipado":{
            "pt": "Equipado",
            "en":"equipped"
        },
        "Avatares de Evento":{
            "pt": "Avatares de Evento",
            "en":"Event Avatars"
        },
        "Cadastre seu jogo":{
            "pt": "Cadastre seu jogo",
            "en":"Register your game"
        },
        "Loja nacional de jogos indie":{
            "pt": "Loja nacional de jogos indie",
            "en":"National indie game store"
        },
        "Novidades":{
            "pt": "Novidades",
            "en":"New releases"
        },
        "Categorias":{
            "pt": "Categorias",
            "en":"Categories"
        },
        "Plataformas":{
            "pt": "Plataformas",
            "en":"Platforms"
        },
        "Publique seus jogos":{
            "pt": "Publique seus jogos",
            "en":"Publish your games"
        },
        "Classificação":{
            "pt": "Classificação",
            "en":"Classification"
        },
        "Relatórios de vendas":{
            "pt": "Relatórios de vendas",
            "en":"Sales reports"
        },
        "Gráfico comparativo de vendas":{
            "pt": "Gráfico comparativo de vendas",
            "en":"Sales comparison chart"
        },
        "Acessibilidade":{
            "pt": "Acessibilidade",
            "en":"Accessibility"
        },
        "Sobre":{
            "pt": "Sobre",
            "en":"About"
        },
        "Suporte":{
            "pt": "Suporte",
            "en":"Support"
        },
        "Entrar":{
            "pt": "Entrar",
            "en":"Sign in"
        },
        "Buscar jogo":{
            "pt": "Buscar jogo",
            "en":"Search game"
        },
        "Buscar":{
            "pt": "Buscar",
            "en":"Search"
        },
        "Cadastre seus jogos na nossa plataforma":{
            "pt": "Cadastre seus jogos na nossa plataforma",
            "en":"Register your games on our platform"
        },
        "Publicar":{
            "pt": "Publicar",
            "en":"Publish"
        },
        "Publique já":{
            "pt": "Publique já",
            "en":"Publish now"
        },
        "Fique por dentro dos lançamentos":{
            "pt": "Fique por dentro dos lançamentos",
            "en":"Stay up to date with releases"
        },
        "Digite seu melhor e mail":{
            "pt": "Digite seu melhor e mail",
            "en":"Type your best email"
        },
        "Assinar":{
            "pt": "Assinar",
            "en":"Sign up"
        },
        "Ver mais":{
            "pt": "Ver mais",
            "en":"View more"
        },
        "Ver menos":{
            "pt": "Ver menos",
            "en":"View less"
        },
        "Joguinhos":{
            "pt": "Joguinhos",
            "en":"Minigames"
        },
        "Loja de Skin":{
            "pt": "Loja de Skin",
            "en":"Skin Store"
        },
    }
    return vocabulary[value][language] ? vocabulary[value][language] : value;
}
const mapStateToProps = state => {
    return {
      language: state.language,
    };
};

export default connect(mapStateToProps)(translate);