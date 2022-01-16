import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";
  import Listing from 'assets/pages/Listing';
  import Form from 'assets/pages/From';
  import Navbar from "assets/components/Navbar";
  
  function App() {
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Listing />} />
          <Route path="/form">
            <Route path=":movieId" element={<Form />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
  export default App;