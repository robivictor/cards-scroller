import { LucideIcon } from "lucide-react";
import Image, { StaticImageData } from "next/image";

interface CardTwoItemProps {
  i: number;
  icon: LucideIcon;
  description: string;
  image: StaticImageData;
}

const CardTypeTwo = ({
  i,
  icon: Icon,
  description,
  image,
}: CardTwoItemProps) => {
  return (
    <div
      style={{
        zIndex: `${4 - i}`,
        height: `${i * 464}px`,
        marginTop: `${i - 1 * -464}px`,
      }}
    >
      <div
        className="flex flex-1 items-top px-4 md:px-14 md:h-[29rem] md:sticky"
        style={{
          top: `calc(50vh + 302px + ${i - 1 * 86}px)`,
          marginTop: `calc(${i - 1 * 70}px)`,
        }}
      >
        <div
          style={{ aspectRatio: "4 / 3" }}
          className="no-underline w-full h-full overflow-hidden text-card-content group font-sans rounded-standard lg:rounded-standard flex flex-col black  lg:min-h-[357px] shadow-4xl col-start-1 col-end-24 lg:col-start-2 lg:col-span-23  lg:flex-row-reverse bg-card-background-light"
        >
          <div className="flex justify-end flex-1">
            <Icon className="h-14 w-14" />
          
          </div>
          <div className="flex justify-between align-baseline">
              <p className="text-xl text-[#d1d9e1]">{description}</p>
            </div>
          <div className="relative w-1/2 h-full rounded-3xl">
            <Image
              fill
              src={image}
              alt="image"
              className="object-cover absolute top-0 left-0 w-full h-full rounded-3xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardTypeTwo;
