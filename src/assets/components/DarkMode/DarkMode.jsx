function DarkMode(){
    return(
        <input type="checkbox" name="darkmode" id="darkmode" />,

        <label className='label' for="darkmode">
            <i class="fas fa-moon"></i>
            <i class="fas fa-sun"></i>
            <div className="ball"></div>
        </label>
    )

}

export default DarkMode;