const RatKing = ({rats}) => {

    const ratKingAge = () => {

        let totalYears = 0
        let totalMonths = 0

        rats.forEach((rat) => {
            
            totalYears += rat.age.years
            totalMonths += rat.age.months  
            console.log("y" + totalYears)
            console.log("m" + totalMonths)
        })

        return getAgeTotal(totalYears, totalMonths)
    }

    const getAgeTotal = (years, months) => {
        console.log("years:" + years)
        console.log("months:" + months)
        let ageYears = years
        let ageMonths = months

        ageYears += Math.floor(ageMonths / 12)
        ageMonths = ageMonths % 12

        const ageTotal = ageYears + "years and " + ageMonths + "months"
        return ageTotal
    }
    


    return (
        <p>Rat King is {ratKingAge()}</p>
    )
}

export default RatKing