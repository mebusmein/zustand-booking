import { Switch } from '@/components/ui/switch';
import { useExtrasContext } from '@/contexts/extras-context';
export function ExtrasStep() {
  const { breakfast, toggleBreakfast, parking, toggleParking, spa, toggleSpa } = useExtrasContext(
    (state) => state
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-row items-center justify-between rounded-lg border p-4">
        <div className="space-y-0.5">
          <label className="text-base leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Breakfast
          </label>
          <div className="text-muted-foreground text-sm">Add breakfast to your stay</div>
        </div>
        <Switch checked={breakfast} onCheckedChange={toggleBreakfast} />
      </div>

      <div className="flex flex-row items-center justify-between rounded-lg border p-4">
        <div className="space-y-0.5">
          <label className="text-base leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Parking
          </label>
          <div className="text-muted-foreground text-sm">Add parking to your stay</div>
        </div>
        <Switch checked={parking} onCheckedChange={toggleParking} />
      </div>

      <div className="flex flex-row items-center justify-between rounded-lg border p-4">
        <div className="space-y-0.5">
          <label className="text-base leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Spa Access
          </label>
          <div className="text-muted-foreground text-sm">Add spa access to your stay</div>
        </div>
        <Switch checked={spa} onCheckedChange={toggleSpa} />
      </div>
    </div>
  );
}
