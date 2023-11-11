
import './globals.css'
export const metadata = {
  title: 'CRUD-APP',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='h-[200vh]'>{children}</body>
    </html>
  )
}
 