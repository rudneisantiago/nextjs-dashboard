import { fetchCustomers, fetchInvoiceById } from "@/app/lib/data";
import Breadcrumbs from "@/app/ui/invoices/breadcrumbs";
import Form from '@/app/ui/invoices/edit-form'

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const { id } = await props.params
  const [customers, invoice] = await Promise.all([
    fetchCustomers(),
    fetchInvoiceById(id)
  ])

  return (
    <main>
      <Breadcrumbs breadcrumbs={[{
        label: 'Invoices', href: '/dashboard/invoices'
      },
      { label: 'Edit invoice', href: `/dashboard/invoices/${id}/edit`, active: true }]} />
      <Form invoice={invoice} customers={customers} />
    </main>
  )
}
