import ReactQueryWrapper from '@/components/reactquerywrapping/reactquery';
import './global.css';


export const metadata = {
  title: 'Welcome to sekilasilmu',
  description: 'Generated by create-nx-workspace',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ReactQueryWrapper>{children}</ReactQueryWrapper>
      </body>
    </html>
  );
}
