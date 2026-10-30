import './globals.css';
export const metadata = {
  title: 'Syed Muhammad Imran — Full Stack Developer',
  description: 'Full Stack Developer in Karachi building responsive web applications, secure APIs, and enterprise workflows with Next.js, Node.js and FastAPI.',
};
export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}
