import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import { useRouter } from './router.jsx';
import { useReveal } from './useReveal.js';

export default function App() {
  const { page, path } = useRouter();
  const Page = page.default;
  useReveal(page);
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Header />
      <main id="main" tabIndex={-1}>
        <Page key={path} />
      </main>
      <Footer />
    </>
  );
}
