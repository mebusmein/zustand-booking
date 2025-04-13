import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { ResetStoresButton } from './ResetStoresButton';
import { useAllRoomContexts } from '@/contexts/room-context';
import { usePropertyStore } from '@/stores/property-store';
export const DevToolsInstructions = () => {
  const { currentRoomContext, storedRoomContexts } = useAllRoomContexts();
  const propertyId = usePropertyStore((state) => state.selectedProperty);

  return (
    <div className="sticky top-4">
      <Card className="border-none bg-transparent shadow-none">
        <CardHeader className="space-y-4">
          <div className="flex items-center justify-between">
            <CardTitle>Testing Instructions</CardTitle>
            <ResetStoresButton />
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <h3 className="font-semibold">1. Install Redux DevTools</h3>
            <p>Install the Redux DevTools browser extension:</p>
            <ul className="list-disc space-y-1 pl-4">
              <li>
                Chrome:{' '}
                <a
                  href="https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd"
                  className="text-blue-500 hover:underline"
                >
                  Redux DevTools
                </a>
              </li>
              <li>
                Firefox:{' '}
                <a
                  href="https://addons.mozilla.org/en-US/firefox/addon/reduxdevtools/"
                  className="text-blue-500 hover:underline"
                >
                  Redux DevTools
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold">2. Testing Store Persistence</h3>
            <p>To test the persistence and caching behavior:</p>
            <ul className="list-disc space-y-1 pl-4">
              <li>Select a property and room to see the store being created</li>
              <li>
                Toggle extras (breakfast, parking, spa) and observe the state changes in DevTools
              </li>
              <li>Refresh the page - the state should persist</li>
              <li>Try different property/room combinations to see separate stores being created</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold">3. Current State</h3>
            <div className="rounded bg-gray-100/50 p-4">
              <p>Current Room Context: {propertyId}</p>
              <pre>{JSON.stringify(currentRoomContext, null, 2)}</pre>
              <pre>{JSON.stringify(storedRoomContexts, null, 2)}</pre>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold">4. Tips for Testing</h3>
            <ul className="list-disc space-y-1 pl-4">
              <li>Use the "State" tab in DevTools to inspect the current state</li>
              <li>Use the "Diff" tab to see what changed in each action</li>
              <li>Try the "Jump" feature to time-travel through state changes</li>
              <li>Check the "Persist" tab to verify storage is working</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
