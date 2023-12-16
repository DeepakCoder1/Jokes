import React, { useEffect, useState } from "react";
import { json } from "react-router-dom";
import "./joke.css"

function Joke() {
    const [data, setData] = useState(null)

    function ButtonClick() {
        Fetchjoke()
    }

    function Fetchjoke() {
        fetch('https://v2.jokeapi.dev/joke/Any').then((response) => {
            return response.json()
            // console.log("data is", data);
        }).then((result) => {
            setData(result);

        }).catch((e) => {
                console.log("Something Went Wrong");
            })
    }

    useEffect(() => {
        Fetchjoke()
    }, [])
    console.log(data);
    return (
        <>
            <div className="main-box">
                <div className="box">
                <button onClick={ButtonClick} className="joke-button">Show More Jokes</button>
                    {data ? (
                        <>
                        <div className="joke-contant">
                            <p>{data.setup}</p>
                            <p>{data.delivery}</p>
                            <p>{data.joke}</p>
                        </div>
                        </>
                    ) : (
                        <p>No Joke Found</p>
                    )}

                </div>
            </div>


        </>
    )
}

export default Joke