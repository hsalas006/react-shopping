import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionForPreview } from "../../redux/shop/shop.selector";
import CollectionPreview from "../collection-preview/collection-preview.component";

const CollectionOverview = ({collections}) =>(
    <div className='collection-overview'>
    {
        collections.map(({id, ...otheCollectionProps}) => (
            <CollectionPreview key={id} {...otheCollectionProps} />
        ))
    }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionForPreview
});

export default connect(mapStateToProps)(CollectionOverview);