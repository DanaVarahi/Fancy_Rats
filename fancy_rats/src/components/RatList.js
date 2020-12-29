import Rat from './Rat'

const RatList = ({rats}) => {
    const RatDetail = rats.map( rat => {
        return (
            <Rat key={rat.id} name={rat.name} age={rat.age} coloring={rat.coloring} eyes={rat.eyes} markings= {rat.markings} body={rat.body} coat ={rat.coat}>{rat.name}</Rat>
        )
    })

    return(
        <ul>
            {RatDetail}
        </ul>
    )
}

export default RatList