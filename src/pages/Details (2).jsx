import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import StatusBadge from "../components/StatusBadge";
import { Button } from "../components/ui/button";
import { ArrowLeft, Pen, RefreshCcw } from "lucide-react";
import EditElementSheet from "../components/EditElementSheet";
import { toast } from "sonner";
import Empty from "../components/Empty";

export default function Details() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [invoice, setInvoice] = useState(null);
  const [loading, setLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [error, setError] = useState(null);

  function handleDelete() {
    setDeleteLoading(true);
    fetch(`https://json-api.uz/api/project/invoice-app-fn43/invoices/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        return res.text();
      })
      .then((res) => {
        toast.success(res);
        back();
      })
      .catch(() => {
        setError("Xatolik");
      })
      .finally(() => {
        setDeleteLoading(false);
      });
  }

  function setPaid() {
    setLoading(true);
    fetch(`https://json-api.uz/api/project/invoice-app-fn43/invoices/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status: "paid",
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setInvoice(res);
      })
      .catch(() => {
        setError("Xatolik");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  function back() {
    navigate(-1);
  }

  useEffect(() => {
    setLoading(true);
    fetch(`https://json-api.uz/api/project/invoice-app-fn43/invoices/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setInvoice(res);
      })
      .catch(() => {
        setError("Something went wrong :(");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (error)
    return (
      <div>
        <Button onClick={back} className="mb-5" variant={"secondary"}>
          <ArrowLeft /> Back
        </Button>
        <Empty />
      </div>
    );

  if (loading) return <p>Loading...</p>;

  return (
    invoice && (
      <div className="py-10">
        <div className="container mx-auto px-5">
          <Button onClick={back} className="mb-5" variant={"secondary"}>
            <ArrowLeft /> Back
          </Button>
          <div className="rounded-md shadow p-3 flex justify-between">
            <span className="inline-flex items-center gap-5">
              Status <StatusBadge status={invoice.status} />
            </span>

            <div className="flex gap-5">
              <EditElementSheet setInvoice={setInvoice} invoice={invoice} />
              <Button
                disabled={deleteLoading}
                onClick={handleDelete}
                variant={"destructive"}
              >
                {deleteLoading && <RefreshCcw className="animate-spin mr-4" />}{" "}
                Delete
              </Button>
              {invoice.status === "pending" && (
                <Button onClick={setPaid} variant={"outline"}>
                  Mark as Paid
                </Button>
              )}
            </div>
          </div>

          {invoice.senderAddress.street}
        </div>
      </div>
    )
  );
}
