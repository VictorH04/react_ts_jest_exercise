import "./App.css";
import PageHeader from "./components/PageHeader/PageHeader";
import ProductCards from "./components/ProductCards/ProductCards";

function App() {
  return (
    <main className="HomePage">
      <section className="HomePage_container">
        <PageHeader HeaderText="Exercise :-P" />

        <ProductCards />
      </section>
    </main>
  );
}

export default App;
