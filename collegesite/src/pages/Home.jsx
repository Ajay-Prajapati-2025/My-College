import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col max-w-6xl mx-auto mt-5 sm:w-full">

      <div className="w-full">
        <img
          src="https://ldce.ac.in/upload/gallery/1/civil-engineering-NUOFlJg9xP.jpg"
          alt="College image"
          className="w-full h-96 object-cover"
        />
      </div>


      <div className=" w-full max-w-7xl flex flex-col self-center mt-14">

        <div className="m-4">
          <h1 className="text-3xl text-blue-800 underline underline-offset-8">
            Welcome To LDCE{" "}
          </h1>
          <br />
          <p className="bg-gray-100 p-4 border-l-2 border-blue-800">
            L. D. College of Engineering endearingly known as L.D.C.E is
            Ahmedabad’s premier engineering college situated at the city’s heart
            and surrounded by elite organization like PRL, ATIRA, ISRO, IIM and
            CEPT. Starting in 1948 to impart quality higher education in various
            fields of engineering, it has seen unprecedented growth. It is
            affiliated with Gujarat Technological University & administrated by
            Department of Technical Education, Government of Gujarat.
          </p>
        </div>


        <div className="m-4">
          <h1 className="text-3xl text-blue-800 underline underline-offset-8">
            Vision
          </h1>
          <br />
          <p className="bg-gray-100 p-4 border-l-2 border-blue-800 ">
            To contribute for sustainable development of nation through
            achieving excellence in technical education and research while
            facilitating transformation of students into responsible citizens
            and competent professionals.
          </p>
        </div>

        <div className="m-4">
          <h1 className="text-3xl text-blue-800 underline underline-offset-8">
            Mission
          </h1>
          <br />
          <p className="bg-gray-100 p-4 border-l-2 border-blue-800">
            <ul className="list-disc ml-3 ">
              <li>To impart affordable and quality education in order to meet the needs of industries and achieve excellence in teaching-learning process.</li>
              <li>To create a conducive research ambience that drives innovation and nurtures research-oriented scholars and outstanding professionals.</li>
              <li>To collaborate with other academic & research institutes as well as industries in order to strengthen education and multidisciplinary research.</li>
              <li>To promote equitable and harmonious growth of students, academicians, staff, society and industries, thereby becoming a center of excellence in technical education.</li>
              <li>To practise and encourage high standards of professional ethics, transparency and accountability.</li>
            </ul>
          </p>
        </div>

        <div className="m-4 px-3 max-w-6xl mx-auto sm:w-full sm:items-center">
        <h1 className="text-3xl text-blue-800 underline underline-offset-8">
            Palcement Companies
        </h1>
        <br />
        <div className="flex flex-col sm:flex-row sm:overflow-scroll md:overflow-scroll lg:overflow-scroll xl:overflow-scroll sm:items-center gap-4 max-w-6xl mx-auto sm:w-full ">
            <img src="./images/tcs.jpg" alt="Tcs image" className="w-40 h-40 object-cover "/>
            <img src="./images/wipro.jpg" alt="Tcs image" className="w-40 h-40 object-cover"/>
            <img src="./images/accenture.png" alt="Tcs image" className="w-40 h-40 object-cover"/>
            <img src="./images/GNFC.png" alt="Tcs image" className="w-40 h-40 object-cover"/>
            <img src="./images/IBM.jpg" alt="Tcs image" className="w-40 h-40 object-fit"/>
            <img src="./images/kiwitech.png" alt="Tcs image" className="w-56 h-40 object-fit"/>
        </div>
        

        </div>

      </div>
    </div>
  );
}
