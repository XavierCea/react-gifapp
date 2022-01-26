import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    

    const [categories, setCategories] = useState(['One Punch']);  

    const handleAdd = () => {
        setCategories([...categories, 'HunterXHunter']);
    }

    return (
        <>
            <h2>Gif Searcher App</h2>
            <AddCategory setCategories={setCategories}/>
            <hr></hr>
            

            <ul>
                { 
                    categories.map(category =>
                        <GifGrid 
                            key = {category}
                            category={category} 
                        />
                    )
                }
            </ul>

        </>
    )
}