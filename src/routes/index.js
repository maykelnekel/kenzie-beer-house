import { Switch, Route } from "react-router-dom";
import Casamento from "../pages/casamento/index ";
import Confraternizacao from "../pages/confraternizacao";
import Formatura from "../pages/formatura";
import Home from "../pages/home";
import Products from "../pages/products";

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/casamento">
          <Casamento />
        </Route>
        <Route path="/formatura">
          <Formatura />
        </Route>
        <Route path="/confraternizacao">
          <Confraternizacao />
        </Route>
      </Switch>
    </div>
  );
};
export default Routes;
