import { useState, useEffect } from 'react';
import './darkmode.css';

function DarkMode() {
    // Declaramos o estado fora do useEffect
    const [darkMode, setDarkMode] = useState(false);

    // useEffect para adicionar/remover a classe 'dark' no body
    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }, [darkMode]); // 'darkMode' como dependência para re-executar ao mudar

    return (
        <>
            {/* Atualiza o estado 'darkMode' ao clicar no checkbox */}
            <input 
                type="checkbox" 
                name="darkmode" 
                id="darkmode" 
                className="checkbox" 
                onChange={() => setDarkMode(!darkMode)} 
                checked={darkMode} 
            />
            <label className='label' htmlFor="darkmode">
                <i className="fas fa-moon"></i>
                <i className="fas fa-sun"></i>
                <div className="ball"></div>
            </label>
        </>
    );
}

export default DarkMode;