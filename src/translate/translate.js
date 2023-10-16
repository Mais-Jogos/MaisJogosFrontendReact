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
            "en":"News"
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
    }
    return vocabulary[value][language] ? vocabulary[value][language] : value;
}
const mapStateToProps = state => {
    return {
      language: state.language,
    };
};

export default connect(mapStateToProps)(translate);
