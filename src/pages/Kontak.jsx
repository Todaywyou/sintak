import React from 'react'
import NavBar from '../components/NavBar';
import HeroSection from '../components/hero-section';
import { Code2Icon, FileCog2, FileLock2Icon } from 'lucide-react';
import Footer from '../components/Footer';

function ContactPage() {
  const [activeIndex, setActiveIndex] = React.useState(null);

  const handleIconClick = (index) => {
    setActiveIndex(index);
  };

  const iconClass = (index) =>
    activeIndex === index ? "text-red-500" : "";

  return (
    <div>
      <NavBar />
      <HeroSection />
      <div>

      </div>

      <div className=' flex flex-col items-center'>
        <ul className="list bg-base-100 rounded-box shadow-md">
          <li className="p-4 pb-2 text-3xl font-bold font-stretch-semi-condensed text-red-500  tracking-wide flex flex-col items-center ">
            Materi Yang akan di pelajarin
          </li>

          <li className="list-row">
            <div>
              <Code2Icon className={iconClass(0)} />
            </div>
            <div>
              <div>React</div>
              <div className="text-xs uppercase font-semibold opacity-60">
                Dari awal
              </div>
            </div>
            <p className="list-col-wrap text-xs">
              React adalah pustaka JavaScript yang digunakan untuk membangun antarmuka pengguna. Dalam pelatihan ini, peserta akan belajar dasar-dasar React, termasuk komponen, state, dan props.
            </p>
            <button
              className="btn btn-square btn-ghost"
              onClick={() => handleIconClick(0)}
            >
              <svg
                className={`size-[1.2em] ${iconClass(0)}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                </g>
              </svg>
            </button>
          </li>

          <li className="list-row">
            <div>
              <FileCog2 className={iconClass(1)} />
            </div>
            <div>
              <div>daisyui</div>
              <div className="text-xs uppercase font-semibold opacity-60">
                Desai ui udah jadi
              </div>
            </div>
            <p className="list-col-wrap text-xs">
              DaisyUI adalah pustaka komponen UI yang dibangun di atas Tailwind CSS. Dalam sesi ini, peserta akan belajar cara menggunakan DaisyUI untuk mempercepat pengembangan antarmuka pengguna dengan komponen yang sudah jadi.
            </p>
            <button
              className="btn btn-square btn-ghost"
              onClick={() => handleIconClick(1)}
            >
              <svg
                className={`size-[1.2em] ${iconClass(1)}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                </g>
              </svg>
            </button>
          </li>

          <li className="list-row">
            <div>
              <FileLock2Icon className={iconClass(2)} />
            </div>
            <div>
              <div>Tailwind</div>
              <div className="text-xs uppercase font-semibold opacity-60">
                Mengguankan nya untuk styling
              </div>
            </div>
            <p className="list-col-wrap text-xs">
              Tailwind CSS adalah framework CSS yang memungkinkan pengembang untuk membuat desain responsif dengan cepat. Dalam sesi ini, peserta akan belajar cara menggunakan Tailwind CSS untuk styling komponen React.
            </p>
            <button
              className="btn btn-square btn-ghost"
              onClick={() => handleIconClick(2)}
            >
              <svg
                className={`size-[1.2em] ${iconClass(2)}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                </g>
              </svg>
            </button>
          </li>
        </ul>
      </div>

      {/* New Section: Aesthetic Call-to-Action & Contact Card */}
      <div className="w-full flex flex-col items-center mt-16 mb-10">
        <div className="bg-gradient-to-r from-red-100 via-white to-red-100 rounded-3xl shadow-xl p-8 max-w-3xl w-full flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 flex flex-col items-center md:items-start">
            <h2 className="text-2xl md:text-3xl font-bold text-red-500 mb-2">Tertarik Bergabung?</h2>
            <p className="text-gray-700 mb-4 text-center md:text-left">
              Hubungi kami untuk informasi lebih lanjut, konsultasi, atau pendaftaran pelatihan. Kami siap membantu perjalanan belajar Anda!
            </p>
            <a
              href="mailto:info@sintak.com"
              className="inline-block bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-2 rounded-full shadow transition"
            >
              Hubungi Kami
            </a>
          </div>
          <div className="flex-1 flex flex-col items-center">
            <div className="bg-white rounded-2xl shadow-lg p-6 w-64 flex flex-col items-center">
              <img
                src="https://ui-avatars.com/api/?name=Sintak&background=ef4444&color=fff&size=128"
                alt="Contact"
                className="rounded-full mb-4 border-4 border-red-200"
              />
              <div className="text-lg font-semibold text-red-500 mb-1">Sintak Team</div>
              <div className="text-gray-600 text-sm mb-2">Customer Support</div>
              <div className="text-gray-700 text-sm mb-1">
                <span className="font-semibold">Email:</span> info@sintak.com
              </div>
              <div className="text-gray-700 text-sm">
                <span className="font-semibold">WhatsApp:</span> +62 812-3456-7890
              </div>
            </div>
          </div>
        </div>
      </div>

     <Footer/>
    </div>
  );
}

export default ContactPage