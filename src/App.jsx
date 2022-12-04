import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Welcome from "./components/welcome/Welcome";
import Counter from "./components/counter/Counter";
import ShowGithubUser from "./components/github/ShowGithubUser";
import GithubUserList from "./components/github/GithubUserList";

export default class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Link to="/">Home</Link> | <Link to="/counter">Counter</Link> |{" "}
          <Link to="/users">Github Account</Link>
        </div>

        <Routes>
          <Route path="*" element={<h2>404 Not Found</h2>} />
          <Route path="/" element={<Welcome name="Sama" />} />
          <Route
            path="counter"
            element={
              <Counter
                intialValue={0}
                incrementBy={1}
                incrementInterval={1000}
              />
            }
          />
          <Route path="users" element={<GithubUserList />}>
            <Route index element={<p>Add a user and select it</p>} />
            <Route path=":username" element={<ShowGithubUser />} />
          </Route>
        </Routes>
      </div>
    );
  }
}
