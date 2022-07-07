import Main from './page/Main';
import GlobalStyle from './styles/GlobalStyle';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
