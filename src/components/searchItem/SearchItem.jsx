import React from "react"
import "./searchItem.css"

const SearchItem = () => {
    return (
        <div className="SearchItem">
            <img src="https://t-cf.bstatic.com/xdata/images/hotel/square600/229598577.webp?k=49da41cc45c2655573c73b0dc83fab45f8c4196ba166b2db6ba0e323051d3f37&o=&s=1" alt="" className="siImg" />
        <div className="siDesc">
        <h1 className="siTitle">Apartosuites Jardines de Sebatini</h1>
        <span className="siDistance">500m from center</span>
        <div className="TaxiOpContainer"><span className="siTaxiOp">Free Airport Taxi</span></div>
        <span className="siSubtitle">Studio Apartment with ac</span>
        <span className="siFeatures">Entire studio · 1 bathroom · 25 sq.m 1 full bed </span>
        <span className="siCancelOp">Free Cancellation</span>
        <span className="siCancelOpText">You can cancel later, so grab this deal right now!</span>

        </div>   
        <div className="siDetails">
        <div className="rate">
        <span className="rating">Excellent</span>
        <button className="ratingNum">8.9</button>
        </div>
            <div className="cost">
                <span className="costPrice">$112</span>
                <span className="tax">Includes taxes and fees</span>
                <button className="availability">See availability</button>
            </div>
        
        </div>

        </div>
        
    )
}
export default SearchItem