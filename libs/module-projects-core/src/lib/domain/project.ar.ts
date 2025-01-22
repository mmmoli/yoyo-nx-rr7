import { Ok, Fail, Result, Aggregate } from 'rich-domain';

export interface ProjectProps {
  amount: number;
}

export class Project extends Aggregate<ProjectProps> {
  private constructor(props: ProjectProps) {
    super(props);
  }

  public static override create(amount: number): Result<Project> {
    const isValid = this.isValidProps({ amount });
    if (!isValid) return Fail('Invalid amount for money');
    return Ok(new Project({ amount }));
  }
}
