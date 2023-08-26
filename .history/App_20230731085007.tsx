import { Suspense, lazy, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/Global";
import "./App.scss";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Container } from "./styles/commonStyles/Container.styles";
import { Wrapper } from "./styles/commonStyles/Wrapper";
import HomePage from "./pages/HomePage";

const OverviewPage = lazy(() => import("./pages/OverviewPage"));
const CommonHeader = lazy(() => import("./common/CommonHeader"));
const SideBar = lazy(() => import("./pages/SideBar"));
const ActiveTournamentPage = lazy(() => import("./pages/ActiveTournamentPage"));
const ActiveTournamentDetails = lazy(
  () => import("./pages/ActiveTournamentDetails")
);
const TournamentCategory = lazy(() => import("./pages/TournamentCategory"));
const CreateTournament = lazy(() => import("./pages/CreateTournament"));
const NewsPage = lazy(() => import("./pages/NewsPage"));
const NewsDetails = lazy(() => import("./pages/NewsDetails"));
const ErrorPage = lazy(() => import("./pages/ErrorPage"));
const CrowdFunded = lazy(() => import("./pages/CrowdFunded"));
const History = lazy(() => import("./pages/History"));
const Profile = lazy(() => import("./pages/Profile"));

import React from "react";
import Loader from "./components/Popup/Loader/Loader";

const theme = {
  colors: {
    header: "#01070E",
    body: "#01070E",
  },
};

interface Props {
  isSignedIn: any;
  wallet: any;
  gamebloc: any;
}

const App = ({ isSignedIn, wallet, gamebloc }: Props) => {
  const navigate = useNavigate();
  // useEffect(() => {
  //  if (isSignedIn){
  //    navigate('/overview')
  //  }
  // }, []);

  if (!isSignedIn) {
    return (
      <Container>
        <GlobalStyles />
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                isSignedIn={isSignedIn}
                wallet={wallet}
                gamebloc={gamebloc}
              />
            }
          />
        </Routes>
      </Container>
    );
  } else if (isSignedIn) {
    return (
      <ThemeProvider theme={theme}>
        <Suspense
          fallback={
            <Container
              width="100%"
              height="100vh"
              justifyContent="center"
              alignItems="center"
            >
              <Loader />
            </Container>
          }
        >
          <Container>
            <GlobalStyles />
            <CommonHeader wallet={wallet} />
            <Container display="flex" flexDirection="row">
              <SideBar />
              <Wrapper
                xmdmargin="7rem 1rem 0 1rem"
                xmdwidth="100%"
                width="79%"
                margin="7rem 0 0 19%"
              >
                <Routes>
                  <Route path="/home" element={<OverviewPage />} />
                  <Route
                    path="/active-tournament"
                    element={<ActiveTournamentPage />}
                  />
                  <Route
                    path="active-tournament-details/:id"
                    element={<ActiveTournamentDetails />}
                  />
                  <Route
                    path="tournament-category"
                    element={<TournamentCategory />}
                  />
                  <Route
                    path="tournament-category/:id"
                    element={<CreateTournament />}
                  />
                  <Route path="new-page" element={<NewsPage />} />
                  <Route path="news-details" element={<NewsDetails />} />
                  <Route path="error-page" element={<ErrorPage />} />
                  <Route path="crowd-funded" element={<CrowdFunded />} />
                  <Route path="history" element={<History />} />
                  <Route path="profile" element={<Profile />} />
                </Routes>
              </Wrapper>
            </Container>
          </Container>
        </Suspense>
      </ThemeProvider>
    );
  }
};

export default App;

// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";
// import { GameBloc } from "./near-interface";
// import { Wallet } from "./near-wallet";
// import { BrowserRouter as Router } from "react-router-dom";
// import { Provider } from "react-redux";
// import { store } from "./redux/store";

// export const wallet = new Wallet({
//   createAccessKeyFor: "khiyoshi.near",
// });
// export const gamebloc = new GameBloc({
//   contractId: "khiyoshi.near",
//   walletToUse: wallet,
// });

// const root = ReactDOM.createRoot(document.getElementById("root"));
// window.onload = async () => {
//   const isSignedIn = await wallet.startUp();
//   root.render(
//     <Router>
//       <Provider store={store}>
//         <App isSignedIn={isSignedIn} wallet={wallet} gamebloc={gamebloc} />
//       </Provider>
//     </Router>
//   );
//   reportWebVitals();
// };

/* A helper file that simplifies using the wallet selector */

// near api js
// import { providers } from "near-api-js";

// // wallet selector UI
// import "@near-wallet-selector/modal-ui-js/styles.css";
// import { setupModal } from "@near-wallet-selector/modal-ui-js";
// import LedgerIconUrl from "@near-wallet-selector/ledger/assets/ledger-icon.png";
// import MyNearIconUrl from "@near-wallet-selector/my-near-wallet/assets/my-near-wallet-icon.png";

// // wallet selector options
// import { setupWalletSelector } from "@near-wallet-selector/core";
// import { setupLedger } from "@near-wallet-selector/ledger";
// import { setupMyNearWallet } from "@near-wallet-selector/my-near-wallet";

// const THIRTY_TGAS = "30000000000000";
// const NO_DEPOSIT = "0";

// // Wallet that simplifies using the wallet selector
// export class Wallet {
//   walletSelector;
//   wallet;
//   network;
//   createAccessKeyFor;

//   constructor({ createAccessKeyFor = undefined, network = "mainnet" }) {
//     // Login to a wallet passing a contractId will create a local
//     // key, so the user skips signing non-payable transactions.
//     // Omitting the accountId will result in the user being
//     // asked to sign all transactions.
//     this.createAccessKeyFor = createAccessKeyFor;
//     this.network = "mainnet";
//   }

//   // To be called when the website loads
//   async startUp() {
//     this.walletSelector = await setupWalletSelector({
//       network: this.network,
//       modules: [
//         setupMyNearWallet({ iconUrl: MyNearIconUrl }),
//         setupLedger({ iconUrl: LedgerIconUrl }),
//       ],
//     });
//     this.walletSelector.options.network.officialRpc =
//       this.walletSelector.options.network.nodeUrl;
//     if (localStorage.getItem("use_own_rpc_url")) {
//       if (this.network === "testnet" && localStorage.getItem("testnet_rpc_url"))
//         this.walletSelector.options.network.nodeUrl =
//           localStorage.getItem("testnet_rpc_url");
//       if (this.network === "mainnet" && localStorage.getItem("mainnet_rpc_url"))
//         this.walletSelector.options.network.nodeUrl =
//           localStorage.getItem("mainnet_rpc_url");
//     }
//     const isSignedIn = this.walletSelector.isSignedIn();

//     if (isSignedIn) {
//       this.wallet = await this.walletSelector.wallet();
//       this.accountId =
//         this.walletSelector.store.getState().accounts[0].accountId;
//     }

//     return isSignedIn;
//   }

//   // Sign-in method
//   signIn() {
//     const description = "Please select a wallet to sign in.";
//     const modal = setupModal(this.walletSelector, {
//       contractId: this.createAccessKeyFor,
//       description,
//     });
//     modal.show();
//   }

//   // Sign-out method
//   signOut() {
//     this.wallet.signOut();
//     this.wallet = this.accountId = this.createAccessKeyFor = null;
//     window.location.replace(window.location.origin + window.location.pathname);
//   }

//   // Make a read-only call to retrieve information from the network
//   async viewMethod({ contractId, method, args = {} }) {
//     const { network } = this.walletSelector.options;
//     const provider = new providers.JsonRpcProvider({ url: network.nodeUrl });

//     let res = await provider.query({
//       request_type: "call_function",
//       account_id: contractId,
//       method_name: method,
//       args_base64: Buffer.from(JSON.stringify(args)).toString("base64"),
//       finality: "optimistic",
//     });
//     return JSON.parse(Buffer.from(res.result).toString());
//   }

//   // Call a method that changes the contract's state
//   async callMethod({
//     contractId,
//     method,
//     args = {},
//     gas = THIRTY_TGAS,
//     deposit = NO_DEPOSIT,
//   }) {
//     // Sign a transaction with the "FunctionCall" action
//     const outcome = await this.wallet.signAndSendTransaction({
//       signerId: this.accountId,
//       receiverId: contractId,
//       actions: [
//         {
//           type: "FunctionCall",
//           params: {
//             methodName: method,
//             args,
//             gas,
//             deposit,
//           },
//         },
//       ],
//     });

//     return providers.getTransactionLastResult(outcome);
//   }

//   // Get transaction result from the network
//   async getTransactionResult(txhash) {
//     const { network } = this.walletSelector.options;
//     const provider = new providers.JsonRpcProvider({ url: network.nodeUrl });

//     // Retrieve transaction result from the network
//     const transaction = await provider.txStatus(txhash, "unnused");
//     return providers.getTransactionLastResult(transaction);
//   }
// }

/* Talking with a contract often involves transforming data, we recommend you to encapsulate that logic into a class */

// import { utils } from "near-api-js";
// import React from "react";

// export class GameBloc {
//   constructor({ contractId, walletToUse }) {
//     this.contractId = contractId;
//     this.wallet = walletToUse;
//   }

//   async new_tournament(userID, tournamentID, gameName, users, prize) {
//     return await this.wallet.callMethod({
//       contractId: "khiyoshi.near",
//       method: "new_tournament",
//       args: {
//         owner_id: userID,
//         tournament_id_hash: tournamentID,
//         game_name: gameName,
//         no_of_users_input: users,
//         prize_input: prize,
//       },
//     });
//   }

//   async getAllTournaments() {
//     console.log("ContratId:");
//     return await this.wallet.callMethod({
//       contractId: "khiyoshi.near",
//       method: "get_all_tournaments",
//       args: {},
//     });
//   }

//   async initializeContract(userID) {
//     return await this.wallet.callMethod({
//       contractId: "khiyoshi.near",
//       method: "new",
//       args: { owner_id: JSON.parse(userID).accountId },
//     });
//   }

//   async joinTournament(userID, id) {
//     return await this.wallet.callMethod({
//       contractId: "khiyoshi.near",
//       method: "join_tournament",
//       args: { user_id: userID, tournament_id: id },
//     });
//   }
// }
