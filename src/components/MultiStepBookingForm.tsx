import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useBookingFlow } from '@/stores/booking-flow';
import { useBookingStore } from '@/stores/booking-store';
import { PropertyStep } from './booking/steps/PropertyStep';
import { DatesStep } from './booking/steps/DatesStep';
import { RoomStep } from './booking/steps/RoomStep';
import { ExtrasStep } from './booking/steps/ExtrasStep';
import { PaymentStep } from './booking/steps/PaymentStep';
import { ConfirmationStep } from './booking/steps/ConfirmationStep';

export function MultiStepBookingForm() {
  const { currentStep, nextStep, previousStep } = useBookingFlow();
  const { isComplete, submitBooking, resetBooking } = useBookingStore();

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <PropertyStep />;
      case 2:
        return <DatesStep />;
      case 3:
        return <RoomStep />;
      case 4:
        return <ExtrasStep />;
      case 5:
        return <PaymentStep />;
      case 6:
        return <ConfirmationStep />;
      default:
        return null;
    }
  };

  const handleSubmit = () => {
    if (currentStep === 5) {
      submitBooking();
    }
    nextStep();
  };

  if (isComplete) {
    return (
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Booking Complete!</CardTitle>
          <CardDescription>Thank you for your booking</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4 text-center">
            Your booking has been successfully submitted. We will send you a confirmation email
            shortly.
          </p>
          <Button
            className="w-full"
            onClick={() => {
              resetBooking();
              useBookingFlow.getState().resetFlow();
            }}
          >
            Start New Booking
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Book Your Stay</CardTitle>
        <CardDescription>Step {currentStep} of 6</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {renderStep()}
          <div className="flex justify-between pt-4">
            {currentStep > 1 && currentStep < 6 && (
              <Button type="button" variant="outline" onClick={previousStep}>
                Back
              </Button>
            )}
            {currentStep < 6 && (
              <Button type="button" className="ml-auto" onClick={handleSubmit}>
                {currentStep === 5 ? 'Complete Booking' : 'Next'}
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
