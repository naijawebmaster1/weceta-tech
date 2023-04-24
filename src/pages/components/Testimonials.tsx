import React from 'react';

function Testimonials(props: any) {
  return <>
    <section className={`bg-teal py-0 md:px-0 m-auto`} style={{ backgroundImage: 'url("./assets/background/Pattern4.svg")' }}>

      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-0 mt-0 px-6 md:px-0 ">
        {/* Card 1 */}
        <div className="flex flex-col rounded-3xl bg-transparent md:d-none">
          <div className="p-0 flex flex-col pt-0">
              <img alt="" className="inline w-5/6" src="./img/large/Screenshot-2022-07-17-094508.png" />
          </div>
        </div>
        {/* Card 1 */}
        <div className="flex flex-col rounded-3xl transform transition duration-500 ">
          <div className="md:px-24 py-16 flex flex-col pt-10">
            <h4 className="text-3xl font-semibold text-black mt-5 m-auto">Who We Are</h4>
            <br/>
<br/>
            <p className="text-black text-center mt-2 m-auto">Our aim is to sanitize the protein value chain in Africa using class A abattoirs via our protein trail technology, guaranteeing traceability and thereby increasing corporate investments in class A slaughterhouses on the continent.
<br/>
<br/>
Weceta is a first-of-its-kind agritech startup in Nigeria We are equiped with technologies and infrastructures to facilitate the traceability of locally sourced meat (incuding fish and other kind of seafood) from farm to fork.
<br/>
<br/>
Our effort enable the standardization of food/products tracking during the production, distribution and supply chain of red meat in Nigeria
<br/>
<br/>
With the exclusive right to operate our fully patented technology (Protein Trail) across the country, our solution is an effective and seamless monitoring process for stakeholders and vetrinary authorities in each state, government inspectors, meet distributors, meat recipients (food business, etc), and end consumers.
</p>
          </div>
        </div>

        {/* Card 1 */}
        {/* <div className="flex flex-col rounded-3xl bg-white transform transition duration-300 hover:bg-transparent hover:text-white border border-gray-200">
            <div className="p-6 flex flex-col pt-10">
              <img alt="" className="inline w-10" src="./assets/icons/EasyIcon.svg" />
              <h4 className="text-xl font-semibold text-blue-900 mt-5 m-auto">Consumer Confidence</h4>
              <p className="text-blue-300 mt-2 m-auto">Enhance the auditing and investigation processes during HACCP-related investigations.</p>
            </div>
          </div> */}
      </div>

    </section></>;
}
export default Testimonials;
