import { useEffect, useState } from "react"
import NoodleItem from "./NoodleItem"

function NoodlesList() {

    const [noodleList, setNoodleList] = useState([])

    useEffect(() => {
        fetch('/noodles')
            .then(res => res.json())
            .then(noodles => setNoodleList(noodles))
    }, [])

    return(
        <div>
            <h1>
                Noodles
            </h1>
            <div>
                {noodleList.map(noodle => <NoodleItem key={noodle.id} noodle={noodle}/>)}
            </div>
        </div>
    )
}

export default NoodlesList 