interface Props {
  heading: string;
  children: string;
  backgroundImage: string;
}

const DesignHero = ({ ...props }: Props) => {
  return (
    <div className="md:px-[2.4rem]">
      <section
        className={`${props.backgroundImage} text-center px-[2.4rem] py-[10.5rem] md:py-[6.4rem] bg-[--peach-dark] rounded-2xl`}
      >
        <h1 className="mb-[2.4rem]">{props.heading}</h1>
        <p className="body-text text-white mx-auto md:max-w-[40rem]">
          {props.children}
        </p>
      </section>
    </div>
  );
};

export default DesignHero;
