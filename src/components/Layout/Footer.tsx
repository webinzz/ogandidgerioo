import {
    FaFacebookF, FaInstagram, FaYoutube, FaXTwitter, FaTiktok,
  } from 'react-icons/fa6';
  
  
  const Footer = () => {
    return (
      <footer className="bg-gray-100 py-12 px-6 md:px-20">
        <div className="grid md:grid-cols-5 gap-10">
  
          {/* Get in Touch */}
          <div className='col-span-2'>
            <h3 className="text-5xl font-bold mb-4">GET IN TOUCH</h3>
            <div className="flex flex-wrap gap-6 text-2xl">
              <FaFacebookF />
              <FaInstagram />
              <FaYoutube />
              <FaXTwitter />
              <FaTiktok />
            </div>
          </div>
  
          {/* Services */}
          <div>
            <h4 className="text-sm uppercase  mb-4">Services</h4>
            <ul className="space-y-2">
              <li>Didgerdioo Production</li>
              <li>Coustume Didgeridoo</li>
            </ul>
          </div>
  
          {/* Quick Links */}
          <div>
            <h4 className="text-sm uppercase mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>Home</li>
              <li>About</li>
              <li>Product</li>
              <li>Contact</li>
            </ul>
          </div>
  
          {/* Support */}
          <div>
            <h4 className="text-sm uppercase     mb-4">Support</h4>
            <ul className="space-y-2">
              <li>Careers</li>
              <li>Virtuos Offices</li>
            </ul>
          </div>
        </div>
  
        {/* Bottom */}
        <div className="mt-12 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between text-sm">
          <p>© 2025 </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Career Privacy Notice</a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  