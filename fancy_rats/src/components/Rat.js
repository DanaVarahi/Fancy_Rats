const Rat =({name, age, coloring, eyes, markings, body, coat, ratIcon }) => {
    
    return(
        <li>
            <img src={ratIcon} alt="rat icon" className="ratIcon"></img>
            <h2>{name}</h2>
            <h3>{age.years} yr. {age.months} mo. old</h3>
            <p className="color"><b>Color:</b> {coloring}</p>
            <p className="eyes"><b>Eyes:</b> {eyes}</p>
            <p className="mark"><b>Markings:</b> {markings}</p>
            <p className="body"><b>Body Type:</b> {body}</p>
            <p className="coat"><b>Coat:</b> {coat}</p>
        </li>

    )
}

export default Rat