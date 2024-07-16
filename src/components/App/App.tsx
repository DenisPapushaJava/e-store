import { useState } from 'react';
import { StyledFlex } from '../Flex/styledFlex.ts';

function App() {
  const [increment, setIncrement] = useState(0);

  return (
    <>
      <StyledFlex justify={'center'} margin={'50vh'}>
        {increment}
        <button onClick={() => setIncrement((prev) => prev + 1)}>+</button>
        <button onClick={() => setIncrement((prev) => prev - 1)}>-</button>
      </StyledFlex>
    </>
  );
}

export default App;
