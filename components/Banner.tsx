function Banner() {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 font-bold justify-between px-10 py-5 mb-10">
      <div>
        <h1 className="text-7xl">Pretam Dey</h1>
        <h2 className="mt-5 md:mt-0">
          Welcome to{" "}
          <span className="underline decoration-4 decoration-[#f7550ae9]">
            Pretam Dey{" "}
          </span>
          Capturing Kolkatas soul through the lens.
        </h2>
      </div>

      <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
        Revealing the beauty and diversity of Kolkata and West Bengal through my
        lens.
      </p>
    </div>
  );
}

export default Banner;
