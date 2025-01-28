import './darkmode.css';

function DarkMode({ darkMode, setDarkMode }) {
  return (
    <>
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