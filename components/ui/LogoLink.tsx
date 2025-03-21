import Image from 'next/image';
import Link from 'next/link';

export default function LogoLink() {
  return (
    <div className=" w-full h-[200px] flex justify-center items-center ">
      <Link href="/movies/popular" className="flex justify-center items-center">
        <Image
          src="/icons/logo.svg"
          width={200}
          height={200}
          alt="Movies Library logo"
          style={{ width: '80%', height: '80%' }}
          priority
        />
      </Link>
    </div>
  );
}
