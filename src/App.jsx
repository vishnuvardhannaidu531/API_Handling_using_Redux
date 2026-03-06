import { Provider } from "react-redux";
import store from "./Store";
import CoinList from "./CoinList";

function App() {
  return (
    <Provider store={store}>
        <CoinList/>
    </Provider>
  );
}

export default App;