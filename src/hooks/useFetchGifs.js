import { useState,useEffect } from "react";
import { getGift } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

        useEffect( () => {
            getGift(category).then(gifs => {
                setTimeout(() => {
                    setState({
                        data: gifs,
                        loadig: false
                    });
                },1000)
                
            });
        },[category])

  


    return state;
}