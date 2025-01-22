import { render } from '@testing-library/react';

import { ModuleProjectsUi } from './module-projects-ui';

describe('ModuleProjectsUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ModuleProjectsUi />);
    expect(baseElement).toBeTruthy();
  });
});
