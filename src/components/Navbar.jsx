import logo from "../../public/First/logo.svg";

const Navbar = () => {
  return (
    <nav className="w-4/5 mx-auto absolute top-0 left-0 right-0 z-20 flex justify-between items-center py-4">
      <div className="flex items-center gap-2 text-white">
        <img src={logo} alt="Logo" className="h-10" />
        <span className="text-xl font-semibold">WellnessXpert</span>
      </div>
      <ul className="flex items-center space-x-6 text-white uppercase text-sm">
        <li>
          <a href="#home" className="hover:text-gray-300">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="hover:text-gray-300">
            About
          </a>
        </li>
        <li>
          <a href="#services" className="hover:text-gray-300">
            Services
          </a>
        </li>
        <li>
          <a href="#pages" className="hover:text-gray-300">
            Pages
          </a>
        </li>
        <li>
          <a href="#blog" className="hover:text-gray-300">
            Blog
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-gray-300">
            Contact
          </a>
        </li>
        <li className="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-telephone"
            viewBox="0 0 16 16"
          >
            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
          </svg>
          <a href="tel:+408000246888" className="hover:text-gray-300">
            +(40) 800 0246 888
          </a>
        </li>
        <li>
          <button className="uppercase flex items-center gap-1 bg-secondary text-white px-4 py-2 rounded hover:bg-green-900 transition">
            <span>
              <svg
                width="14"
                height="15"
                viewBox="0 0 14 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.22102 1.00262C4.43825 0.544892 4.90684 0.226807 5.44836 0.226807H8.55164C9.09316 0.226807 9.56097 0.544892 9.77898 1.00262C10.3089 1.00728 10.7224 1.03133 11.0917 1.17563C11.5325 1.34807 11.9159 1.64113 12.198 2.02127C12.4827 2.40453 12.6169 2.89562 12.8 3.57136L13.3757 5.68313L13.5929 6.3356L13.6115 6.35887C14.3105 7.25416 13.9777 8.58547 13.3121 11.2473C12.8885 12.9409 12.6774 13.7873 12.0459 14.2807C11.4144 14.7734 10.5416 14.7734 8.79602 14.7734H5.20398C3.45839 14.7734 2.5856 14.7734 1.95408 14.2807C1.32257 13.7873 1.11077 12.9409 0.687947 11.2473C0.0222953 8.58547 -0.310531 7.25416 0.388481 6.35887L0.407101 6.3356L0.62433 5.68313L1.19999 3.57136C1.38386 2.89562 1.51807 2.40375 1.80202 2.0205C2.08421 1.64064 2.46759 1.34786 2.90834 1.17563C3.27763 1.03133 3.69036 1.0065 4.22102 1.00262ZM4.22257 2.1679C3.70898 2.17333 3.50261 2.19273 3.33193 2.25945C3.09451 2.3523 2.88802 2.51012 2.73611 2.71485C2.59956 2.89872 2.51888 3.15552 2.29389 3.98332L1.85167 5.604C2.64301 5.46358 3.7245 5.46358 5.20321 5.46358H8.79602C10.2755 5.46358 11.3562 5.46358 12.1476 5.60322L11.7061 3.98254C11.4811 3.15474 11.4004 2.89795 11.2639 2.71408C11.112 2.50935 10.9055 2.35152 10.6681 2.25867C10.4974 2.19195 10.291 2.17256 9.77743 2.16713C9.66727 2.39898 9.49364 2.59485 9.27669 2.73203C9.05973 2.86921 8.80832 2.94207 8.55164 2.94217H5.44836C5.19176 2.94214 4.94041 2.86939 4.72346 2.73236C4.50651 2.59532 4.33284 2.39961 4.22257 2.1679Z"
                  fill="white"
                />
              </svg>
            </span>
            Let's Start
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
