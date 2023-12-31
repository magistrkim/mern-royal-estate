import { FaInstagramSquare, FaLinkedin, FaGithubSquare } from 'react-icons/fa';
import { logoFooter, copyRight } from '../assets/icons';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <section className="bg-[#062C4F]">
      <footer className="max-container padding-x py-8">
        <div
          className="flex justify-between items-start flex-wrap gap-4
      max-lg:flex-col"
        >
          <div className="flex flex-col items-start ">
            <a href="/" aria-label="footer logo">
              <img src={logoFooter} alt="logo" width={100} height={60} />
            </a>
            <p className="mt-6 text-base leading-7 text-white-400 font-poppins sm:max-w-sm">
              Find Your perfect House with Royal Estate. Follow us!
            </p>
            <div className="flex items-center gap-5 mt-8">
              <ul className="flex justify-center items-center gap-4">
                <li>
                  {' '}
                  <a
                    href="https://github.com/magistrkim"
                    aria-label="Instagram"
                  >
                    <FaInstagramSquare className="w-12 h-12 text-white hover:text-slate-300" />
                  </a>
                </li>
                <li>
                  {' '}
                  <a href="https://github.com/magistrkim" aria-label="LinkedIn">
                    <FaLinkedin className="w-12 h-12 text-white hover:text-slate-300" />
                  </a>
                </li>
                <li>
                  {' '}
                  <a href="https://github.com/magistrkim" aria-label="GitHub">
                    <FaGithubSquare className="w-12 h-12 text-white hover:text-slate-300" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-24 text-white-400 max-sm:flex-col max-sm:items-center">
          <div className="flex flex-1 justify-start items-center gap-2 font-roboto cursor-pointer">
            <img
              src={copyRight}
              alt="copyright sign"
              width={18}
              height={18}
              className="rounded-full m-0"
            />
            <Link
              to={'/copyright'}
              className="font-poppins text-sm"
              aria-label="copyright"
            >
              Copyright. All rights reserved.
            </Link>
          </div>
          <Link
            to={'/terms'}
            className="font-poppins text-sm cursor-pointer"
            aria-label="terms and conditions"
          >
            Terms & Conditions
          </Link>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
