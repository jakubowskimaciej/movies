export default function Home() {
  return (
    <section>
      <h2 className=" flex flex-col capitalize text-2xl font-light text-gray-light my-6 mx-3">
        popular <span className="uppercase text-sm font-bold">movies</span>
      </h2>

      <div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 place-items-center justify-center"
        style={{
          gridTemplateColumns: 'repeat(auto-fit, minmax(10rem, 20rem))',
        }}
      >
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="bg-gray-700 w-64 h-[320px] rounded-lg"></div>
        ))}
      </div>
    </section>
  );
}
