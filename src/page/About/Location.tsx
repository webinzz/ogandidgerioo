function Location() {
  return (
    <section className="w-full h-auto px-5 py-10 lg:p-10 lg:p-28 flex flex-col items-center text-center gap-y-5 bg-[--third-color]">
      <h1 className="font-bold">OUR LOCATION</h1>
      <h1 className="font-bold text-3xl">WE ARE ALWAYS OPEN EVERYDAY</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.1830603816934!2d115.27815109999999!3d-8.4815741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd223c9115edd19%3A0x8ef63dd3ff26b1a9!2sDolphin%20Didgeridoo!5e0!3m2!1sid!2sid!4v1745388896082!5m2!1sid!2sid"
        width="600"
        height="450"
        className="w-full h-[450px]"
        loading="lazy"
      ></iframe>
    </section>
  );
}

export default Location;
