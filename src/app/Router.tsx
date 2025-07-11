import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<></>} />
      </Routes>
    </BrowserRouter>
  );
}
