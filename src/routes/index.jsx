import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import ServiceDetails from '../pages/ServiceDetails';
import Gallery from '../pages/Gallery';
import Pricing from '../pages/Pricing';
import Testimonials from '../pages/Testimonials';
import Blog from '../pages/Blog';
import BlogDetails from '../pages/BlogDetails';
import Contact from '../pages/Contact';
import BookAppointment from '../pages/BookAppointment';
import FAQ from '../pages/FAQ';
import NotFound from '../pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'services', element: <Services /> },
      { path: 'services/:slug', element: <ServiceDetails /> },
      { path: 'gallery', element: <Gallery /> },
      { path: 'pricing', element: <Pricing /> },
      { path: 'testimonials', element: <Testimonials /> },
      { path: 'blog', element: <Blog /> },
      { path: 'blog/:slug', element: <BlogDetails /> },
      { path: 'contact', element: <Contact /> },
      { path: 'book-appointment', element: <BookAppointment /> },
      { path: 'faq', element: <FAQ /> },
    ],
  },
  { path: '*', element: <NotFound /> },
]);

export default router;
