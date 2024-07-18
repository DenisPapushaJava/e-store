import { StyledFlex } from '../Flex/styledFlex.ts';
import { useState } from 'react';
import DataFetcher from '../DataFetcher';
function App() {
  const [info, setInfo] = useState<{ message: string } | null>(null);
  const [error, setError] = useState<{ message: string } | null>(null);
  return (
    <>
      <StyledFlex justify={'center'}>
        <h1>Data from Server:</h1>
        <DataFetcher
          url="http://localhost:3000/api"
          onData={setInfo}
          onError={setError}
        />
        <p>{info?.message}</p>
        <p>{error?.message ? error.message : '...Loading...'}</p>
      </StyledFlex>
    </>
  );
}

export default App;
