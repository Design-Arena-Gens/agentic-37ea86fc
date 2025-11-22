export const metadata = {
  title: 'كورس تعلم الإنجليزية - English Learning Course',
  description: 'تعلم الإنجليزية من الصفر حتى الاحتراف',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;900&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
