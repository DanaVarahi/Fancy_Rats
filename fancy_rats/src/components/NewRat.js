const NewRat = ({addNewRat}) => {
return (
    <>
        <h2>Add New Rattie</h2>
        <form onSubmit={addNewRat}>
            <label for="name">Name:</label>
            <input type="text" id="name" name="name"></input>
            <div id="age-form">
                <p>Age:</p>
                <label for="years">Years:</label>
                <input type="text" id="years" name="years"></input>
                <label for="months">Months:</label>
                <input type="text" id="months" name="months"></input>
            </div>
            <label for="color">Color:</label>
            <select id="color" name="color">
                <option value="agouti">agouti</option>
                <option value="cinnamon">cinnamon</option>
                <option value="fawn">fawn</option>
                <option value="beige">beige</option>
                <option value="black">black</option>
                <option value="blue">blue</option>
                <option value="chocolate">chocolate</option>
            </select>
            <label for="eyes">Eyes:</label>
            <select id="eyes" name="eyes">
                <option value="black">black</option>
                <option value="ruby">ruby</option>
                <option value="pink">pink</option>
                <option value="odd-eyed">odd-eyed</option>
            </select>
            <label for="markings">Markings:</label>
            <select id="markings" name="markings">
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
            <input type="submit"></input>
        </form>
    </>
)
}

export default NewRat