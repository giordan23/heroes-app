import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { DcScreen } from '../components/dc/DcScreen';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { Navbar } from '../components/ui/Navbar';
import { HeroScreen } from '../heroes/HeroScreen';
import { SearchScreen } from '../search/SearchScreen';

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />
            <div className="container mt-2">
                <Switch>
                    <Route exact path="/marvel" component={ MarvelScreen }/>
                    <Route exact path="/hero/:heroId" component={ HeroScreen }/>
                    <Route exact path="/dc" component={ DcScreen }/>
                    <Route exact path="/search" component={ SearchScreen }/>
                    <Redirect to="/marvel" />
                </Switch>
            </div>   
        </>
    )
}
