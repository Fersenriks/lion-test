import Sidebar from './components/layout/sidebar/Sidebar';
import PageWrapper from './components/page-wrapper';
import Properties from './pages/properties';
import { ModalProvider } from './context/modalContext';
import Modal from './components/layout/modal/Modal';

function App() {
  return (
    <div className="flex h-screen m-0">
      <Sidebar />
      <main className="h-screen w-full bg-gray-200 p-8">
        <ModalProvider>
          <PageWrapper>
            <Properties />
            <Modal />
          </PageWrapper>
        </ModalProvider>
      </main>
    </div>
  );
}

export default App;
