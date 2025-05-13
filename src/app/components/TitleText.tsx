interface TitleTextProps {
  title: string;
}

const TitleText = ({ title }: TitleTextProps) => {
  return (
    <h1 className="text-3xl md:text-4xl font-bold text-[#FFFFFF] text-center max-w-xs md:max-w-md mx-auto leading-tight">
      {title}
    </h1>
  );
};

export default TitleText;
