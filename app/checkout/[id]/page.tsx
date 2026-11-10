// app/documents/[id]/page.tsx

import prisma  from '@/lib/prisma'
import { notFound } from 'next/navigation'
import CheckoutForm from '@/components/web/CheckoutForm'

interface PageProps {
  params: Promise<{ id: string }>
}

export default async function CheckoutPage({ params }: PageProps) {
  const { id } = await params

  // Fetch document details server-side from Neon DB
  const document = await prisma.document.findUnique({
    where: { id },
  })

  if (!document) {
    notFound()
  }

  return (
    <main className="max-w-md mx-auto mt-12 p-6 border rounded-lg shadow-sm">
      <h1 className="text-2xl font-bold mb-2">{document.title}</h1>
      <p className="text-gray-600 mb-6">Secure PDF Download</p>
      <div className="text-3xl font-semibold mb-6">
        ${document.price.toFixed(2)/100}
      </div>
      <CheckoutForm documentId={document.id} price={document.price} />
    </main>
  )
}
