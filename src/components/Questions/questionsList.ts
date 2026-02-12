import type { Question } from '../../interfaces/Objects';

const questions: Question[] = [
    {
        id: 1,
        question: 'O que significa HTML?',
        answers: [
            { id: 1, text: 'HyperText Markup Language' },
            { id: 2, text: 'HighText Machine Language' },
            { id: 3, text: 'Hyperlink and Text Markup Language' },
            { id: 4, text: 'Home Tool Markup Language' },
        ],
        correctAnswerId: 1,
        explanation:
            'HTML significa HyperText Markup Language. Ele não é uma linguagem de programação, mas sim uma linguagem de marcação usada para estruturar o conteúdo da web. Com HTML você define títulos, parágrafos, links, imagens e a hierarquia básica de uma página.',
    },
    {
        id: 2,
        question: 'Qual linguagem roda no navegador?',
        answers: [
            { id: 1, text: 'Python' },
            { id: 2, text: 'Java' },
            { id: 3, text: 'C++' },
            { id: 4, text: 'JavaScript' },
        ],
        correctAnswerId: 4,
        explanation:
            'JavaScript é a linguagem executada diretamente pelo navegador. Ela permite adicionar interatividade às páginas, como cliques, animações, validação de formulários e comunicação com servidores, tudo sem precisar recarregar a página.',
    },
    {
        id: 3,
        question: 'O que é CSS?',
        answers: [
            { id: 1, text: 'Uma linguagem de marcação' },
            { id: 2, text: 'Uma linguagem de estilo' },
            { id: 3, text: 'Um banco de dados' },
            { id: 4, text: 'Um framework JavaScript' },
        ],
        correctAnswerId: 2,
        explanation:
            'CSS é a linguagem responsável pelo estilo visual da página. Ela define cores, fontes, espaçamentos, layouts e animações. Enquanto o HTML estrutura o conteúdo, o CSS decide como tudo vai parecer.',
    },
    {
        id: 4,
        question: 'Qual método adiciona um item ao final de um array?',
        answers: [
            { id: 1, text: 'push()' },
            { id: 2, text: 'pop()' },
            { id: 3, text: 'shift()' },
            { id: 4, text: 'unshift()' },
        ],
        correctAnswerId: 1,
        explanation:
            'O método push() adiciona um ou mais elementos ao final de um array. Ele altera o array original e retorna o novo tamanho do array após a inserção.',
    },
    {
        id: 5,
        question: 'O que significa API?',
        answers: [
            { id: 1, text: 'Application Programming Interface' },
            { id: 2, text: 'Advanced Programming Internet' },
            { id: 3, text: 'Application Process Integration' },
            { id: 4, text: 'Advanced Process Interface' },
        ],
        correctAnswerId: 1,
        explanation:
            'API significa Application Programming Interface. Ela define regras e endpoints que permitem que diferentes sistemas se comuniquem entre si, trocando dados de forma organizada e segura.',
    },
    {
        id: 6,
        question: 'Qual hook é usado para estado no React?',
        answers: [
            { id: 1, text: 'useEffect' },
            { id: 2, text: 'useState' },
            { id: 3, text: 'useContext' },
            { id: 4, text: 'useRef' },
        ],
        correctAnswerId: 2,
        explanation:
            'useState é o hook usado para criar e gerenciar estado dentro de componentes funcionais. Ele permite que o React saiba quando algo mudou e precise re-renderizar o componente.',
    },
    {
        id: 7,
        question: 'Qual comando cria um repositório Git?',
        answers: [
            { id: 1, text: 'git start' },
            { id: 2, text: 'git init' },
            { id: 3, text: 'git new' },
            { id: 4, text: 'git create' },
        ],
        correctAnswerId: 2,
        explanation:
            'git init cria um novo repositório Git na pasta atual. A partir desse comando, o projeto passa a ser versionado, permitindo commits, histórico e controle de mudanças.',
    },
    {
        id: 8,
        question: 'O que é JSON?',
        answers: [
            { id: 1, text: 'Uma linguagem de programação' },
            { id: 2, text: 'Um formato de dados' },
            { id: 3, text: 'Um banco de dados' },
            { id: 4, text: 'Um framework' },
        ],
        correctAnswerId: 2,
        explanation:
            'JSON é um formato leve de troca de dados baseado em texto. Ele é muito usado em APIs porque é fácil de ler por humanos e simples de ser interpretado por máquinas.',
    },
    {
        id: 9,
        question: 'Qual operador compara valor e tipo em JS?',
        answers: [
            { id: 1, text: '==' },
            { id: 2, text: '=' },
            { id: 3, text: '===' },
            { id: 4, text: '!=' },
        ],
        correctAnswerId: 3,
        explanation:
            'O operador === compara tanto o valor quanto o tipo da variável. Ele evita coerções automáticas do JavaScript, tornando o código mais previsível e seguro.',
    },
    {
        id: 10,
        question: 'Qual desses NÃO é um tipo primitivo em JS?',
        answers: [
            { id: 1, text: 'string' },
            { id: 2, text: 'number' },
            { id: 3, text: 'boolean' },
            { id: 4, text: 'object' },
        ],
        correctAnswerId: 4,
        explanation:
            'Tipos primitivos são valores simples e imutáveis. Object não é primitivo, pois pode conter múltiplos valores e estruturas internas complexas.',
    },

    {
        id: 21,
        question: 'O que o método map() faz em um array?',
        answers: [
            { id: 1, text: 'Filtra elementos' },
            { id: 2, text: 'Transforma cada elemento' },
            { id: 3, text: 'Remove elementos' },
            { id: 4, text: 'Ordena o array' },
        ],
        correctAnswerId: 2,
        explanation:
            'map() percorre o array original e cria um novo array com os valores transformados. Ele não altera o array original e é muito usado para renderizar listas no React.',
    },
    {
        id: 22,
        question: 'Qual método remove o último elemento de um array?',
        answers: [
            { id: 1, text: 'shift()' },
            { id: 2, text: 'splice()' },
            { id: 3, text: 'pop()' },
            { id: 4, text: 'slice()' },
        ],
        correctAnswerId: 3,
        explanation: 'pop() remove o último elemento do array e retorna esse valor. Ele altera o array original.',
    },
    {
        id: 23,
        question: 'O que significa DOM?',
        answers: [
            { id: 1, text: 'Document Object Model' },
            { id: 2, text: 'Data Object Management' },
            { id: 3, text: 'Digital Ordinance Model' },
            { id: 4, text: 'Document Order Map' },
        ],
        correctAnswerId: 1,
        explanation:
            'DOM é a representação da estrutura HTML em forma de objetos que o JavaScript consegue manipular. Graças ao DOM, é possível alterar textos, estilos e elementos dinamicamente.',
    },
    {
        id: 24,
        question: 'Qual evento é disparado ao clicar em um elemento?',
        answers: [
            { id: 1, text: 'onchange' },
            { id: 2, text: 'onsubmit' },
            { id: 3, text: 'onclick' },
            { id: 4, text: 'onload' },
        ],
        correctAnswerId: 3,
        explanation:
            'onclick é disparado sempre que o usuário clica em um elemento. Ele é usado para executar ações como abrir modais, enviar dados ou alterar estados.',
    },
    {
        id: 25,
        question: 'Qual método faz uma requisição HTTP no fetch?',
        answers: [
            { id: 1, text: 'request()' },
            { id: 2, text: 'fetch()' },
            { id: 3, text: 'axios()' },
            { id: 4, text: 'http()' },
        ],
        correctAnswerId: 2,
        explanation:
            'fetch() é a API nativa do navegador para fazer requisições HTTP. Ela retorna uma Promise e é amplamente usada para consumir APIs REST.',
    },
    {
        id: 26,
        question: 'Qual hook compartilha dados globalmente no React?',
        answers: [
            { id: 1, text: 'useMemo' },
            { id: 2, text: 'useContext' },
            { id: 3, text: 'useReducer' },
            { id: 4, text: 'useCallback' },
        ],
        correctAnswerId: 2,
        explanation:
            'useContext permite compartilhar dados entre vários componentes sem precisar passar props manualmente em todos os níveis da árvore.',
    },
    {
        id: 27,
        question: 'O que o método filter() retorna?',
        answers: [
            { id: 1, text: 'Um único valor' },
            { id: 2, text: 'Um boolean' },
            { id: 3, text: 'Um novo array filtrado' },
            { id: 4, text: 'O array original alterado' },
        ],
        correctAnswerId: 3,
        explanation:
            'filter() cria um novo array contendo apenas os elementos que atendem a uma condição. Ele não modifica o array original.',
    },
    {
        id: 28,
        question: 'Qual palavra define uma função assíncrona?',
        answers: [
            { id: 1, text: 'defer' },
            { id: 2, text: 'await' },
            { id: 3, text: 'async' },
            { id: 4, text: 'promise' },
        ],
        correctAnswerId: 3,
        explanation:
            'async indica que a função trabalha de forma assíncrona e sempre retorna uma Promise, permitindo o uso de await dentro dela.',
    },
    {
        id: 29,
        question: 'Qual ferramenta empacota módulos no frontend?',
        answers: [
            { id: 1, text: 'Webpack' },
            { id: 2, text: 'Postman' },
            { id: 3, text: 'MongoDB' },
            { id: 4, text: 'Docker' },
        ],
        correctAnswerId: 1,
        explanation:
            'Webpack é um bundler que empacota arquivos JavaScript, CSS e outros assets, preparando a aplicação para produção.',
    },
    {
        id: 30,
        question: 'O que significa SPA?',
        answers: [
            { id: 1, text: 'Single Process Application' },
            { id: 2, text: 'Simple Page Access' },
            { id: 3, text: 'Single Page Application' },
            { id: 4, text: 'Server Page Application' },
        ],
        correctAnswerId: 3,
        explanation:
            'SPA é uma aplicação que carrega uma única página HTML e atualiza o conteúdo dinamicamente, oferecendo uma experiência mais rápida e fluida ao usuário.',
    },
];

export default questions;
