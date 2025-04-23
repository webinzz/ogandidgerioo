type props = {
  value: number;
  label: string;
};
function WeeknesSection() {
  return (
    <section className="min-h-screen h-[120vh] flex flex-col justify-center px-8 py-16 bg-gray-50">
      <h2 className="text-xl font-bold text-center text-amber-300 mb-2">
        Our Craft
      </h2>
      <h3 className="text-4xl font-bold text-center text-amber-300 mb-12">
        WHAT MAKES OGANDIDGERIDOO SPECIAL?
      </h3>
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
        <div>
          <p className="mb-6 text-gray-700 leading-relaxed">
            Every didgeridoo we craft is a harmony of tradition and precision.
            Using ethically sourced wood, we preserve indigenous techniques
            while embracing modern refinement. Each piece resonates not only
            with sound, but with the spirit of the earth.
          </p>
          <div className="space-y-5">
            <SkillBar label="Wood Carving" value={90} />
            <SkillBar label="Sound Tuning" value={85} />
            <SkillBar label="Design & Painting" value={80} />
            <SkillBar label="Cultural Authenticity" value={95} />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 text-center">
          <StatBox value={15} label="Years of Experience" />
          <StatBox value={500} label="Instruments Sold" />
          <StatBox value={200} label="Happy Clients" />
          <StatBox value={35} label="Cultural Events" />
        </div>
      </div>
    </section>
  );
}

const SkillBar = ({ label, value }: props) => (
  <div>
    <div className="flex justify-between text-sm mb-1">
      <span className="text-black">{label}</span>
      <span className="text-black">{value}%</span>
    </div>
    <div className="w-full bg-gray-300 rounded-full h-2">
      <div
        className="bg-amber-300 h-2 rounded-full"
        style={{ width: `${value}%` }}
      ></div>
    </div>
  </div>
);

const StatBox = ({ value, label }: props) => (
  <div>
    <div className="text-3xl font-bold text-amber-300 mb-2">{value}</div>
    <div className="text-sm text-gray-700">{label}</div>
  </div>
);

export default WeeknesSection;
