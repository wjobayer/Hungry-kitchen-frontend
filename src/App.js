import { Provider } from "react-redux";
import "./App.css";
import AppRouter from "./AppRouter";
import { store } from "./redux/store";

function App() {
  return (
    <div>
      <Provider store={store}>
      <AppRouter />
      </Provider>
    </div>
  );
}

export default App;
