import React from 'react';
import test from 'ava';
import { mount } from 'enzyme';

import { Lamp } from '../src/app';

test('lamp is off', t => {
  const createEnvironment = mount(<Lamp />);

  t.is(createEnvironment.text(), 'The lamp is off!');
});
