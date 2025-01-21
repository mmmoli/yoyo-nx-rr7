import {
  data,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from 'react-router';
import type { MetaFunction, LinksFunction } from 'react-router';
import type { Route } from '../.react-router/types/app/+types/nx-welcome';
import { linguiServer, localeCookie } from './shared/i18n/lingui.server';

export const meta: MetaFunction = () => [
  {
    title: 'New Remix App',
  },
];

export const links: LinksFunction = () => [
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap',
  },
];

export async function loader({ request }: Route.LoaderArgs) {
  const locale = await linguiServer.getLocale(request);

  const headers = new Headers();
  headers.append('Set-Cookie', await localeCookie.serialize(locale));

  return data(
    {
      locale,
    },
    { headers }
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  const { locale } = useLoaderData<typeof loader>();
  return (
    <html lang={locale ?? 'en'}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
