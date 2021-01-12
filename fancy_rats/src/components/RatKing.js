const RatKing = ({rats}) => {

    const ratKingAge = () => {

        let totalYears = 0
        let totalMonths = 0

        rats.forEach((rat) => {
            
            totalYears += rat.age.years
            totalMonths += rat.age.months  
        })

        return getAgeTotal(totalYears, totalMonths)
    }

    const getAgeTotal = (years, months) => {
     
        let ageYears = years
        let ageMonths = months

        ageYears += Math.floor(ageMonths / 12)
        ageMonths = ageMonths % 12

        const ageTotal = ageYears + " years and " + ageMonths + " months"
        return ageTotal
    }

    const getBodyTotals = () => {
        const bodyTotals = {}

        rats.forEach((rat) => {
            if (rat.body in bodyTotals){
                bodyTotals[rat.body]++
            } else {
                bodyTotals[rat.body] = 1
            }
        })

        return bodyTotals
    }

    const calculateBodyPercentages = () => {
       
        const bodyTotals = getBodyTotals()
        const totalRats = rats.length
        const bodyPercentages = {}

        for (const bodyType in bodyTotals){
            bodyPercentages[bodyType]= Math.round(bodyTotals[bodyType] / totalRats * 100)
        }
        
        return bodyPercentages  
    }
  

    return (
        <>
        <p>Rat King is {ratKingAge()} old</p>
        <p>{}</p>
        </>
    )
}

export default RatKing