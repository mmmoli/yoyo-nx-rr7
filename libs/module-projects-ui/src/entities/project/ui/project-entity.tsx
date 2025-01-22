import { FC, ReactNode } from 'react';

export interface ProjectEntityProps {
  children?: ReactNode;
}

export const ProjectEntity: FC<ProjectEntityProps> = ({ children }) => {
  return <div className="p-2 border-2 border-red-200">{children}</div>;
};
