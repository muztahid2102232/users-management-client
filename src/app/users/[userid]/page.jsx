import React from 'react';




const IndividualIdPage = async ({params}) => {
    const {userid}=await params;
    const res = await fetch(`http://localhost:5000/users/${userid}`);
    const user= await res.json();
    console.log(user);
const {email,name}= user;
    return (
        <div className='bg-slate-400 border-dashed border-amber-300 w-fit m-3 p-3.5 rounded-2xl'>
            <p>Name: {name}</p>
            <p>Email :{email} </p>
        </div>
    );
};

export default IndividualIdPage;