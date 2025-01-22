import { Tagged } from 'type-fest';

export type ProjectId = Tagged<string, 'ProjectId'>;
export type ProjectName = Tagged<string, 'ProjectName'>;

export type Project = {
  id: ProjectId;
  name: ProjectName;
};
