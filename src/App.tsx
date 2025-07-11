import Router from '@app/Router';
import TQProvider from '@/app/TQProvider';

function App() {
  return (
    <>
      <TQProvider>
        <Router />
      </TQProvider>
    </>
  );
}

export default App;
