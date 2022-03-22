import React from "react"

const style = {
    height: 300,
    width: 300,
    border: 'solid',
    borderWidth: '2px',
    borderColor: 'blue',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}

const Cell = (props: any) => {
    return (
        <div style={style} onClick={() => {console.log('clicked')} }></div>
    )

}

        

export default Cell