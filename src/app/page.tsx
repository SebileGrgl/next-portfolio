import Image from "next/image";

const Homepage = () => {
  return (
    <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 ">
      <div className="h-1/2 lg:h-full lg:w-1/2 relative ">
        <Image src="/hero.png" alt="hero" fill className="object-contain" />
      </div>
      <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center ">
        <h1 className="text-4xl md:text-6xl font-bold">
          Lorem ipsum dolor sit amet.
        </h1>
        <p className="md:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod corporis
          non quaerat voluptas quis cum at enim maiores nam natus? Quibusdam
          quisquam optio impedit velit molestiae nihil, praesentium sed corporis
          beatae harum alias cumque itaque.
        </p>
        <div className="w-full flex gap-4">
          <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
            View My Work
          </button>
          <button className="p-4 rounded-lg ring-1 ring-black">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
