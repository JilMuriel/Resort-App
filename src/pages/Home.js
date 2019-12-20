import React, { Component } from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Services from '../components/Services';
import FeturedRooms from '../components/FeaturedRooms';
import SimpleHero from '../components/StyledHero';
export default function Home() {
    return (
        <>
            <Hero>
                <Banner title="le rooms" subtitle="deluxe rooms starting at $299" >
                    <Link to="/rooms" className="btn-primary">our rooms</Link>
                </Banner>
            </Hero>
            <Services></Services>
            <FeturedRooms></FeturedRooms>
        </>
    )
}
