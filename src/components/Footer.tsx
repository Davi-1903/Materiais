import type { FooterProps } from '../interfaces/Props';

export default function Footer({ selected, setSelected }: FooterProps) {
    return (
        <footer className='fixed bottom-0 left-0 z-10 w-full bg-white p-2 shadow-2xl sm:bottom-4 sm:left-1/2 sm:w-fit sm:-translate-x-1/2 sm:rounded-2xl sm:p-4'>
            <nav>
                <ul className='flex justify-center gap-4'>
                    <li>
                        <button
                            className='primary-btn w-full disabled:cursor-no-drop disabled:opacity-50'
                            disabled={selected === 'questions'}
                            onClick={() => setSelected('questions')}
                        >
                            Questões
                        </button>
                    </li>
                    <li>
                        <button
                            className='primary-btn w-full disabled:cursor-no-drop disabled:opacity-50'
                            disabled={selected === 'flashcards'}
                            onClick={() => setSelected('flashcards')}
                        >
                            FlashCards
                        </button>
                    </li>
                    <li>
                        <button
                            className='primary-btn w-full disabled:cursor-no-drop disabled:opacity-50'
                            disabled={selected === 'quiz'}
                            onClick={() => setSelected('quiz')}
                        >
                            Quiz
                        </button>
                    </li>
                </ul>
            </nav>
        </footer>
    );
}
