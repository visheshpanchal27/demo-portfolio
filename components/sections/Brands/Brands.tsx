import SectionHeading from "@/components/ui/SectionHeading";
import BrandMarquee from "./BrandMarquee";

export default function Brands() {
  return (
    <section id="brands" className="py-24 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <SectionHeading
          label="Collaborations"
          title="Trusted By Brands"
          subtitle="Partnering with brands that value authentic storytelling and real audience connection."
        />
      </div>
      <BrandMarquee />
    </section>
  );
}
