import type { NextPage } from 'next';
import Button from '@mui/material/Button';
import React from 'react';

const Home: NextPage = () => {
  return (
    <div>
      <Button>Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </div>
  );
};

export default Home;
// css
