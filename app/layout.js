import '../styles/globals.css';

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body className='min-h-screen bg-gray-100 max-w-[1500px] mx-auto text-gray-900'>{children}</body>
    </html>
  )
}
