export type Materiais = 'questions' | 'flashcards' | 'quiz';

export interface Question {
    id: number;
    question: string;
    answers: { id: number; text: string }[];
    correctAnswerId: number;
    explanation?: string;
}

export interface FlashCard {
    id: number;
    question: string;
    answer: string;
}
