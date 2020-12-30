const Rat =({name, age, coloring, eyes, markings, body, coat}) => {
    
    return(
        <li>
            <h2>{name}</h2>
            <h3>{age.years} yr. {age.months} mo. old</h3>
            <p><b>Color:</b> {coloring}</p>
            <p><b>Eyes:</b> {eyes}</p>
            <p><b>Markings:</b> {markings}</p>
            <p><b>Body Type:</b> {body}</p>
            <p><b>Coat:</b> {coat}</p>
        </li>

    )
}

export default Rat