'use client'
import React from 'react';

const Form = () => {
    const [fname, setFname] = React.useState("");
    const [lname, setLname] = React.useState("");
    const [age, setAge] = React.useState(0);
    console.log('pointless change');
    const handleSubmit = (event) => {
        event.preventDefault();
        const postData = async () => {
            const data = {
                first_name: fname,
                last_name: lname,
                age: age,
            };
            const res = await fetch('/api/postData', {
                method: 'POST',
                body: JSON.stringify(data), 
            });
            return res.json();
        }
        const getData = async () => {
            const res = await fetch('/api/getData', {
                method: 'GET',
            });
            return res.json();
        } 
        postData().then((data) => {
            getData().then((returnedData) => {
                console.log(returnedData);
                const richard = returnedData.message[0];
                document.getElementById('innocuousPTag').innerHTML = richard.first_name + ' ' + richard.last_name + ' is cooler than you';
            }) 
        });
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>First Name:</label><br />
                <input type="text" value={fname} onChange={(e) => setFname(e.target.value)} /><br/>
                <label>Last Name:</label><br />
                <input type="text" value={lname} onChange={(e) => setLname(e.target.value)}/><br/>
                <label>Age:</label><br />
                <input type="number" value={age} onChange={(e) => setAge(e.target.value)}/><br/>
                <input type="submit"/>
            </form>
            <p id="innocuousPTag"></p>
        </>
       
    )
}

export default Form;
