import './App.css'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import { Feed } from './pages/feed/feed';
import { Profile } from './pages/profile/profile';
import { Header } from './components/pages/header/header';
import User from './components/ui/profile/User';
function App() {

  return (
    <Router>
      <Header key="header"></Header>
      <User/>
      <Routes>
        <Route exact path="/" element={<Feed key="feed" />} />
        <Route path="/profile" element={<Profile key="profile" />} />
      </Routes>
    </Router>
  );
}

export default App
