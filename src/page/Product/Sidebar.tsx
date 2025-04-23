

const Sidebar = () => (
  <aside className="sticky top-20">
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-2 border-b border-black pb-1">KATEGORI</h3>
        <ul className="space-y-2 text-sm">
          <li className="cursor-pointer hover:underline">Didgeridoo Kayu</li>
          <li className="cursor-pointer hover:underline">Didgeridoo Modern</li>
          <li className="cursor-pointer hover:underline">Aksesoris</li>
          <li className="cursor-pointer hover:underline">Dekorasi</li>
          <li className="cursor-pointer hover:underline">Budaya Aborigin</li>
        </ul>
      </div>
    </div>
  </aside>
);

export default Sidebar;
