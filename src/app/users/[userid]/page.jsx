import React from 'react';




const IndividualIdPage = async ({params}) => {
    const {userid}=await params;
    const res = await fetch(`http://localhost:5000/users/${userid}`);
    const user= res.json();
const {email,name}= user;
    return (
        <div>
            <p>Email :{email} </p>
            <p>Name: {name}</p>
        </div>
    );
};

export default IndividualIdPage;