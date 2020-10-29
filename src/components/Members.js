import React from "react";

const Members =(props)=>{
    const styles = {
        width:"200px"
    }
    return(
<div>
    <img style={styles} src={props.member.picture} alt={props.firstname} />
    <h1>Fullname:{props.member.firstname + props.member.middlename+ props.member.lastname}</h1>
    <h1>Birthday:{props.member.birthday}</h1>
    <h1>Country:{props.member.country}</h1>
    <h1>Class:{props.member.class}</h1>
</div>
    )
}
export default Members