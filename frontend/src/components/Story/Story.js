import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";
import { ListOfCards } from "../ListOfCards/ListOfCards";
import { UserVote } from "../UserVote/UserVote";
import { VotesResults } from "../VotesResults/VotesResults";

export const Story = () => {
  let { path } = useRouteMatch();
  // states
  // functions
  // HTML
  return (
    <Router>
      <div>
        <h3>REPORTES DE VENTAS DE PANETONES</h3>
        <p>
          Generar reportes de ventas de panetones dinamicamente con disenos
          personalizados y el logo de la empresa pepito.
        </p>
      </div>
      <div>
        {/* /story/${props.match.params.roomId}/user */}
        <Switch>
          <Route exact path={`${path}/:roomId`} component={ListOfCards} />
          <Route path={`${path}/:roomId/user`} component={UserVote}></Route>
          <Route
            path={`${path}/:roomId/results`}
            component={VotesResults}
          ></Route>
        </Switch>
      </div>
    </Router>
  );
};
