import { useState } from 'react'

function NoodleForm({ onSubmitNewNoodle }) {

    const [brand, setBrand] = useState("")
    const [flavor, setFlavor] = useState("")
    const [image, setImage] = useState("")
    const [birthplace, setBirthplace] = useState("")
    const [style, setStyle] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        let noodleInput = {
            brand: brand,
            flavor: flavor,
            image: image,
            birthplace: birthplace,
            style: style
        }
        // console.log(noodleInput)
        fetch('/noodles', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(noodleInput)
        })
            .then(res => {
                if(res.ok) {
                    res.json()
                    .then(newNoodle => onSubmitNewNoodle(newNoodle))
                }
            })
        setBrand("")
        setFlavor("")
        setImage("")
        setBirthplace("")
        setStyle("")
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="brand">Brand</label>
                <input  
                    required
                    type="text" 
                    name="brand" 
                    value={brand}
                    onChange={e => setBrand(e.target.value)}
                />
                <label htmlFor="flavor">Flavor</label>
                <input
                    required
                    type="text" 
                    name="flavor" 
                    value={flavor}
                    onChange={e => setFlavor(e.target.value)}
                />
                <label htmlFor="image">Image</label>
                <input  
                    required
                    type="text" 
                    name="image" 
                    value={image}
                    onChange={e => setImage(e.target.value)}
                />
                <label htmlFor="birthplace">Birthplace</label>
                <input
                    type="text" 
                    name="birthplace" 
                    value={birthplace}
                    onChange={e => setBirthplace(e.target.value)}
                />
                <br/>
                <label htmlFor="style">Style</label>
                <input  
                    type="text" 
                    name="style" 
                    value={style}
                    onChange={e => setStyle(e.target.value)}
                />
                <br/>
                <button type="submit">Add Noodle</button>
            </form>
        </div>
    )
}

export default NoodleForm