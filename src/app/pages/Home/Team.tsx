import Image from "next/image";

const Team = () => {
  return (
    <section className="container my-4 lg:my-10 px-6 lg:px-28 text-center font-alliance">
      <h6 className="text-sm font-semibold text-[#D6D6D680]/50">
        Available Where Your Team Works
      </h6>
      <div className="grid grid-cols-5 gap-8 my-6 lg:px-28 items-center justify-items-center">
        <Image
          src="/logo/google.png"
          alt="Google logo"
          width={100}
          height={100}
        />
        <Image src="/logo/aws.png" alt="Google logo" width={50} height={50} />
        <Image
          src="/logo/linear.png"
          alt="Google logo"
          width={100}
          height={100}
        />
        <Image
          src="/logo/gmail.png"
          alt="Google logo"
          width={100}
          height={100}
        />
        <Image
          src="/logo/slack.png"
          alt="Google logo"
          width={100}
          height={100}
        />
      </div>
    </section>
  );
};

export default Team;
