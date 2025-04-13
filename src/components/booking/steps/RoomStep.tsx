import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useRoomStore } from '@/stores/room-store';

export function RoomStep() {
  const { selectedRoom, setSelectedRoom } = useRoomStore();

  return (
    <div className="space-y-2">
      <label className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
        Room Type
      </label>
      <Select value={selectedRoom || ''} onValueChange={setSelectedRoom}>
        <SelectTrigger>
          <SelectValue placeholder="Select a room type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="standard">Standard Room - $100/night</SelectItem>
          <SelectItem value="deluxe">Deluxe Room - $150/night</SelectItem>
          <SelectItem value="suite">Suite - $250/night</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
