import React from 'react';

import Button from '../components/button'

export default {
  title: 'Example/Button',
  component: Button,
};



export const withEmoji = () => (
  <Button>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);


