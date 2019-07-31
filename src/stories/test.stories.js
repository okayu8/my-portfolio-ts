import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Test, Welcome } from '@storybook/react/demo';

storiesOf('Button', module)
    .add('Test', () => <button onClick={action('clicked')}>Hello Button</button>);
