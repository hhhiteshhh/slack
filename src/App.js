import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import styled from "styled-components";
import Sidebar from "./Components/Sidebar";
import Chat from "./Components/Chat";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import Login from "./Components/Login";
import Spinner from "react-spinkit";

function App() {
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return (
      <AppLoadingContainer>
        <AppLoadingContent>
          <img
            src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd-970-80.jpg.webp"
            alt=""
          />
          <Spinner name="ball-spin-fade-loader" color="purple" fadeIn="none" />
        </AppLoadingContent>
      </AppLoadingContainer>
    );
  }

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <AppBody>
              <Sidebar />
              <Switch>
                <Route path="/" exact>
                  <Chat />
                </Route>
              </Switch>
            </AppBody>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;

const AppLoadingContainer = styled.div`
  height: 100vh;
  display: grid;
  place-items: center;
`;
const AppLoadingContent = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 100px;
  justify-content: center;
  align-items: center;
  padding: 100px;
  text-align: center;
  background-color: white;

  > img {
    object-fit: contain;
    height: 100px;
    margin-bottom: 100px;
  }
`;
