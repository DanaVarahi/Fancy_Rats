import Rat from './Rat'

const RatList = ({rats, generateRatIcon}) => {
    
    const RatDetail = rats.map( rat => {
        const ratIcon = generateRatIcon(rat)
        return (
            <Rat key={rat._id} name={rat.name} age={rat.age} coloring={rat.coloring} eyes={rat.eyes} markings= {rat.markings} body={rat.body} coat ={rat.coat} ratIcon={ratIcon}>{rat.name}</Rat>
        )
    })

    return(
        <ul>
            {RatDetail}
        </ul>
    )
}

export default RatList