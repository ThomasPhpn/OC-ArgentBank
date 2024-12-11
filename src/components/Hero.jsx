const Hero = () => {
  return (
    <div
      className="bg-cover bg-top h-[400px] relative"
      style={{ backgroundImage: "url('/img/bank-tree.jpeg')" }}
    >
      <div className="bg-white p-8 m-8 absolute top-16 right-16">
        <h2 className="text-2xl font-bold">No fees.</h2>
        <h2 className="text-2xl font-bold">No minimum deposit.</h2>
        <h2 className="text-2xl font-bold">High interest rates.</h2>
        <p className="mt-4 text-lg">
          Open a savings account with Argent Bank today!
        </p>
      </div>
    </div>
  );
};

export default Hero;
