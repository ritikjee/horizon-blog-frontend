import Image from "next/image";

function Navbar() {
  return (
    <div className="w-full">
      <Image src="/Logo.svg" width={200} height={100} alt="logo" />
    </div>
  );
}

export default Navbar;
