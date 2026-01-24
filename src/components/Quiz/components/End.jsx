export default function End({ questions, corrects, handleRestart }) {
    return (
        <>
            <h1 className='text-[4.8rem] font-bold text-gray-800'>Fim!</h1>
            <h2 className='text-[2.4rem] font-semibold text-gray-800'>
                {corrects}/{questions.length}
            </h2>
            <button
                className='cursor-pointer rounded-xl border-2 border-gray-800 px-4 py-2 text-[1.2rem] font-semibold text-gray-800 transition-all duration-100 hover:border-[#5050fe] hover:bg-[#3636ff] hover:text-white'
                onClick={handleRestart}
            >
                Reiniciar
            </button>
        </>
    );
}
