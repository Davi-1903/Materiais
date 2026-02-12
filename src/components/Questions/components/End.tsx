import type { EndProps } from '../../../interfaces/Props';

export default function End({ questions, corrects, handleRestart }: EndProps) {
    return (
        <>
            <h1 className='text-[3.6rem] font-bold text-gray-800'>Fim!</h1>
            <h2 className='text-[1.2rem] font-semibold text-gray-600'>
                {corrects}/{questions.length}
            </h2>
            <button
                className='cursor-pointer rounded-xl border-2 border-[#5050fe] bg-[#3636ff] px-4 py-2 text-lg font-semibold text-white transition-all duration-100 hover:scale-102'
                onClick={handleRestart}
            >
                Reiniciar
            </button>
        </>
    );
}
