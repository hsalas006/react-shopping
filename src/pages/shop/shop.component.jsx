import React from "react";
import { Route } from "react-router-dom";
import Category from "../category/category.component";

import CollectionsOverview from "./../../components/collections-overview/collections-overview.component";

const ShopPage = ({ match }) =>{
    console.log("match: ", match)
    return(
    <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionsOverview}/>
        <Route path={`${match.path}/:categoryId`} component={Category} />
    </div>
)}

export default ShopPage;