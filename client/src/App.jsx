import './index.css';
import Header         from './components/Header';
import Hero           from './components/Hero';
import About          from './components/About';
import Menu           from './components/Menu';
import ShashlikFeature from './components/ShashlikFeature';
import Cuisine        from './components/Cuisine';
import Booking        from './components/Booking';
import Contacts       from './components/Contacts';
import Footer         from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Menu />
        <ShashlikFeature />
        <Cuisine />
        <Booking />
        <Contacts />
      </main>
      <Footer />
    </>
  );
}
