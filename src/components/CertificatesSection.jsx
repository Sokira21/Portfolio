// components/CertificatesSection.js
import React from 'react';

const certificates = [
  {
    title: 'Certificate of Training Backend Development',
    issuer: 'Pixel8 Academy',
    date: 'December 19, 2023',
    img: './certificates/Pixel8 Academy - CERTIFICATE OF TRAINING (Backend) - Jake Aldrin B. Robosa (1)_page-0001.jpg'
  },
  {
    title: 'Certificate oF Competency - Backend Development',
    issuer: 'Pixel8 Academy',
    date: 'December 19, 2023',
    img: './certificates/Pixel8 Academy - Competency Certificate (Backend) - Jake Aldrin B. Robosa (1)_page-0001.jpg'
  },
  {
    title: 'Developer to Decision Making',
    issuer: 'Bicol IT',
    date: 'March 15, 2025',
    img: './certificates/Bicol IT cert - Developer to Decision making.png'
  },
  {
    title: 'Python Essentials',
    issuer: 'CISCO Networking Academy',
    date: 'May 29, 2025',
    img: './certificates/Python-Cisco-Networking-academy.jpg'
  }
  // Add more certificates as needed
];

function CertificatesSection() {
  return (
    <section className="w-full py-16 px-6 bg-transparent text-white">
      <h2 className="text-3xl font-bold text-center mb-12 text-cyan-400 drop-shadow">Certificates</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="bg-[#0e0e0e] border border-cyan-500/20 rounded-xl shadow-md hover:shadow-cyan-400/30 transition-shadow duration-300 p-4"
          >
            <img
              src={cert.img}
              alt={cert.title}
              className="w-full h-48 object-cover rounded-md mb-4 shadow-inner"
            />
            <h3 className="text-lg font-semibold text-cyan-300">{cert.title}</h3>
            <p className="text-sm text-gray-400">{cert.issuer}</p>
            <p className="text-xs text-gray-500">{cert.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CertificatesSection;
