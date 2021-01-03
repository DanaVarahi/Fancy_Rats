import React, {useState} from "react";

const NewRat = ({submitNewRat}) => {

 const [name, setName] = useState("")
 const [years, setYears] = useState(0)
 const [months, setMonths] = useState(0)
 const [color, setColor] = useState("")
 const [eyes, setEyes] = useState("")
 const [markings, setMarkings] = useState("")

 const hanldeNameChange = (evt) => {
     setName(evt.target.value)
 }

 const handleYearChange = (evt) => {
     setYears(evt.target.value)
 }

 const handleMonthChange = (evt) => {
     setMonths(evt.target.value)
 }

 const handleColorChange = (evt) => {
     setColor(evt.target.value)
 }

 const handleEyesChange = (evt) => {
     setEyes(evt.target.value)
 }

 const handleMarkingschange = (evt) => {
     setMarkings(evt.target.value)
 }

 const handleFormSubmit = (evt) => {
    evt.preventDefault();
    const nameToSubmit = name.trim()
    const yearsToSubmit = years
    const monthsToSubmit = months
    const colorToSubmit = color
    const eyesToSubmit = eyes
    const markingsToSubmit = markings
    
    submitNewRat({
        name: nameToSubmit,
        age: {
            years: yearsToSubmit,
            months: monthsToSubmit
        },
        coloring: colorToSubmit,
        eyes: eyesToSubmit,
        markings: markingsToSubmit
    })

    setName("")
    setYears(0)
    setMonths(0)
    setColor("")
    setEyes("")
    setMarkings("")
 }

return (
    <>
        <h2>Add New Rattie</h2>
        <form onSubmit={handleFormSubmit}>
            <label for="name">Name:</label>
            <input type="text" id="name" value={name} onChange={hanldeNameChange} required></input>
            <div id="age-form">
                <p>Age:</p>
                <label for="years">Years:</label>
                <input type="text" id="years" value={years} onChange={handleYearChange} required></input>
                <label for="months">Months:</label>
                <input type="text" id="months" value={months} onChange={handleMonthChange} required></input>
            </div>
            <label for="color">Color:</label>
            <select id="color" name="color" onChange={handleColorChange}>
                <option value="agouti" >agouti</option>
                <option value="cinnamon">cinnamon</option>
                <option value="fawn">fawn</option>
                <option value="beige">beige</option>
                <option value="black">black</option>
                <option value="blue">blue</option>
                <option value="chocolate">chocolate</option>
            </select>
            <label for="eyes">Eyes:</label>
            <select id="eyes" name="eyes"onChange={handleEyesChange} >
                <option value="black">black</option>
                <option value="ruby">ruby</option>
                <option value="pink">pink</option>
                <option value="odd-eyed">odd-eyed</option>
            </select>
            <label for="markings">Markings:</label>
            <select id="markings" name="markings" onChange={handleMarkingschange}>
                <option value="self">self</option>
                <option value="capped">capped</option>
                <option value="hooded">hooded</option>
                <option value="Berkshire">Berkshire</option>
                <option value="variegated">variegated</option>
                <option value="Irish">Irish</option>
                <option value="blazed">blazed</option>
                <option value="Himalayan">Himalayan</option>
            </select>
            <label for="coat">Coat:</label>
            <select id="coat" name="coat">
                <option value="standard">standard</option>
                <option value="hairless">hairless</option>
                <option value="Harley">Harley</option>
                <option value="rex">rex</option>
                <option value="satin">satin</option>
            </select>
            <input type="radio" id="top-ear" name="body" value="Top Ear"></input>
            <label for="top-ear">Top Ear</label>
            <input type="radio" id="dumbo" name="body" value="Dumbo"></input>
            <label for="dumbo">Dumbo</label>
            <input type="radio" id="manx" name="body" value="Manx"></input>
            <label for="manx">Manx</label>
            <input type="submit" value="Add"></input>
        </form>
    </>
)
}

export default NewRat