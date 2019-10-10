import React, { useState } from "react"
import { getAllJokes } from "../../api/apiMethods"
import "./Jokes.scss"

const Jokes = () => {
  const [joke, setJoke] = useState("")
  const [rovarJoke, setRovarJoke] = useState("")
  const [loader, setLoader] = useState(false)
  const getJokes = () => {
    setLoader(true)
    getAllJokes()
      .then(jokeData => {
        setJoke(jokeData)
        setRovarJoke(
          jokeData.replace(
            /([bcdfghjklmnpqrstvwxz])/gi,
            consonants => consonants + "o" + consonants
          )
        )
      })
      .catch(err => alert(err))
      .then(() =>
        setTimeout(() => {
          setLoader(false)
        }, 500)
      )
  }

  return (
    <>
      <button className="joke-button" onClick={() => getJokes()}>Fetch a dad joke</button>
      {(loader || joke) && (
        <div className="joke-response">
          <>
            {loader && (
              <div className="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            )}
            {!loader && (
              <>
                {joke && <label>Vanlig text:</label>}
                <p>{joke}</p>
                {rovarJoke && <label>Rövar text:</label>}
                <p>{rovarJoke}</p>
              </>
            )}
          </>
        </div>
      )}
    </>
  )
}

export default Jokes
