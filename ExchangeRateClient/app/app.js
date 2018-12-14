import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import { store, persistor } from "./redux/store";

import GlobalStyle from "./globalStyle";
import AppContainer from "./components/AppContainer";
import AppHeader from "./components/AppHeader";
import RatesFilter from "./components/RatesFilter";
import Spinner from "./components/Spinner";

const App = () => (
  <Provider store={store}>
    <PersistGate loading={<Spinner />} persistor={persistor}>
      <AppContainer>
        <GlobalStyle />
        <AppHeader />
        <RatesFilter />
      </AppContainer>
    </PersistGate>
  </Provider>
);

export default App;
