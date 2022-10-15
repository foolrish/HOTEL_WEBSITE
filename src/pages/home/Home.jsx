import React  from 'react'
import "./home.css"
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/navbar';
import Featured from '../../components/featured/Featured';
import PropertyList from '../../components/propertyList/PropertyList';
import GuestsLove from '../../components/guestsLove/guestsLove';
import MailList from '../../components/mailList/MailList';
import Footer from '../../components/footer/Footer';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <div className="homeContainer">
                <Featured />
                <h1 className="homeTitle">Browse by property</h1>
                <PropertyList/>
                <h1 className="homeTitle2">What Guests Love</h1>
                <GuestsLove/>
                <MailList/>
                <Footer />
            </div>
        </div>
    );
};

export default Home;