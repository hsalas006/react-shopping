import React from "react";

import "./category.styles.scss"


const Category = ({ match }) => {
    console.log(match)
    return(
    <div className='category'>
        <h2>{match.params.categoryId}</h2>
    </div>
)};

export default Category;