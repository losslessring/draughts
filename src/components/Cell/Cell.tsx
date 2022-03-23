import React, { useState, useEffect }  from "react"



const Cell = (props: any) => {
    
    const [cellColor, setCellColor] = useState('Cell-yellow')

    const switcher = (defaultValue: any) => (alternative: any) => (current: any) => {
        return current === defaultValue ? alternative : defaultValue
        
    }

    return (
        <div className={cellColor} onClick={() => setCellColor(switcher('Cell-yellow')('Cell-brown')(cellColor)) }></div>
    )

}

        

export default Cell