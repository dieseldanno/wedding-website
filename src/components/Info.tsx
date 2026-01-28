import { infoSections, Section } from '@/data/infoSections';
import HeadingWithIcon from './HeadingWithIcon';

export default function Info() {
  const sectionIcons: Record<string, string> = {
    // map section IDs to specific icons
    barn: '/love-angel.png',
    ceremoni: '/vigsel2.png',
    mat: '/middag2.png',
  };

  return (
    <section id="info">
      <div className="container px-2 text-left">
        <h2 className="text-custom-red mt-6 mb-2 text-center text-5xl font-bold">
          Vi ska gifta oss!
        </h2>
        <p className="mx-auto max-w-2xl text-center text-lg leading-relaxed text-black sm:text-xl">
          Och är så glada över att få tillbringa dagen med er, våra nära och
          kära. På denna hemsida kommer du hitta allt du behöver veta om dagen,
          klädkod, boende m.m. Du kommer även kunna OSA längst ner.
        </p>

        <nav
          aria-label="Snabblänkar"
          className="text-custom-red mx-auto mt-10 mb-10 max-w-2xl px-8 text-center"
        >
          <h4 className="mt-6 mb-1 text-xl">Hoppa till:</h4>
          <ul className="flex flex-wrap justify-center gap-3 text-sm sm:text-lg">
            {infoSections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="hover:text-red-800 hover:underline"
                >
                  {section.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {infoSections.map((section: Section) => (
          <article key={section.id} id={section.id} className="mt-12">
            <HeadingWithIcon
              title={section.title}
              icon={sectionIcons[section.id]} // will show only if available
              alt={`${section.title} ikon`}
            />
            {section.content.map((block, i) => {
              // if block i plain text -> wrap in <p>
              if (typeof block === 'string') {
                return (
                  <p
                    key={i}
                    className="mx-auto mb-2 max-w-2xl text-lg leading-relaxed text-black sm:text-xl"
                  >
                    {block}
                  </p>
                );
              }

              // if block is valid react node, return as is (e.g. JSX elements)
              return (
                <div
                  key={i}
                  className="mx-auto mb-2 max-w-2xl text-lg leading-relaxed text-black sm:text-xl"
                >
                  {block}
                </div>
              );
            })}
          </article>
        ))}
      </div>
    </section>
  );
}
