import { FaClock, FaHome, FaMailBulk } from "react-icons/fa";
import { FaWhatsapp } from 'react-icons/fa6';

function Contact() {
  return (
      
      <section className="min-h-screen md:h-screen w-screen relative flex flex-col justify-center items-center md:flex-row md:px-24 py-16">
      {/* Form Section */}
      <div className="w-full md:w-1/2 bg-white px-10 py-16 z-10 ">
        <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
        <p className="text-gray-500 mb-8">
          Feel free to contact us any time. We will get back to you as soon as we can!
        </p>
        <form className="space-y-6">
          <input
            type="text"
            placeholder="Name"
            className="w-full border-b border-gray-300 py-2 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border-b border-gray-300 py-2 focus:outline-none"
          />
          <textarea
            placeholder="Message"
            className="w-full border-b border-gray-300 py-2 h-28 resize-none focus:outline-none"
          />
          <button
            type="submit"
            className="w-full bg-black text-white font-semibold py-3 tracking-widest hover:bg-gray-800 transition"
          >
            SEND
          </button>
        </form>
      </div>

        <div className="bg-amber-300 w-1/5 h-full absolute right-0 top-0">.</div>

      {/* Info Section */}
      <div className="w-full md:w-1/2 flex justify-end items-center md:px-10 py-16 pt-0 relative overflow-hidden z-10">
          
          <div className=" w-[450px] bg-white md:border-2 rounded-xl p-10 pb-16 relative overflow-hidden">

            <h3 className="text-2xl font-semibold mb-8">Info</h3>
            <ul className="space-y-10">
            <li className="flex items-center gap-4">
                <span className="text-3xl"><FaMailBulk/></span>
                <span>oganDidgeridoo@gmail.com</span>
            </li>
            <li className="flex items-center gap-4">
                <span className="text-3xl"><FaWhatsapp/></span>
                <span>+6281337744209</span>
            </li>
            <li className="flex items-center gap-4">
                <span className="text-3xl"><FaHome/></span>
                <span>Jl. Raya Gentong, Tegallalang, Kecamatan Ubud, Kabupaten Gianyar, Bali 80561</span>
            </li>
            <li className="flex items-center gap-4">
                <span className="text-3xl"><FaClock/></span>
                <span>09:00 - 18:00</span>
            </li>
            </ul>
          </div>

      </div>
    </section>

  )
}

export default Contact
