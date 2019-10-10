import { fetch } from "../utils/axios";

export const getAllJokes = () => {
    return fetch(`https://icanhazdadjoke.com/`, "GET")
        .then(res => res.data.joke);
}