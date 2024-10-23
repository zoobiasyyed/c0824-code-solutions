import { About } from './pages/About';
import { Dashboard } from './pages/Dashboard';
import { Header } from './components/Header';
import { NotFound } from './pages/NotFound';
import { Details } from './pages/Details';
import { Routes, Route } from 'react-router-dom';

export function App() {
  return (
    <Routes>
      {/* This path '/' is the root path of the application.
        element will define the component for this root */}
      {/* the LINK tags will basically be like ur anchor or
        href elements */}
      <Route path="/" element={<Header />}>
        {/* wrap the header element around the rest of the components */}
        <Route index element={<Dashboard />} />
        {/* index is the default path u want the url to take if nothing matches */}
        <Route path="details/:itemId" element={<Details />} />
        {/* the /: defines a custom parameter which is dynamic and
          able to be changed. anything that comes after the slash
          will be stored in the itemId

          useParams will return a object that will have all the custom
          parameters we defined in our route  */}
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
}
