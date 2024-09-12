import Header from "./components/header/header";
import Pagefive from "./components/pagefive/pagefive";
import Pagefour from "./components/pagefour/pagefour";
import Pageone from "./components/pageOne/pageone";
import Pagethree from "./components/pagethree/pagethree";
import Pagetwo from "./components/pageTwo/pagetwo";
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
function App() {
  return (
    <div className="App">
      <Header/>
      <Pageone/>
      <Pagetwo/>
      <Pagethree/>
      <Pagefour/>
      <Pagefive/>
    </div>
  );
}

export default App;
