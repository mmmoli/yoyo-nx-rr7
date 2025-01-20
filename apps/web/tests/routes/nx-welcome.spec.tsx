import { createRoutesStub } from 'react-router';
import { render, screen, waitFor } from '@testing-library/react';
import NxWelcome from '../../app/nx-welcome';

test.skip('renders loader data', async () => {
  const RemixStub = createRoutesStub([
    {
      path: '/',
      Component: NxWelcome,
    },
  ]);

  render(<RemixStub />);

  await waitFor(() => screen.findByText('Hello there,'));
});
