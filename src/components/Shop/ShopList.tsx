import Card from "./Card";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="text-center my-12">
        <h2 className="text-3xl font-bold text-gray-800">Featured Products</h2>
        <p className="text-gray-600 mt-2">Discover the best didgeridoos at Dolphin Store.</p>
      </section>

      {/* Products */}
      <div className="flex flex-wrap justify-center gap-8">
          <Card
            image={""}
            title={""}
            price={""}
            link=""
          />
      </div>
    </div>
  );
};

export default Home;
