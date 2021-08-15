import React, { useState } from "react";
import Person from "./person";

export default function () {
    let [data, setData] = useState([
        {
            image: "https://static.infofamouspeople.com/avatar/bn2prlharu3s8dihd39g_headshots_gabriella-wilde-3.jpg",
            firstName: "First",
            age: "18",
            id: "1",
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU2dHHL2BzTF-2eAQfNJBew_mn_yksqlYNDg&usqp=CAU",
            firstName: "Second",
            age: "19",
            id: "2",
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlE6CtcqS9l9Z2rivuJXGowv1hgFovH9CAKA&usqp=CAU",
            firstName: "Third",
            age: "20",
            id: "3",
        },
        {
            image: "https://www.cleantech.com/wp-content/uploads/2021/01/Geoff-Catherwood_BDC.jpg",
            firstName: "Fourth",
            age: "21",
            id: "4",
        },
        {
            image: "https://i.redd.it/2e06znzsxwh11.jpg",
            firstName: "Fifth",
            age: "22",
            id: "5",
        },
    ]);

    let [birthdaysToday, setBirthdaysToday] = useState(data.length);

    return (
        <main className="main">
            <h1>{birthdaysToday} Birthdays Today</h1>
            {data.map(function (person) {
                return (
                    <Person
                        id={person.id}
                        image={person.image}
                        firstName={person.firstName}
                        age={person.age}
                        birthdaysToday={birthdaysToday}
                        setBirthdaysToday={setBirthdaysToday}
                        data={data}
                        setData={setData}
                    ></Person>
                );
            })}
        </main>
    );
}
