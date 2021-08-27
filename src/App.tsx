import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Home";

import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <GlobalStyle />
    </>
  );
}
