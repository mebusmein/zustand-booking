import { MultiStepBookingForm } from './components/MultiStepBookingForm';
import { DevToolsInstructions } from './components/DevToolsInstructions';
import { BookingProviders } from './components/BookingProviders';

function App() {
  return (
    <BookingProviders>
      <div className="min-h-screen bg-gray-100 p-4">
        <div className="mx-auto flex h-full min-h-[calc(100vh-2rem)] max-w-7xl flex-col items-center justify-center gap-8 md:flex-row">
          <div className="flex w-full max-w-2xl flex-1 justify-center md:justify-end">
            <MultiStepBookingForm />
          </div>
          <div className="w-full md:w-96">
            <DevToolsInstructions />
          </div>
        </div>
      </div>
    </BookingProviders>
  );
}

export default App;
