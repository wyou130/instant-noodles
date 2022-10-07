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
                alert('Noodle successfully added!')
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
                <div className='form-group row mx-5 my-2'>
                    <label className='col-sm-2 col-form-label' htmlFor="brand">Brand</label>
                    <div className='col-sm-8'>
                        <input  
                            className='form-control'
                            required
                            type="text" 
                            name="brand" 
                            value={brand}
                            onChange={e => setBrand(e.target.value)}
                        />
                    </div>
                </div>
                <div className='form-group row mx-5 my-2'>
                    <label className='col-sm-2 col-form-label' htmlFor="flavor">Flavor</label>
                    <div className='col-sm-8'>
                        <input
                            className='form-control'
                            required
                            type="text" 
                            name="flavor" 
                            value={flavor}
                            onChange={e => setFlavor(e.target.value)}
                        />
                    </div>
                </div>
                <div className='form-group row mx-5 my-2'>
                    <label className='col-sm-2 col-form-label' htmlFor="image">Image</label>
                    <div className='col-sm-8'>
                        <input  
                            className='form-control'
                            required
                            type="text" 
                            name="image" 
                            value={image}
                            onChange={e => setImage(e.target.value)}
                        />
                    </div>
                </div>
                <div className='form-group row mx-5 my-2'>
                    <label className='col-sm-2 col-form-label' htmlFor="birthplace">Birthplace</label>
                    <div className='col-sm-8'>
                        <input
                            className='form-control'
                            type="text" 
                            name="birthplace" 
                            value={birthplace}
                            onChange={e => setBirthplace(e.target.value)}
                        />
                    </div>
                </div>
                <div className='form-group row mx-5 my-2'>
                    <label className='col-sm-2 col-form-label' htmlFor="style">Style</label>
                    <div className='col-sm-8'>
                        <input  
                            className='form-control'
                            type="text" 
                            name="style" 
                            value={style}
                            onChange={e => setStyle(e.target.value)}
                        />
                    </div>
                </div>
                <button className='btn btn-secondary' type="submit">Add Noodle</button>
            </form>
        </div>
    )
}

export default NoodleForm