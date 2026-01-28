import Image from 'next/image';

export default function Schedule() {
  const schedule = [
    {
      time: '14:00',
      event: 'Vigsel',
      image: '/vigsel.png',
      className: 'hover:animate-bounce',
    },
    {
      time: '15:00',
      event: 'Mingel',
      image: '/mingel.png',
      className: 'hover:animate-spin',
    },
    {
      time: '17:00',
      event: 'Middag',
      image: '/middag.png',
      className: 'hover:animate-bounce',
    },
    {
      time: '20:00',
      event: 'Fest',
      image: '/fest.png',
      className: 'hover:animate-spin',
    },
    {
      time: '23:30',
      event: 'Vickning',
      image: '/vickning.png',
      className: 'hover:animate-bounce',
    },
  ];

  return (
    <section id="schema" className="py-16">
      <div className="relative mx-auto max-w-lg px-6">
        <h2 className="text-custom-red mt-6 mb-4 text-center text-3xl font-bold">
          Schema
        </h2>

        <div className="relative">
          {/* Wavy line using inline SVG */}
          <div className="absolute top-0 left-1/2 h-full -translate-x-1/2">
            <svg
              className="h-full w-12"
              viewBox="0 0 10 480"
              preserveAspectRatio="none"
            >
              <path
                d="
                  M5 0
                  C8 48, 2 96, 5 144
                  C8 192, 2 240, 5 288
                  C8 336, 2 384, 5 432
                  C8 480, 2 528, 5 576
                "
                stroke="#ac020a"
                strokeWidth="0.4"
                fill="transparent"
              />
            </svg>
          </div>

          {/* Timeline items */}
          <div className="flex flex-col items-center space-y-16">
            {schedule.map((item, index) => (
              <div
                key={index}
                className="relative flex w-full items-center justify-between"
              >
                {/* left side text (even indexes) */}
                {index % 2 === 0 && (
                  <div className="w-5/12 text-right">
                    <h4 className="text-custom-red font-quicksand text-sm font-medium">
                      {item.time}
                    </h4>
                    <h4 className="text-custom-red font-lora font-medium">
                      {item.event}
                    </h4>
                  </div>
                )}

                {/* center icon */}
                <div className="z-10 mx-4 flex w-5/12 shrink-0 items-center justify-center sm:mx-12">
                  <Image
                    src={item.image}
                    alt={item.event}
                    width={80}
                    height={80}
                    className={`object-contain ${item.className}`}
                  />
                </div>

                {/* right side text (odd indexes) */}
                {index % 2 !== 0 && (
                  <div className="w-5/12 text-left">
                    <h4 className="text-custom-red font-quicksand text-sm font-medium">
                      {item.time}
                    </h4>
                    <h4 className="text-custom-red font-lora font-medium">
                      {item.event}
                    </h4>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
