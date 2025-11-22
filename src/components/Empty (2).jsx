export default function Empty() {
  return (
    <div className="flex flex-col items-center text-center gap-10 max-w-[500px] mx-auto">
      <img
        className="w-[250px] h-[200px] object-center object-cover"
        src="/empty.png"
        alt="Empty image"
      />
      <h2 className="font-bold mb-5 text-5xl">There is nothing here</h2>
      <p>
        Create an invoice by clicking the New Invoice button and get started
      </p>
    </div>
  );
}
