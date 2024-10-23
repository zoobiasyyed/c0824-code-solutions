import { About } from './pages/About';
import { Dashboard } from './pages/Dashboard';
import { Header } from './components/Header';
import { NotFound } from './pages/NotFound';
import { Details } from './pages/Details';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export function App() {
  return (
    <Router>
      <Routes>
        {/* This path '/' is the root path of the application.
        element will define the component for this root */}
        {/* the LINK tags will basically be like ur anchor or
        href elements */}
        <Route path="/" element={<Header />}>
          {' '}
          <Route index element={<Dashboard />} />
          <Route path="details/:itemId" element={<Details />} />
          {/* the /: defines a custom parameter which is dynamic and
          able to be changed. anything that comes after the slash
          will be stored in the itemId

          useParams will return a object that will have all the custom
          parameters we defined in our route  */}
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}
