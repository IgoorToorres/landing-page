import { Layout } from "@/components/layout"
import "@/styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Site.Set',
  description: 'Venda seus produtos como afiliado em um unico lugar',
  openGraph: {
    title: 'Blog',
    description: 'Dicas e estratégias para impulsionar seu negócio',
    url: 'https://rocketseat-nextjs-fundamentals.vercel.app/og-image.jpg',
    siteName: 'Site.Set',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: 'https://rocketseat-nextjs-fundamentals.vercel.app/og-image.jpg',
        width: 800,
        height: 600,
        alt: 'Site.Set'
      }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  )
}
