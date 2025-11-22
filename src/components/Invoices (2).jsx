import Empty from "./Empty";
import InvoiceCard from "./InvoiceCard";
import LoadingInvoices from "./LoadingInvoices";

export default function Invoices({ invoices, error, loading }) {
  if (loading) {
    return <LoadingInvoices count={7} />;
  }

  if (error) {
    return <p>Xatolik!</p>;
  }

  return (
    <div className="flex flex-col gap-4 container mx-auto px-5">
      {invoices.length > 0 ? (
        invoices.map((inv) => {
          return (
            <InvoiceCard
              clientName={inv.clientName}
              paymentDue={inv.paymentDue}
              id={inv.id}
              elId={inv.elId}
              status={inv.status}
              total={inv.total}
              key={inv.id}
            />
          );
        })
      ) : (
        <Empty />
      )}
    </div>
  );
}
