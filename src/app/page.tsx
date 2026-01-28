import Info from '@/components/Info';
import Navbar from '@/components/Navbar';
import Schedule from '@/components/Schedule';
import RSVP from '@/components/RSVP';
import Image from 'next/image';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="bg-custom-pink min-h-screen">
      <Navbar />
      <div className="flex items-center justify-center px-4">
        <div className="bg-custom-white text-custom-red mt-20 max-w-2xl rounded-lg px-2 py-6">
          <h1 className="text-center text-5xl">Marwa + Eliza</h1>
          <div className="my-4">
            <Image
              src="/marwaeliza.png"
              alt="Marwa and Eliza"
              width={200}
              height={200}
              className="mx-auto opacity-50"
            />
          </div>
          <Info />
          <Schedule />
          <RSVP />
        </div>
      </div>
      <Footer />
      {/* <Image
        src="/marwaeliza2.png"
        alt="Marwa and Eliza"
        width={200}
        height={200}
        className="mx-auto h-40 w-40 opacity-50 sm:h-48 sm:w-48"
      /> */}
    </div>
  );
}
