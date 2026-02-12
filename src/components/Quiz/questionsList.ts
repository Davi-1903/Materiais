import type { Question } from '../../interfaces/Objects';

const questions: Question[] = [
    {
        id: 1,
        question: 'O que o método map() faz em um array?',
        answers: [
            { id: 1, text: 'Filtra elementos' },
            { id: 2, text: 'Transforma cada elemento' },
            { id: 3, text: 'Remove elementos' },
            { id: 4, text: 'Ordena o array' },
        ],
        correctAnswerId: 2,
    },
    {
        id: 2,
        question: 'Qual método remove o último elemento de um array?',
        answers: [
            { id: 1, text: 'shift()' },
            { id: 2, text: 'splice()' },
            { id: 3, text: 'pop()' },
            { id: 4, text: 'slice()' },
        ],
        correctAnswerId: 3,
    },
    {
        id: 3,
        question: 'O que significa DOM?',
        answers: [
            { id: 1, text: 'Document Object Model' },
            { id: 2, text: 'Data Object Management' },
            { id: 3, text: 'Digital Ordinance Model' },
            { id: 4, text: 'Document Order Map' },
        ],
        correctAnswerId: 1,
    },
    {
        id: 4,
        question: 'Qual evento é disparado ao clicar em um elemento?',
        answers: [
            { id: 1, text: 'onchange' },
            { id: 2, text: 'onsubmit' },
            { id: 3, text: 'onclick' },
            { id: 4, text: 'onload' },
        ],
        correctAnswerId: 3,
    },
    {
        id: 5,
        question: 'Qual método faz uma requisição HTTP no fetch?',
        answers: [
            { id: 1, text: 'request()' },
            { id: 2, text: 'fetch()' },
            { id: 3, text: 'axios()' },
            { id: 4, text: 'http()' },
        ],
        correctAnswerId: 2,
    },
    {
        id: 6,
        question: 'Qual hook compartilha dados globalmente no React?',
        answers: [
            { id: 1, text: 'useMemo' },
            { id: 2, text: 'useContext' },
            { id: 3, text: 'useReducer' },
            { id: 4, text: 'useCallback' },
        ],
        correctAnswerId: 2,
    },
    {
        id: 7,
        question: 'O que o método filter() retorna?',
        answers: [
            { id: 1, text: 'Um único valor' },
            { id: 2, text: 'Um boolean' },
            { id: 3, text: 'Um novo array filtrado' },
            { id: 4, text: 'O array original alterado' },
        ],
        correctAnswerId: 3,
    },
    {
        id: 8,
        question: 'Qual palavra define uma função assíncrona?',
        answers: [
            { id: 1, text: 'defer' },
            { id: 2, text: 'await' },
            { id: 3, text: 'async' },
            { id: 4, text: 'promise' },
        ],
        correctAnswerId: 3,
    },
    {
        id: 9,
        question: 'Qual ferramenta empacota módulos no frontend?',
        answers: [
            { id: 1, text: 'Webpack' },
            { id: 2, text: 'Postman' },
            { id: 3, text: 'MongoDB' },
            { id: 4, text: 'Docker' },
        ],
        correctAnswerId: 1,
    },
    {
        id: 10,
        question: 'O que significa SPA?',
        answers: [
            { id: 1, text: 'Single Process Application' },
            { id: 2, text: 'Simple Page Access' },
            { id: 3, text: 'Single Page Application' },
            { id: 4, text: 'Server Page Application' },
        ],
        correctAnswerId: 3,
    },
];

export default questions;
