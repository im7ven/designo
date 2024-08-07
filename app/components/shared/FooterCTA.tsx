import Link from "next/link";

const FooterCTA = () => {
  return (
    <div className="px-[2.4rem]">
      <section className="footer-cta text-center bg-[--peach-dark] rounded-2xl py-[6.4rem] px-[2.4rem] md:py-[5.7rem] max-w-[111rem] lg:mx-auto lg:py-[7.2rem] lg:px-[9.5rem]  lg:flex lg:items-center lg:text-left lg:justify-between">
        <div className="max-w-[44.9rem] mx-auto lg:mx-[initial]">
          <h2 className="tracking-normal leading-[3.6rem]">
            Let's talk about your project
          </h2>
          <p className="body-text text-white pt-[1.6rem] pb-[3.2rem] lg:pb-0">
            Ready to take it to the next level? Contact us today and find out
            how our expertise can help your business grow.
          </p>
        </div>
        <Link href="/" className="btn-primary">
          Get in touch
        </Link>
      </section>
    </div>
  );
};

export default FooterCTA;
