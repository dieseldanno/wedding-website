'use client';

import { useEffect, useState } from 'react';
import emailjs from 'emailjs-com';
import HeadingWithIcon from './HeadingWithIcon';

interface FormData {
  name: string;
  email: string;
  allergies: string;
  message: string;
  roomType: string;
}

export default function RSVP() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    allergies: '',
    message: '',
    roomType: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string>('');

  const [isClient, setIsClient] = useState(false); //hydration fix
  useEffect(() => setIsClient(true), []);
  if (!isClient) return null; //hydration fix

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // clear any existing error when user starts typing again
    if (error) setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError('Ange en giltig e-postadress :)');
      return;
    }

    const templateParams = {
      to_name: formData.name,
      to_email: formData.email, // dynamic "to" email ( guests email)
      from_name: 'Marwa & Eliza', // static sender name
      // reply_to: formData.email, // replies go to guests email
      message: `
            Hej,

            Tack för din OSA! Vi ser fram emot att fira vår kärleksdag med dig. 

            Här är en sammanfattning av din OSA:
            Namn: ${formData.name}
            Allergier: ${formData.allergies}
            Rumstyp: ${formData.roomType || 'Inget valt'}
            Meddelande: ${formData.message}

            För dig som valde att boka boende via oss kommer mer information om incheckning och
            andra detaljer närmare bröllopsdatumet.

            Om du har några frågor eller behöver ändra din OSA, så kan du kontakta oss genom att svara på detta mail.

            Kram från Marwa & Eliza<3
        `,
    };

    try {
      setIsSubmitting(true);

      // send email to emailjs
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID as string
      );

      const response = await fetch('/api/rsvp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(
          errData.error || 'Failed to save data to Google Sheets'
        );
      }

      // const data = await response.json();
      // console.log('RSVP saved:', data);

      setIsSubmitted(true);
      setError('');
    } catch (err) {
      console.error('Error: ', err);
      setError(
        err instanceof Error
          ? err.message
          : 'Något gick fel, försök igen senare.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // confirmation
  if (isSubmitted) {
    return (
      <section id="osa" className="pt-16 pb-24">
        <div className="mx-auto max-w-lg px-2 text-center">
          <h2 className="text-custom-red font-garamond mt-6 mb-2 text-3xl font-bold">
            Tack för din OSA!
          </h2>
          <p className="text-custom-red font-garamond">
            Vi har mottagit ditt svar och skickat en bekräftelse till din mail.
            Kolla skräpposten om du inte ser det i din inkorg. Vi ser så mycket
            fram emot att fira vår dag med dig!
          </p>
        </div>
      </section>
    );
  }

  // form
  return (
    <section id="osa" className="py-16">
      <div className="mx-auto max-w-md px-2 text-left">
        <HeadingWithIcon
          title="OSA"
          icon="/osa-angel.png"
          alt="OSA ängel ikon"
          className="mb-2 text-3xl"
        />

        {error && <p className="text-center">{error}</p>}
        <p className="text-lg text-black sm:text-xl">
          Fyll i formuläret nedan för att bekräfta din närvaro. På kuvertet till
          din inbjudan står det vem/vilka som är inbjuden/-na. Du bokar boende
          genom att välja rumstyp (enkel- eller dubbelrum). Om du inte ska bo
          kvar efter bröllopet behöver du inte välja något alternativ. Vi
          behöver ditt svar{' '}
          <span className="text-custom-red font-bold">
            senast den 1a februari.
          </span>{' '}
          Du kommer att få ett bekräftelsemail när vi mottagit ditt svar.
        </p>

        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          {/* name */}
          <div>
            <label className="text-custom-red font-garamond block">
              Namn på gäst/gäster
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full rounded border p-2 text-black"
            />
          </div>

          {/* email */}
          <div>
            <label className="text-custom-red font-garamond block">
              E-post (räcker med en om du OSAr för fler)
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full rounded border p-2 text-black"
            />
          </div>

          {/* allergies */}
          <div>
            <label className="text-custom-red font-garamond block">
              Allergier eller särskilda kost (om du OSAr för fler än dig själv
              var god specificera vem det gäller)
            </label>
            <textarea
              name="allergies"
              value={formData.allergies}
              onChange={handleChange}
              className="w-full rounded border p-2 text-black"
            />
          </div>

          {
            /* room type */
            <div>
              <label className="text-custom-red font-garamond block">
                Om du vill sova kvar på ön efter bröllopet, väljer du vilken typ
                av rum du vill boka här
              </label>
              <select
                name="roomType"
                value={formData.roomType}
                onChange={handleChange}
                required
                className="w-full rounded border p-2 text-black"
              >
                <option value="Inget rum">Jag vill inte boka ett rum</option>
                <option value="Enkelrum">Jag vill boka ett enkelrum</option>
                <option value="Dubbelrum">Jag vill boka ett dubbelrum</option>
              </select>
            </div>
          }

          {/* message */}
          <div>
            <label className="text-custom-red font-garamond block">
              Meddelande (valfritt)
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full rounded border p-2 text-black"
            />
          </div>

          {/* submit button */}
          <button
            type="submit"
            // disabled={isSubmitting}
            disabled={true}
            className={`bg-custom-red font-garamond w-full rounded py-2 text-white transition-colors ${
              isSubmitting
                ? 'cursor-not-allowed opacity-60'
                : 'hover:cursor-pointer hover:bg-red-900'
            }`}
          >
            {isSubmitting ? 'Skickar...' : 'Skicka OSA'}
          </button>
        </form>
      </div>
    </section>
  );
}
