const Rat =({name, age, coloring, eyes, markings, body, coat}) => {
    return(
        <li>
            <h2>{name}</h2>
            <h3>{age.years} years and {age.months} months old</h3>
            <p>Color: {coloring}</p>
            <p>Eyes: {eyes}</p>
            <p>Markings: {markings}</p>
            <p>Body Type: {body}</p>
            <p>Coat: {coat}</p>
        </li>

    )
}

export default Rat