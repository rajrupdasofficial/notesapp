import {Route, Link, BrowserRouter as Router, Routes} from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import NotesListPage from "./pages/NoteListPage";
import NotePage from "./pages/NotePage";
function App() {
  return (
    <Router>
      <div className="App">
          <Header />
          <Routes><Route path='' element={<NotesListPage/>}/> </Routes>
        </div>
      </Router>
  );
}

export default App;
