import React  from "react";

const Hello  = () =>{
    // return (
    //     <div>
    //         Hello jsx componet
    //     </div>
    // )

    return React.createElement(
        'div',
        {id:"hello",className:"dummyClass"},
        React.createElement('h1',null,"hello dear")
    )
}

export default Hello