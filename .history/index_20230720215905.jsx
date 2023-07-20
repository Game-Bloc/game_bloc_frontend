import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { GameBloc } from "./near-interface";
import { Wallet } from "./near-wallet";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";

export const wallet = new Wallet({
  createAccessKeyFor: process.env.MAINNET_CONTRACTID,
});
export const gamebloc = new GameBloc({
  contractId: process.env.MAINNET_CONTRACTID,
  walletToUse: wallet,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
window.onload = async () => {
  const isSignedIn = await wallet.startUp();
  root.render(
    <Router>
      <Provider store={store}>
        <App isSignedIn={isSignedIn} wallet={wallet} gamebloc={gamebloc} />
      </Provider>
    </Router>
  );
  reportWebVitals();
};
