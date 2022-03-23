import React, { useState, useEffect }  from "react"
import switcher from "../../utils/general/switcher/switcher"


const Cell = (props: any) => {
    
    const [cellColor, setCellColor] = useState('Cell-yellow')


    return (
        <div className={cellColor} onClick={() => setCellColor(switcher('Cell-yellow')('Cell-yellow Selected')(cellColor)) }></div>
    )

}

        

export default Cell