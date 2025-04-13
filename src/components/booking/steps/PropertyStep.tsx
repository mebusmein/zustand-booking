import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { usePropertyStore } from '@/stores/property-store';
import { validateProperty } from '@/utils/validation';

export function PropertyStep() {
  const { selectedProperty, setSelectedProperty } = usePropertyStore();

  return (
    <div className="space-y-2">
      <label className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
        Select Property
      </label>
      <Select value={selectedProperty || ''} onValueChange={setSelectedProperty}>
        <SelectTrigger>
          <SelectValue placeholder="Select a property" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="hotel-paris">Hotel Paris</SelectItem>
          <SelectItem value="hotel-london">Hotel London</SelectItem>
          <SelectItem value="hotel-new-york">Hotel New York</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

// Export the validation hook for use in MultiStepBookingForm
export const usePropertyStepValidation = () => {
  const selectedProperty = usePropertyStore((state) => state.selectedProperty);
  return validateProperty(selectedProperty);
};
