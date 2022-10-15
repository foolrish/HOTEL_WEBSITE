import React from 'react';
import useFetch from '../../hooks/useFetch';
import "./featured.css"

const Featured = () => {

   // const {data, loading, error} = useFetch("/locations/v2/search")
   // console.log(data)

    return (
        <div className="featured">
            <div className="featuredItem">
                <img src="https://r-xx.bstatic.com/xdata/images/hotel/300x240/100235855.jpeg?k=5b6e6cff16cfd290e953768d63ee15f633b56348238a705c45759aa3a81ba82b&o=" alt="" />
            <div className="featuredTitles">
                <h1>Delhi</h1>
                <h2>properties</h2>
            </div>
            </div>

            <div className="featuredItem">
                <img src="https://r-xx.bstatic.com/xdata/images/hotel/300x240/100235855.jpeg?k=5b6e6cff16cfd290e953768d63ee15f633b56348238a705c45759aa3a81ba82b&o=" alt="" />
            <div className="featuredTitles">
                <h1>Delhi</h1>
                <h2>properties</h2>
            </div>
            </div>

            <div className="featuredItem">
                <img src="https://r-xx.bstatic.com/xdata/images/hotel/300x240/100235855.jpeg?k=5b6e6cff16cfd290e953768d63ee15f633b56348238a705c45759aa3a81ba82b&o=" alt="" />
            <div className="featuredTitles">
                <h1>Delhi</h1>
                <h2>properties</h2>
            </div>
            </div>

            <div className="featuredItem">
                <img src="https://r-xx.bstatic.com/xdata/images/hotel/300x240/100235855.jpeg?k=5b6e6cff16cfd290e953768d63ee15f633b56348238a705c45759aa3a81ba82b&o=" alt="" />
            <div className="featuredTitles">
                <h1>Delhi</h1>
                <h2>properties</h2>
            </div>
            </div>
        </div>
    )
}
export default Featured