import { Trans } from '@lingui/react/macro';
import { Loader2 } from 'lucide-react';
import { Link } from 'react-router';
import { Button } from '~/components/ui/button';

export function NxWelcome({ title }: { title: string }) {
  return (
    <div className="bg-red-200">
      <div className="container">
        <div id="welcome">
          <Button disabled>
            <Loader2 className="animate-spin" />
            Please wait
          </Button>

          <div className="flex">
            <Button asChild variant="link">
              <Link to="?lng=fr" reloadDocument>
                French
              </Link>
            </Button>
            <Button asChild variant="link">
              <Link to="?lng=en" reloadDocument>
                English
              </Link>
            </Button>
          </div>
          <h1>
            <Trans>Hello there, Welcome {title} 👋</Trans>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default NxWelcome;
