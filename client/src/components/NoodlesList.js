import { useEffect, useState } from "react"
import NoodleForm from "./NoodleForm"
import NoodleItem from "./NoodleItem"

function NoodlesList() {

    const [noodleList, setNoodleList] = useState([])
    const [formShowing, setFormShowing] = useState(false)

    useEffect(() => {
        fetch('/noodles')
            .then(res => res.json())
            .then(noodles => setNoodleList(noodles))
    }, [])

    function toggleForm() {
        setFormShowing(!formShowing)
    }

    function onSubmitNewNoodle(newNoodle) {
        setNoodleList([...noodleList, newNoodle])
        toggleForm()
    }

    return(
        <div>
            <h1>
                Noodles
            </h1>
            <br/>
            <div>
                <button className='btn btn-secondary' onClick={toggleForm}>{formShowing ? "Cancel" : "Add Noodle"}</button>
                {formShowing ? <NoodleForm onSubmitNewNoodle={onSubmitNewNoodle}/> : null}
            </div>
            <br/>
            <div className="container-fluid">
                <div className="row">
                    {noodleList.map(noodle => <NoodleItem key={noodle.id} noodle={noodle}/>)}
                </div>
            </div>
        </div>
    )
}

export default NoodlesList 