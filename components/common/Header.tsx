export default function Header() {
  return (
    <header className="w-full p-4 flex justify-between items-center fixed top-0 left-0 z-50">
      <input type="text" placeholder="Search for movies..." className="input-class" />
      <button className="border border-gray-link text-gray-link px-5 py-1 mr-10 rounded-full">Login</button>
    </header>
  );
}
