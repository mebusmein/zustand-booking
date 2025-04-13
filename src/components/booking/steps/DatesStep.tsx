import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useDatesStore } from '@/stores/dates-store';
import { validateDates, validateGuests } from '@/utils/validation';

export function DatesStep() {
  const { checkIn, checkOut, adults, children, setCheckIn, setCheckOut, setAdults, setChildren } =
    useDatesStore();

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <label className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Check-in Date
        </label>
        <Input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} />
      </div>
      <div className="space-y-2">
        <label className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Check-out Date
        </label>
        <Input type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} />
      </div>

      <div className="space-y-2">
        <label className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Number of Adults
        </label>
        <Select value={adults} onValueChange={setAdults}>
          <SelectTrigger>
            <SelectValue placeholder="Select number of adults" />
          </SelectTrigger>
          <SelectContent>
            {[1, 2, 3, 4].map((num) => (
              <SelectItem key={num} value={num.toString()}>
                {num}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <label className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Number of Children
        </label>
        <Select value={children} onValueChange={setChildren}>
          <SelectTrigger>
            <SelectValue placeholder="Select number of children" />
          </SelectTrigger>
          <SelectContent>
            {[0, 1, 2, 3].map((num) => (
              <SelectItem key={num} value={num.toString()}>
                {num}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

// Export the validation hook for use in MultiStepBookingForm
export const useDatesStepValidation = () => {
  const { checkIn, checkOut, adults, children } = useDatesStore();
  return validateDates(checkIn, checkOut) && validateGuests(adults, children);
};
