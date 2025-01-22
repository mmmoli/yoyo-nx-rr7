import { Trans } from '@lingui/react/macro';
import { Loader2 } from 'lucide-react';
import { Link } from 'react-router';
import { Button } from '~/components/ui/button';
import { ProjectDetailsWidget } from '@repo/module-projects-ui';
import { getLanguages } from '@repo/service-i18n/lingui';

export function NxWelcome({ title }: { title: string }) {
  return (
    <div className="bg-red-200">
      <div className="container">
        <div id="welcome">
          <Button disabled>
            <Loader2 className="animate-spin" />
            <Trans>Please wait</Trans>
          </Button>

          <div className="flex">
            {getLanguages().map((lang) => (
              <Button key={lang.key} variant="link" asChild>
                <Link to={`?lng=${lang.key}`} reloadDocument>
                  {lang.label}
                </Link>
              </Button>
            ))}
          </div>
          <h1>
            <Trans>Hello there, Welcome {title} 👋</Trans>
          </h1>
          <ProjectDetailsWidget />
        </div>
      </div>
    </div>
  );
}

export default NxWelcome;
