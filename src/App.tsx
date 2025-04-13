import { MultiStepBookingForm } from './components/MultiStepBookingForm';
import { ResetStoresButton } from './components/ResetStoresButton';

function App() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <ResetStoresButton />
      <MultiStepBookingForm />
    </div>
  );
}

export default App;
