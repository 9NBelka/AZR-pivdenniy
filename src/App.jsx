import { Routes, Route, useLocation } from 'react-router-dom';
import './App.scss';
import { useEffect, Suspense } from 'react';

import AZRLanding from './pages/AZRLanding/AZRLanding';
import ThanksPage from './pages/ThanksPage/ThanksPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';

export default function App() {
  function ScrollToHash() {
    const { hash } = useLocation();

    useEffect(() => {
      if (hash) {
        const targetElement = document.getElementById(hash.replace('#', ''));
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, [hash]);

    return null;
  }

  return (
    <div>
      {/* <CookieConsent /> */}
      <Suspense fallback={<div className='loading'>Загрузка...</div>}>
        <ScrollToHash />
        <Routes>
          <>
            <Route path='/' element={<AZRLanding />} />
            <Route path='/thanks' element={<ThanksPage />} />
            <Route path='/privacy-policy' element={<PrivacyPolicy />} />
            <Route path='*' element={<NotFoundPage />} />
          </>
        </Routes>
      </Suspense>
    </div>
  );
}
