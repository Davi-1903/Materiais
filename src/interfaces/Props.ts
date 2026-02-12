import type { Dispatch, SetStateAction } from 'react';
import type { Materiais, Question } from './Objects';

export interface FooterProps {
    selected: Materiais;
    setSelected: Dispatch<SetStateAction<Materiais>>;
}

export interface EndProps {
    questions: Question[];
    corrects: number;
    handleRestart: () => void;
}

export interface QuizDisplayProps {
    questionId: number;
    questions: Question[];
    onAnimationEnd: () => void;
}

export interface QuestionsDisplayProps {
    questions: Question[];
    currentQuestionId: number;
}

export interface QuizOptionsProps {
    questions: Question[];
    questionId: number;
    answeredId: number | null;
    toRespond: (isCorrect: boolean) => void;
    handleClick: (id: number) => void;
}

export interface QuestionsOptionsProps {
    questions: Question[];
    currentQuestionId: number;
    answerId: number;
    showAnswer: boolean;
    nextQuestion: () => void;
    toRespond: (id: number) => void;
    setShowExplanation: Dispatch<SetStateAction<boolean>>;
}

export interface Explanation {
    explanation: string;
    setShowExplanation: Dispatch<SetStateAction<boolean>>;
}

export interface FlashCardProps {
    question: string;
    answer: string;
    toRight: boolean;
    setToRight: Dispatch<SetStateAction<boolean>>;
    addToTop: () => void;
    disabled: boolean;
}
