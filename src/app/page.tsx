import Banner from "../Components/Homepage/Banner";
import BazarLogs from "../Components/Homepage/BazarLogs";
import Marquee from "@/Components/shared/Marquee";

export default function Home() {
  return (
    <div>
      <Marquee />
      <Banner />
      <BazarLogs />

    </div>
  );
}
