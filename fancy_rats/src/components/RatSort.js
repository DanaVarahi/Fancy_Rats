const RatSort = ({handleSortSelection, sortOptions }) => {

    // const sortOptions = ['names', 'eyes']
    const options = sortOptions.map(option => {
        return <option key={option} value={option}>{option}</option>
    }) 

    return (
        <div id="sort">
            <select onChange={(evt) => handleSortSelection(evt.target.value)}>
                 <option defaultValue>Sort by </option>
                {options}
        </select>
        </div>
      
    )
}

export default RatSort