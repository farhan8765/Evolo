import React from "react";

const ContactMap = () => {
  return (
    <section className="w-full bg-[white] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="rounded-[30px] overflow-hidden shadow-[0_30px_70px_rgba(15,23,54,0.12)] border border-[#f0f0f5]">
          <iframe
            title="Evolo AI location map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d258677.54292194992!2d-118.89461193437501!3d34.02003955116852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c0b19a5cf10d%3A0xdea6b2edbbd6066e!2sLos%20Angeles%2C%20CA!5e0!3m2!1sen!2sus!4v1735742905580!5m2!1sen!2sus"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[480px]"
          /> 
        </div>
      </div>
    </section>
  );
};

export default ContactMap;
