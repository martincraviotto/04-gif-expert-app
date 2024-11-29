import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch','Dragon Ball']);

    const onAddCategory = (newCategory) => {

        if(categories.includes(newCategory)) return;

        setCategories([...categories, newCategory]);
    }

    return (
        <>

            {/*Titulo*/}
            <h1>GifExpertApp</h1>
            <AddCategory  
                //setCategories={setCategories}
                onNewCategory={onAddCategory}
            />
            {/*Listado de Gif*/}
                <ol>
                    { categories.map( category => {
                            return <li key={ category}>{category}</li>
                        } ) 
                    }
                </ol>
                {/*GifItem*/}
        </>
    )
}
