export default function PageTitle({ title }: { title: string }) {
  return (
    <h2 className=" flex flex-col capitalize text-2xl font-light text-gray-light my-6 mx-3">
      {title} <span className="uppercase text-sm font-bold">movies</span>
    </h2>
  );
}
