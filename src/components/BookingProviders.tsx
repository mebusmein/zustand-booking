import { ReactNode } from 'react';
import { RoomProvider } from '@/contexts/room-context';
import { ExtrasProvider } from '@/contexts/extras-context';
import { usePropertyStore } from '@/stores/property-store';

interface BookingProvidersProps {
  children: ReactNode;
}

export function BookingProviders({ children }: BookingProvidersProps) {
  const propertyId = usePropertyStore((state) => state.selectedProperty);

  return (
    <RoomProvider propertyId={propertyId}>
      <ExtrasProvider propertyId={propertyId}>{children}</ExtrasProvider>
    </RoomProvider>
  );
}
