import React from "react";

export default function Person({
    id,
    image,
    firstName,
    age,
    birthdaysToday,
    setBirthdaysToday,
    data,
    setData,
}) {
    return (
        <div className="person" id={`person--${id}`}>
            <div className="image-container">
                {console.log(image)}
                <img
                    src={image}
                    alt=""
                    className={`image
                                `}
                />
            </div>
            <div className="info">
                <h2 className="name">{firstName}</h2>
                <h3 className="age">{age}</h3>
            </div>
            <button
                type="button"
                className="dismiss"
                onClick={function () {
                    setData(data.filter((p) => id !== p.id));
                    setBirthdaysToday(birthdaysToday - 1);
                }}
            >
                DISMISS
            </button>
        </div>
    );
}
