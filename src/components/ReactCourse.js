import React from "react";


const ReactCourse =({picture,firstname,middlename,lastname,birthday,classe,country})=>{
    return(
        <div>
            <img style={{width:"100px"}} src={picture} />
    <div>Fullname : {firstname+middlename+lastname}</div>
    <div>Birthday : {birthday}</div>
    <div>Class : {classe}</div>
    <div>Country : {country}</div>



        </div>
    )
}

export default ReactCourse