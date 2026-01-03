// const servicesData = [
//   {
//     title: "E-Commerce & WebShop",
//     description:
//       "Designing fast, scalable, and user-friendly online stores that create a smooth shopping experience. Focused on usability, trust, and conversion optimization from first visit to final checkout.",
//   },
//   {
//     title: "Dashboard",
//     description:
//       "Designing data-driven dashboards with clear structure and intuitive interactions. Turning complex information into simple, readable insights that support faster and smarter decision-making.",
//   },
//   {
//     title: "Adminpanel",
//     description:
//       "Creating efficient and easy-to-use admin panels that simplify system management. Designed for speed, clarity, and reduced user error in everyday administrative workflows.",
//   },
//   {
//     title: "Branding",
//     description:
//       "Building cohesive and memorable brand identities, from logos to complete visual systems. Crafting designs that clearly express your brand’s personality and make it instantly recognizable.",
//   },
// ];

import { FaBriefcase, FaCartPlus, FaCog, FaDropbox, FaShopify } from "react-icons/fa"

// const Servers = () => {
//   return (
//     <section className="grid grid-cols-1 md:grid-cols-2 gap-6">

//          {/* section title  */}
//       <div className="text-center mb-16">
//         <h2 className="text-4xl font-bold text-white">CONTACT</h2>
//         <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
//         <p className="text-gray-400 mt-4 md:text-lg text-md font-semibold">
//           I'd love to hear from you-reach out for any opportunities or
//           questions!
//         </p>
//       </div>

//       {servicesData.map((service, index) => (
//         <div
//           key={index}
//           className="relative bg-[#0d0d1f] rounded-lg shadow-lg border border-gray-700 p-6"
//         >
//           {/* decorative circle */}
//           <div className="absolute left-6 top-6 w-10 h-10 rounded-full border border-gray-600" />

//           <h3 className="text-white text-xl md:text-2xl font-semibold mb-3 pl-14">
//             {service.title}
//           </h3>

//           <p className="text-gray-400 text-sm md:text-base leading-relaxed pl-14">
//             {service.description}
//           </p>
//         </div>
//       ))}
//     </section>
//   );
// };

// export default Servers;



function Serveses() {
  return (
    <>
<section className="sm:">

  {/* section title */}
  <div className="text-center mb-16">
    <h2 className="text-4xl font-bold text-white">SERVICES</h2>
    <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
    <p className="text-gray-400 mt-4 md:text-lg text-md font-semibold">
      I'd love to hear from you — reach out for any opportunities or questions!
    </p>
  </div>

  {/* Services Grid */}
  <div className="px-4 sm:px-6 md:px-8 max-w-6xl mx-auto">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      
      {/* Card 1 */}
      <div className="bg-[#0d081f] rounded-lg shadow-lg border border-gray-700 p-4 flex items-start gap-3">
        <FaCartPlus size={30} className="text-green-400 flex-shrink-0" />
        <div>
          <h2 className="text-gray-200 font-semibold">E-Commerce WebShop</h2>
          <small className="text-gray-400 block mt-2">
            Fast and user-friendly online stores focused on smooth shopping experiences and higher conversions.
          </small>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-[#0d081f] rounded-lg shadow-lg border border-gray-700 p-4 flex items-start gap-3">
        <FaBriefcase size={30} className="text-green-400 flex-shrink-0" />
        <div>
          <h2 className="text-gray-200 font-semibold">Branding</h2>
          <small className="text-gray-400 block mt-2">
            Creating clear and memorable brand identities that make your brand recognizable and distinctive.
          </small>
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-[#0d081f] rounded-lg shadow-lg border border-gray-700 p-4 flex items-start gap-3">
        <FaDropbox size={30} className="text-green-400 flex-shrink-0" />
        <div>
          <h2 className="text-gray-200 font-semibold">Dashboard</h2>
          <small className="text-gray-400 block mt-2">
            Clean and intuitive dashboards that turn complex data into clear, actionable insights.
          </small>
        </div>
      </div>

      {/* Card 4 */}
      <div className="bg-[#0d081f] rounded-lg shadow-lg border border-gray-700 p-4 flex items-start gap-3">
        <FaCog size={30} className="text-green-400 flex-shrink-0" />
        <div>
          <h2 className="text-gray-200 font-semibold">Adminpanel</h2>
          <small className="text-gray-400 block mt-2">
            Efficient admin panels designed for clarity, speed, and easy system management.
          </small>
        </div>
      </div>

    </div>
  </div>

</section>
    
    </>
  )
}

export default Serveses