import React from 'react';
import Brand from "../assets/brand.jpg";

const AboutUs = () => {
  return (
    <>
      <h1 className="text-3xl md:text-4xl font-bold text-center my-8 px-4">About Us</h1>
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 px-4 md:px-12">
        <div className="text w-full md:w-1/2 p-4">
          <p className="text-base md:text-lg leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum tempora aliquam facere doloremque ratione quos at, nostrum ex culpa perferendis eveniet expedita eligendi perspiciatis ipsa dolor exercitationem fugit qui? Culpa.
            Aliquam nihil deleniti accusamus esse quasi minima repellat repudiandae modi beatae magnam. Iusto officia temporibus asperiores, impedit ut architecto nihil consectetur, id dolor esse fugit animi praesentium aperiam repudiandae illum?
            Possimus maiores voluptate quos nobis fugit quasi similique nesciunt quibusdam sunt accusamus aut natus eaque impedit aliquam quae maxime, repellat ad ab ipsam facilis reiciendis doloribus? Eaque, officiis? Saepe, architecto.
            Culpa aut vitae molestiae minus saepe sint eos mos, tempore laboriosam neque soluta amet! Vero qui dolores impedit nesciunt ipsa corporis quia non saepe, quae reiciendis, ipsum quidem voluptate nam!
            Neque esse dignissimos nihil atque, fugiat dicta repudiandae harum corrupti quos alias fugit corporis cumque voluptatem laudantium adipisci tenetur deleniti accusantium officia consequuntur sequi dolor minima, sed ad nihil, expedita, temporibus recusandae illum aliquid tempore error aliquam quibusdam culpa delectus magnam facilis ducimus distinctio ratione voluptatem hic?
          </p>
        </div>
        <div className="image w-full md:w-1/2 p-4 flex justify-center">
          <img src={Brand} alt="Brand" className="object-cover shadow-lg max-h-80 md:max-h-[600px] w-full h-auto" />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
