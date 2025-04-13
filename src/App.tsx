import { MultiStepBookingForm } from './components/MultiStepBookingForm';
import { DevToolsInstructions } from './components/DevToolsInstructions';
import { BookingProviders } from './components/BookingProviders';

function App() {
  return (
    <BookingProviders>
      <div className="min-h-screen bg-gray-100 p-4">
        <div className="mx-auto flex h-full min-h-[calc(100vh-2rem)] max-w-7xl items-center justify-center gap-8">
          <div className="flex max-w-2xl flex-1 justify-end">
            <MultiStepBookingForm />
          </div>
          <div className="w-96">
            <DevToolsInstructions />
          </div>
        </div>
      </div>
    </BookingProviders>
  );
}

export default App;
