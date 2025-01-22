import { Trans } from '@lingui/react/macro';
import { Link } from 'react-router';

export function NxWelcome({ title }: { title: string }) {
  return (
    <div className="bg-red-200">
      <div className="container">
        <div id="welcome">
          <Link to="?lng=fr" reloadDocument>
            French
          </Link>

          <Link to="?lng=en" reloadDocument>
            English
          </Link>

          <h1>
            <Trans>Hello there, Welcome {title} 👋</Trans>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default NxWelcome;
