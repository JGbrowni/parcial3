import "./App.css";
import { Header } from "./components/Header";
import { ProductList } from "./components/Productlist";
import AppRouter from "./routes/AppRouters";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <AppRouter />
      <Header />
      <ProductList />
    </>
  );
}

export default App;