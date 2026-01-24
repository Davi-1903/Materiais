export default function Footer({ selected, setSelected }) {
    return (
        <footer className='fixed bottom-4 left-1/2 z-10 -translate-x-1/2 rounded-2xl bg-white p-4 shadow-2xl'>
            <nav>
                <ul className='grid grid-cols-3 gap-4'>
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
