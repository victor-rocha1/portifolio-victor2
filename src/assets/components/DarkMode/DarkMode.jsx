import './darkmode.css'

function DarkMode() {
    return (
        <>
            <input type="checkbox" name="darkmode" id="darkmode" className="checkbox" />
            <label className='label' htmlFor="darkmode">
                <i className="fas fa-moon"></i>
                <i className="fas fa-sun"></i>
                <div className="ball"></div>
            </label>
        </>
    );
}

export default DarkMode;