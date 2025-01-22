import { ProjectEntity } from '../../../entities/project';
import { Trans } from '@lingui/react/macro';
import { FC } from 'react';

export const ProjectDetailsWidget: FC = () => {
  return (
    <ProjectEntity>
      <Trans>Project Details</Trans>
    </ProjectEntity>
  );
};
