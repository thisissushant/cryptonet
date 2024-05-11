import Card from "./components/Card";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow bg-gradient-to-r from-purple-100 to-purple-600">
          <Card />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
