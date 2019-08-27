import React from "react";
import {City} from './City';
import {FinalCode} from './FinalCode';
import {Message} from './Message';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function BasicRoute() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/city">郵遞區號</Link>
          </li>
          <li>
            <Link to="/finalCode">終極密碼</Link>
          </li>
          <li>
            <Link to="/message">簡易留言</Link>
          </li>
        </ul>
        <hr />
        <Route path="/city" component={City} />
        <Route path="/finalCode" component={FinalCode} />
        <Route path="/message" component={Message} />
      </div>
    </Router>
  );
}

export default BasicRoute;
