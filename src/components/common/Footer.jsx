import { FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="py-12 md:py-20 bg-tertiary text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <h5 className="uppercase mb-6 text-2xl">{`Let's get in touch`}</h5>
          <div className="flex items-center gap-x-6">
            <Link
              to="https://www.facebook.com/hri.ahm/"
              className="opacity-65 hover:opacity-100 hover:text-primary hover:translate-y-1 duration-500"
            >
              <FaFacebookF size={20} />
            </Link>
            <Link
              to="https://www.linkedin.com/in/ridoy-syl/"
              className="opacity-65 hover:opacity-100 hover:text-primary hover:translate-y-1 duration-500"
            >
              <FaLinkedinIn size={20} />
            </Link>
            <Link
              to="https://github.com/ahmadhridoy"
              className="opacity-65 hover:opacity-100 hover:text-primary hover:translate-y-1 duration-500"
            >
              <FaGithub size={20} />
            </Link>
          </div>
          <h5 className="opacity-75 mt-8">{`Copyright ©2023 All rights reserved | This template is made with 🤍 by Ridoy`}</h5>
        </div>
      </div>
    </div>
  );
};

export default Footer;
