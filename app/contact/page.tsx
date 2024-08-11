import React from "react";
import Footer from "../components/shared/Footer";
import LocationGrid from "../components/shared/LocationGrid";
import ContactDetails from "../components/contact/ContactDetails";
import ContactForm from "../components/contact/ContactForm";

const ContactPage = () => {
  return (
    <>
      <main className="max-w-[111rem] mx-auto md:px-[2.4rem] xl:px-0">
        <section className=" form-bg grid gap-y-[4.8rem] bg-[--peach-dark] px-[2.4rem] py-[7.2rem] md:rounded-2xl md:gap-y-[4rem] md:px-[5.8rem] lg:grid-cols-2 gap-x-[9.5rem]">
          <ContactDetails />
          <ContactForm />
        </section>
        <LocationGrid />
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;
