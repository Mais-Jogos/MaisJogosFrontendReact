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
        "Plataforma":{
            "pt": "Plataforma",
            "en":"Platform"
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
        "AcessTxt1":{
            "pt": "Este site foi desenvolvido para que pessoas com deficiência visual, baixa visão, daltonismo, deficiência auditiva e mobilidade reduzida possam navegar por meio de recursos como alto contraste, aumento de fonte, teclas de atalho, tradução para a Língua Brasileira de Sinais e navegação por teclado.",
            "en":"This website was developed so that people with visual impairment, low vision, color blindness, hearing impairment and reduced mobility can navigate through features such as high contrast, font enlargement, shortcut keys, translation into Brazilian Sign Language and keyboard navigation ."
        },
        "AcessTxt2":{
            "pt": "Para aumentar a fonte, é só clicar no símbolo de A+ em nossa barra de acessibilidade. Caso queira voltar ao tamanho de fonte original, é só clicar em A-.",
            "en":"To enlarge the font, just click on the A+ symbol in our accessibility bar. If you want to return to the original font size, just click on A-."
        },
        "AcessTxt3":{
            "pt": "Se for necessário, você também pode usar o zoom nativo do seu navegador, pressionando as teclas “Ctrl” e “+” para aumentar todo o site e “Ctrl” e “-“ para diminuir. Para voltar ao padrão, pressione “Ctrl” e “0”.",
            "en":"If necessary, you can also use your browser's native zoom, pressing the “Ctrl” and “+” keys to enlarge the entire site and “Ctrl” and “-“ to zoom out. To return to the default, press “Ctrl” and “0”."
        },
        "AcessTxt4":{
            "pt": "Este site tem melhor acessibilidade quando acessado nas versões mais atualizadas do seu navegador web. Utilize sempre a versão mais recente de seu software.",
            "en":"This site is better accessible when accessed on the most up-to-date versions of your web browser. Always use the most recent version of your software."
        },
        "Contraste":{
            "pt":"Contraste",
            "en":"Contrast"
        },
        "Técnologias assistivas":{
            "pt":"Técnologias assistivas",
            "en":"Assistive technologies"
        },
        "TalkBack para Android":{
            "pt":"TalkBack para Android",
            "en":"TalkBack for Android"
        },
        "TalkBack":{
            "pt":"O TalkBack é o leitor de tela do Google incluso em dispositivos Android. Ele permite que você controle o dispositivo sem usar os olhos. A configuração depende do fabricante do dispositivo, da versão do Android e da versão do TalkBack.",
            "en":"TalkBack is Google's screen reader included on Android devices. It enables you to control the device without using your eyes. The setup depends on the device manufacturer, Android version, and TalkBack version."
        },
        "Narrador para windows":{
            "pt":"Narrador para windows",
            "en":"Narrator for windows"
        },
        "WinNarrator":{
            "pt":"O Narrador é um aplicativo de leitura de tela integrado ao Windows, portanto, não é preciso baixar ou instalá-lo. ",
            "en":"Narrator is a screen-reading app that's built into Windows 10, so there's nothing you need to download or install."
        },
        "VoiceOver para iphone e mac":{
            "pt":"VoiceOver para iphone e mac",
            "en":"VoiceOver for iPhone and Mac"
        },
        "VoiceOver":{
            "pt":"VoiceOver é um leitor de tela desenvolvido pela Apple para seus dispositivos com iOS, como iPhones, iPads e Macs. Ele é projetado para tornar os dispositivos acessíveis a pessoas com deficiência visual, fornecendo uma interface de áudio que descreve as ações, elementos da interface do usuário e conteúdo exibido na tela.",
            "en":"VoiceOver is a screen reader developed by Apple for its iOS devices, such as iPhones, iPads, and Macs. It is designed to make devices accessible to people with visual impairments by providing an audio interface that describes actions, elements of the user interface, and on-screen content."
        },
        "DosVox":{
            "pt":"DosVox",
            "en":"DosVox"
        },
        "DosVoxTxt":{
            "pt":"O projeto DOSVOX é desenvolvido pela Universidade Federal do Rio de Janeiro (NCE/UFRJ) e permite que pessoas com deficiência visual utilizem um microcomputador comum (PC) para desempenhar uma série de tarefas, adquirindo assim um nível alto de independência no estudo e no trabalho.",
            "en":"The DOSVOX project is developed by the Federal University of Rio de Janeiro (NCE/UFRJ) and allows individuals with visual impairments to use a regular personal computer (PC) to perform a variety of tasks, thus achieving a high level of independence in both education and work."
        },
        "VLibras":{
            "pt":"VLibras",
            "en":"VLibras"
        },
        "VlibrasTxt":{
            "pt":"A suite VLibras é um conjunto de ferramentas para copiar e interpretar textos do português para a Língua Brasileira de Sinais. É possível usar essas ferramentas no computador e em smartphones e tablets.",
            "en":"The VLibras suite is a set of tools for copying and interpreting texts from Portuguese into Brazilian Sign Language. You can use these tools on your computer and on smartphones and tablets."
        },
        "Intérpretes digitais":{
            "pt":"Intérpretes digitais",
            "en":"Digital interpreters"
        },
        "Teclas de atalho por navegadores":{
            "pt":"Teclas de atalho por navegadores",
            "en":"Shortcut keys for browsers"
        },
        "Teclas de atalho txt":{
            "pt":"Use a tecla Tab para navegar por elementos que recebem ação do usuário no site, tais como links, botões, campos de formulário e outros na ordem em que eles são apresentados na página, e Shift + Tab para retornar. Use as setas direcionais para acessar as informações textuais.",
            "en":"Use the Tab key to navigate through elements that receive user action on the website, such as links, buttons, form fields and others in the order in which they are presented on the page, and Shift + Tab to return. Use the directional arrows to access textual information."
        },
        "ContrasteIE-GC":{
            "pt":`Internet Explorer e Google Chrome:<br/>
            “Alt” + “c” - Contraste <br/>
            “Alt” + “z” - Sem Contraste <br/>`,
            "en":`Internet Explorer and Google Chrome:<br/>
            “Alt” + “c” - Contrast <br/>
            “Alt” + “z” - No Contrast <br/>`
        },
        "ContrasteFirefox":{
            "pt":`Firefox: <br/>
            “Alt” + “Shift” + “c” - Contraste <br/>
            “Alt” + “Shift” + “z” - Sem Contraste <br/>`,
            "en":`Firefox: <br/>
            “Alt” + “Shift” + “c” - Contrast <br/>
            “Alt” + “Shift” + “z” - No Contrast <br/>`
        },
        "ContrasteOpera":{
            "pt":`Opera: <br/>
            “Shift” + “Escape” + “c” - Contraste <br/>
            “Shift” + “Escape” + “z” - Sem Contraste <br/>`,
            "en":`Opera: <br/>
            “Shift” + “Escape” + “c” - Contrast <br/>
            “Shift” + “Escape” + “z” - No Contrast <br/>`
        },
        "ContrasteSafariOmni":{
            "pt":`Safari e OmniWeb: <br/>
            “Ctrl” + “c” - Contraste <br/>
            “Ctrl” + “z” - Sem Contraste <br/>`,
            "en":`Safari and OmniWeb: <br/>
            “Ctrl” + “c” - Contrast <br/>
            “Ctrl” + “z” - No Contrast <br/>`
        },
        "Aumentar e diminuir fonte":{
            "pt":"Aumentar e diminuir fonte",
            "en":"Increase and decrease font"
        },
        "Leitor de tela":{
            "pt":"Leitor de tela",
            "en":"Text to speech"
        },
        "FonteIE-GC":{
            "pt":`Internet Explorer e Google Chrome:<br/>
            “Alt” + “b” - Aumentar <br/>
            “Alt” + “s” - Diminuir <br/>`,
            "en":`Internet Explorer and Google Chrome:<br/>
            “Alt” + “b” - Increase <br/>
            “Alt” + “s” - Decrease <br/>`
        },
        "FonteFirefox":{
            "pt":`Firefox: <br/>
            “Alt” + “Shift” + “b” - Aumentar <br/>
            “Alt” + “Shift” + “s” - Diminuir <br/>`,
            "en":`Firefox: <br/>
            “Alt” + “Shift” + “b” - Increase <br/>
            “Alt” + “Shift” + “s” - Decrease <br/>`
        },
        "FonteOpera":{
            "pt":`Opera: <br/>
            “Shift” + “Escape” + “b” - Aumentar <br/>
            “Shift” + “Escape” + “s” - Diminuir <br/>`,
            "en":`Opera: <br/>
            “Shift” + “Escape” + “b” - Increase <br/>
            “Shift” + “Escape” + “s” - Decrease <br/>`
        },
        "FonteSafariOmni":{
            "pt":`Safari e OmniWeb: <br/>
            “Ctrl” + “b” - Aumentar <br/>
            “Ctrl” + “s” - Diminuir <br/>`,
            "en":`Safari and OmniWeb: <br/>
            “Ctrl” + “b” - Enlarge <br/>
            “Ctrl” + “s” - Decrease <br/>`
        },
        "AtalhoIE-GC":{
            "pt":`Internet Explorer e Google Chrome:<br/>
            “Alt” + “número” - Navegar pelo cabeçalho <br/>`,
            "en":`Internet Explorer and Google Chrome:<br/>
            “Alt” + “number” - Navigate by header <br/>`
        },
        "leitorTelaAtalhoCI":{
            "pt":`Internet Explorer e Google Chrome:<br/>
            “Alt” + “q” - Ativa e desativa leitor de tela <br/>`,
            "en":`Internet Explorer and Google Chrome:<br/>
            “Alt” + “q” - Turn text to speech ON or OFF  <br/>`
        },
        "AtalhoFirefox":{
            "pt":`Firefox: <br/>
            “Alt” + “Shift” + “número” <br/>`,
            "en":`Firefox: <br/>
            “Alt” + “Shift” + “number” <br/>`
        },
        "leitorTelaAtalhoF":{
            "pt":`Firefox: <br/>
            “Alt” + “Shift” + “q” <br/>`,
            "en":`Firefox: <br/>
            “Alt” + “Shift” + “q” <br/>`
        },
        "AtalhoOpera":{
            "pt":`Opera: <br/>
            “Shift” + “Escape” + “número” <br/>`,
            "en":`Opera: <br/>
            “Shift” + “Escape” + “number” <br/>`
        },
        "leitorTelaAtalhoO":{
            "pt":`Opera: <br/>
            “Shift” + “Escape” + “q” <br/>`,
            "en":`Opera: <br/>
            “Shift” + “Escape” + “q” <br/>`
        },
        "AtalhoSafariOmni":{
            "pt":`Safari e OmniWeb: <br/>
            “Ctrl” + “número” <br/>`,
            "en":`Safari and OmniWeb: <br/>
            “Ctrl” + “number” <br/>`
        },
        "leitorTelaAtalhoS":{
            "pt":`Safari e OmniWeb: <br/>
            “Ctrl” + “q” <br/>`,
            "en":`Safari and OmniWeb: <br/>
            “Ctrl” + “q” <br/>`
        },
        "Cadastrar Review":{
            "pt":"Cadastrar Review",
            "en":"Register Review"
        },
        "Avaliação":{
            "pt":"Avaliação",
            "en":"Rating"
        },
        "Avaliações":{
            "pt":"Avaliações",
            "en":"Ratings"
        },
        "Review":{
            "pt":"Review",
            "en":"Review"
        },
        "Voltar":{
            "pt":"Voltar",
            "en":"Back"
        },
        "Excluir":{
            "pt":"Excluir",
            "en":"Delete"
        },
        "Salvar":{
            "pt":"Salvar",
            "en":"Save"
        },
        "Seu Carrinho":{
            "pt":"Seu Carrinho",
            "en":"Your Cart"
        },
        "Finalizar pedido":{
            "pt":"Finalizar pedido",
            "en":"Finalize order"
        },
        "Continuar comprando":{
            "pt":"Continuar comprando",
            "en":"Keep buying"
        },
        "SubTotal":{
            "pt":"SubTotal",
            "en":"SubTotal"
        },
        "SELECIONAR JOGADOR":{
            "pt":"SELECIONAR JOGADOR",
            "en":"SELECT PLAYER"
        },
        "Gamer":{
            "pt":"Gamer",
            "en":"Gamer"
        },
        "Desenvolvedor":{
            "pt":"Desenvolvedor",
            "en":"Developer"
        },
        "Trocar jogador":{
            "pt":"Trocar jogador",
            "en":"Change player"
        },
        "Faça Login":{
            "pt":"Faça Login",
            "en":"Login"
        },
        "Cadastre-se":{
            "pt":"Cadastre-se",
            "en":"Sign up"
        },
        "Não possui conta":{
            "pt":"Não possui conta",
            "en":"Don't have an account"
        },
        "Já possui uma conta":{
            "pt":"Já possui uma conta",
            "en":"Already have an account"
        },
        "Gerenciamento do Admin":{
            "pt":"Gerenciamento do Admin",
            "en":"Admin Management"
        },
        "Jogos":{
            "pt":"Jogos",
            "en":"Games"
        },
        "Devs":{
            "pt":"Devs",
            "en":"Devs"
        },
        "Users":{
            "pt":"Users",
            "en":"Users"
        },
        "Relatórios":{
            "pt":"Relatórios",
            "en":"Reports"
        },
        "Pagamentos":{
            "pt":"Pagamentos",
            "en":"Payments"
        },
        "Nenhum jogo foi encontrado":{
            "pt":"Nenhum jogo foi encontrado",
            "en":"No games were found"
        },
        "Descrição":{
            "pt":"Descrição",
            "en":"Description"
        },
        "Adicionado ao carrinho":{
            "pt":"Adicionado ao carrinho",
            "en":"Added to cart"
        },
        "Adicionar ao carrinho":{
            "pt":"Adicionar ao carrinho",
            "en":"Add to Cart"
        },
        "Adicionado a lista de desejos":{
            "pt":"Adicionado a lista de desejos",
            "en":"Added to wish list"
        },
        "Adicionar a lista de desejos":{
            "pt":"Adicionar a lista de desejos",
            "en":"Add to wish list"
        },
        "Sobre o jogo":{
            "pt":"Sobre o jogo",
            "en":"About the game"
        },
        "Sobre jogos":{
            "pt":"Sobre jogos",
            "en":"About games"
        },
        "Sobre Desenvolvedor":{
            "pt":"Sobre Desenvolvedor",
            "en":"About developer"
        },
        "Sobre a plataforma":{
            "pt":"Sobre a plataforma",
            "en":"About the platform"
        },
        "Como baixar os jogos":{
            "pt":"Como baixar os jogos",
            "en":"How to download the games"
        },
        "faqBaixarJogos":{
            "pt":"Como baixar os jogos",
            "en":"How to download the games"
        },
        "faqJogosDev":{
            "pt":"Texto que aparecerá quando você clicar no botão de abrir. Após a compra do jogo, você será redirecionado para a área de “Meus jogos”, em seguida aparecerá o jogo com a descrição e o ícone de download, ao clicá-lo o jogo será instalado em seu dispositivo.",
            "en":"Text that will appear when you click the open button. After purchasing the game, you will be redirected to the “My games” area, then the game will appear with the description and the download icon, when you click on it the game will be installed on your device."
        },
        "faqDevPlataforma":{
            "pt":"Após abrir um jogo de sua escolha, irá aparecer um quadro escrito “Mais sobre o jogo”, nesta parte ficará informações sobre o jogo inclusive o nome do desenvolvedor! Apenas clique encima do nome e você será redirecionado automaticamente para o perfil do desenvolvedor e verá os demais jogos desenvovlidos por ele.",
            "en":"After opening a game of your choice, a box will appear saying “More about the game”, in this part you will find information about the game including the name of the developer! Just click on the name and you will automatically be redirected to the developer's profile and see the other games developed by him."
        },
        "Como ver os jogos desenvolvidos do dev":{
            "pt":"Como ver os jogos desenvolvidos do dev",
            "en":"How to see the dev's developed games"
        },
        "Sou desenvolvedor de jogos, como posso usar a plataforma":{
            "pt":"Sou desenvolvedor de jogos, como posso usar a plataforma",
            "en":"I'm a game developer, how can I use the platform"
        },
        "Gênero":{
            "pt":"Gênero",
            "en":"Gender"
        },
        "Data de lançamento":{
            "pt":"Data de lançamento",
            "en":"Release date of"
        },
        "Requisitos do sistema":{
            "pt":"Requisitos do sistema",
            "en":"System Requirements"
        },
        "Mínimos":{
            "pt":"Mínimos",
            "en":"Minimum",
        },
        "Recomendados":{
            "pt":"Recomendados",
            "en":"Recommended"
        },
        "Salvar e sair":{
            "pt":"Salvar e sair",
            "en":"Save and exit"
        },
        "Jogue para ganhar moedas":{
            "pt":"Jogue para ganhar moedas",
            "en":"Play to earn coins"
        },
        "Jogo da Velha":{
            "pt":"Jogo da Velha",
            "en":"Hash"
        },
        "Jokenpo":{
            "pt":"Jokenpo",
            "en":"Jokenpo"
        },
        "Quiz de jogos":{
            "pt":"Quiz de jogos",
            "en":"Games Quiz"
        },
        "Detalhes":{
            "pt":"Detalhes",
            "en":"Details"
        },
        "Lista de desejos":{
            "pt":"Lista de desejos",
            "en":"Wishlist"
        },
        "Relevância":{
            "pt":"Relevância",
            "en":"Relevance"
        },
        "Bem vindo de volta":{
            "pt":"Bem vindo de volta",
            "en":"Welcome back"
        },
        "Admin":{
            "pt":"Admin",
            "en":"Admin"
        },
        "Jogos recém comprados":{
            "pt":"Jogos recém comprados",
            "en":"Newly purchased games"
        },
        "Todos os jogos":{
            "pt":"Todos os jogos",
            "en":"All the games"
        },
        "Requerimento de pagamento":{
            "pt":"Requerimento de pagamento",
            "en":"Payment request"
        },
        "Descrição de pagamento":{
            "pt":"Para que o pagamento seja feito da forma correta preencha suas informações nos campos a baixo com atenção, assim que solicitado, o pagamento cairá na sua conta em até 3 (três) dias úteis",
            "en":"For payment to be made correctly, fill in your information in the fields below carefully, as soon as requested, the payment will reach your account within 3 (three) business days"
        },
        "Pix":{
            "pt":"Pix",
            "en":"Pix"
        },
        "Novo Pix":{
            "pt":"Novo Pix",
            "en":"New Pix"
        },
        "Pix salvo":{
            "pt":"Pix salvo",
            "en":"Pix saved"
        },
        "Telefone":{
            "pt":"Telefone",
            "en":"Telephone"
        },
        "Email":{
            "pt":"Email",
            "en":"Email"
        },
        "Aleatório":{
            "pt":"Aleatório",
            "en":"Random"
        },
        "Cancelar":{
            "pt":"Cancelar",
            "en":"Cancel"
        },
        "Informativo":{
            "pt":"Informativo",
            "en":"Informative"
        },
        "InformativoTxt":{
            "pt":"No caso de não conseguirmos efetuar o pagamento, você receberá um e-mail informativo",
            "en":"If we are unable to make payment, you will receive an informative email"
        },
        "Meu perfil":{
            "pt":"Meu perfil",
            "en":"My profile"
        },
        "Nascimento":{
            "pt":"Nascimento",
            "en":"Birth"
        },
        "Senha":{
            "pt":"Senha",
            "en":"Password"
        },
        "Meus jogos":{
            "pt":"Meus jogos",
            "en":"My games"
        },
        "Dashboard":{
            "pt":"Dashboard",
            "en":"Dashboard"
        },
        "Cadastrar Jogo":{
            "pt":"Cadastrar Jogo",
            "en":"Register Game"
        },
        "Dashboard":{
            "pt":"Dashboard",
            "en":"Dashboard"
        },
        "Review de jogos":{
            "pt":"Review de jogos",
            "en":"Game review"
        },
        "Avatares":{
            "pt":"Avatares",
            "en":"Avatars"
        },
        "Perfil Público Dev":{
            "pt":"Perfil Público Dev",
            "en":"Dev Public Profile"
        },
        "Sobre dev":{
            "pt":"Sobre dev",
            "en":"About dev"
        },
        "Jogos desenvolvidos":{
            "pt":"Jogos desenvolvidos",
            "en":"Games developed"
        },
        "Relatórios de Vendas":{
            "pt":"Relatórios de Vendas",
            "en":"Sales Reports"
        },
        "Gráfico comparativo de vendas":{
            "pt":"Gráfico comparativo de vendas",
            "en":"Sales comparison chart"
        },
        "Valor Total de vendas":{
            "pt":"Valor Total de vendas",
            "en":"Total sales value"
        },
        "Valor Total de lucros":{
            "pt":"Valor Total de lucros",
            "en":"Total profit amount"
        },
        "Status":{
            "pt":"Status",
            "en":"Status"
        },
        "Quantidade de jogos vendidos":{
            "pt":"Quantidade de jogos vendidos",
            "en":"Number of games sold"
        },
        "Nome do Jogo":{
            "pt":"Nome do Jogo",
            "en":"Game Name"
        },
        "Nome do Dev":{
            "pt":"Nome do Dev",
            "en":"Dev Name"
        },
        "Jogos mais vendidos":{
            "pt":"Jogos mais vendidos",
            "en":"Best-selling games"
        },
        "Quantidade de clientes cadastrados":{
            "pt":"Quantidade de clientes cadastrados",
            "en":"Number of registered customers"
        },
        "Quantidade de jogos cadastrados":{
            "pt":"Quantidade de jogos cadastrados",
            "en":"Number of registered games"
        },
        "Quantidade de Devs cadastrados":{
            "pt":"Quantidade de Devs cadastrados",
            "en":"Number of registered Devs"
        },
        "Imprimir":{
            "pt":"Imprimir",
            "en":"Print out"
        },
        "Alcance mensal de vendas":{
            "pt":"Alcance mensal de vendas",
            "en":"Monthly sales reach"
        },
        "Quantidade de jogos comprados":{
            "pt":"Quantidade de jogos comprados",
            "en":"Number of games purchased"
        },
        "Valor Total":{
            "pt":"Valor Total",
            "en":"Amount"
        },
        "SubTotal Vendas":{
            "pt":"SubTotal Vendas",
            "en":"SubTotal Sales"
        },
        "Desconto de":{
            "pt":"Desconto de",
            "en":"Discount from"
        },
        "Imprimir":{
            "pt":"Imprimir",
            "en":"Print out"
        },
        "DescricaoDevPub":{
            "pt": "Para ter sucesso como desenvolvedor de jogos é preciso ter muita dedicação e paixão pelo que faz. É importante estar sempre atualizado sobre as novidades do mercado e buscar inspiração em outras áreas além dos jogos. Afinal, a criatividade é um dos principais ingredientes para o sucesso nessa área.",
            "en": "To be successful as a game developer you need to have a lot of dedication and passion for what you do. It is important to always be up to date with market news and seek inspiration from areas other than games. After all, creativity is one of the main ingredients for success in this area."
        },
        "Sobre dev":{
            "pt": "Sobre dev",
            "en": "About Dev"
        },
        "Posição no ranking":{
            "pt": "Posição no ranking",
            "en": "Ranking position"
        },
        "TituloReview":{
            "pt": "Titulo Review",
            "en": "Title Review"
        },
        "Cadastrar mais Skins":{
            "pt": "Cadastrar mais Skins",
            "en": "Register more Skins"
        },
        "Excluir Skins":{
            "pt": "Excluir Skins",
            "en": "Delete Skins"
        },
        "Visitantes":{
            "pt": "Visitantes",
            "en": "Visitors"
        },
        "Dados":{
            "pt": "Dados",
            "en": "Data"
        },
        "Requisitos":{
            "pt": "Requisitos",
            "en": "Requirements"
        },
        "Preencha todas as informações":{
            "pt": "Preencha todas as informações",
            "en": "Fill in all the information"
        },
        "Próximo":{
            "pt": "Próximo",
            "en": "Next"
        },
        "Cadastrar":{
            "pt": "Cadastrar",
            "en": "Register"
        },
        "Titulo":{
            "pt": "Titulo",
            "en": "Title"
        },
        "Gêneros":{
            "pt": "Gêneros",
            "en": "Genres"
        },
        "Ação":{
            "pt": "Ação",
            "en": "Action"
        },
        "Arcade":{
            "pt": "Arcade",
            "en": "Arcadian"
        },
        "Aventura":{
            "pt": "Aventura",
            "en": "Adventure"
        },
        "Casual":{
            "pt": "Casual",
            "en": "Casual"
        },
        "Corrida":{
            "pt": "Corrida",
            "en": "Race"
        },
        "Esportes":{
            "pt": "Esportes",
            "en": "Sports"
        },
        "Estratégia":{
            "pt": "Estratégia",
            "en": "Strategy"
        },
        "Luta":{
            "pt": "Luta",
            "en": "Fight"
        },
        "Puzzle":{
            "pt": "Puzzle",
            "en": "Puzzle"
        },
        "Rpg":{
            "pt": "Rpg",
            "en": "Rpg"
        },
        "Shooter":{
            "pt": "Shooter",
            "en": "Shooter"
        },
        "Terror":{
            "pt": "Terror",
            "en": "Horror"
        },
        "Concluir":{
            "pt": "Concluir",
            "en": "Conclude"
        },
        "Nome da Skin":{
            "pt": "Nome da Skin",
            "en": "Skin Name"
        },
        "Upload da Skin":{
            "pt": "Upload da Skin",
            "en": "Skin Upload"
        },
        "Valor da Skin":{
            "pt": "Valor da Skin",
            "en": "Skin Value"
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