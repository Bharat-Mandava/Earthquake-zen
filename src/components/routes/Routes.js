import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

const NavbarComponent = lazy(()=> import('../navbar/Navbar'));
const HomeComponent = lazy(()=> import('../home/Home'));
const ProfileComponent = lazy(()=> import('../profile/Profile'));
const DetailComponent = lazy(()=> import('../details/Detail'));

export default function Routes () {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Router>
                <NavbarComponent />
                <Route exact path={"/"}>
                    <HomeComponent />
                </Route>
                <Route exact path={"/profile"}>
                    <ProfileComponent />
                </Route>
                <Route exact path={"/detail"}>
                    <DetailComponent />
                </Route>
                {/* redirect all other routes to homepage */}
                <Redirect to="/" />
            </Router>
        </Suspense>
    );
}
