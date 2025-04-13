import { Switch } from "@/components/ui/switch"
import { useExtrasStore } from "@/stores/extras-store"

export function ExtrasStep() {
  const { 
    breakfast, 
    parking, 
    spa, 
    toggleBreakfast, 
    toggleParking, 
    toggleSpa 
  } = useExtrasStore()

  return (
    <div className="space-y-6">
      <div className="flex flex-row items-center justify-between rounded-lg border p-4">
        <div className="space-y-0.5">
          <label className="text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Breakfast
          </label>
          <div className="text-sm text-muted-foreground">
            Add breakfast to your stay
          </div>
        </div>
        <Switch
          checked={breakfast}
          onCheckedChange={toggleBreakfast}
        />
      </div>

      <div className="flex flex-row items-center justify-between rounded-lg border p-4">
        <div className="space-y-0.5">
          <label className="text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Parking
          </label>
          <div className="text-sm text-muted-foreground">
            Add parking to your stay
          </div>
        </div>
        <Switch
          checked={parking}
          onCheckedChange={toggleParking}
        />
      </div>

      <div className="flex flex-row items-center justify-between rounded-lg border p-4">
        <div className="space-y-0.5">
          <label className="text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Spa Access
          </label>
          <div className="text-sm text-muted-foreground">
            Add spa access to your stay
          </div>
        </div>
        <Switch
          checked={spa}
          onCheckedChange={toggleSpa}
        />
      </div>
    </div>
  )
} 