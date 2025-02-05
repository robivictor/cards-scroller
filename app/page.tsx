import React from "react";
import CardTypeOne from "@/components/CardTypeOne";
import Hero from "@/components/Hero";
import ImageOne from "@/public/image_one.avif";
import ImageTwo from "@/public/image_two.avif";
import ImageThree from "@/public/image_three.avif";
import { AppWindowIcon, ChartNoAxesCombinedIcon, HomeIcon } from "lucide-react";

export default function Home() {

  const cards = [
    {
      icon: AppWindowIcon,
      description: "Sell on-demand content globally and accept payment in over 100 currencies.",
      image: ImageTwo,
    },
    {
      icon: HomeIcon,
      description: "Create your own website to build a relationship with viewers and sell content.",
      image: ImageOne,
    },
    {
      icon: ChartNoAxesCombinedIcon,
      description: "Offer incentives like free trials, exclusive content, and promotions to grow your following.",
      image: ImageThree,
    },
  ];

  return (
    <main className="relative">
      <Hero/>
      {cards.map((card, i) => (
        <CardTypeOne key={`p_${i}`} i={i} {...card} />
      ))}
       <Hero/>
    </main>
  );
}
