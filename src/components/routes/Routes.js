import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import {ErrorBoundary} from 'react-error-boundary'

const NavbarComponent = lazy(()=> import('../navbar/Navbar'));
const HomeComponent = lazy(()=> import('../home/Home'));
const ProfileComponent = lazy(()=> import('../profile/Profile'));
const DetailComponent = lazy(()=> import('../details/Detail'));

function ErrorFallback({error}) {
    return (
      <div role="alert">
        <p>Something went wrong:</p>
        <pre style={{color: 'red'}}>{error.message}</pre>
      </div>
    )
  }
  

export default function Routes () {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Router>
                <NavbarComponent />
                <Route exact path={"/"}>   
                    <ErrorBoundary FallbackComponent={ErrorFallback}>
                        <HomeComponent />
                    </ErrorBoundary>
                </Route>
                <Route exact path={"/profile"}>
                    <ErrorBoundary FallbackComponent={ErrorFallback}>
                        <ProfileComponent />
                    </ErrorBoundary>
                </Route>
                <Route exact path={"/detail"}>
                    <ErrorBoundary FallbackComponent={ErrorFallback}>
                        <DetailComponent />
                    </ErrorBoundary>
                </Route>
                <Redirect to="/" />
            </Router>
        </Suspense>
    );
}
