# 💍 Wedding Website & RSVP System ([Live demo](https://wedding-website-seven-teal.vercel.app/))
Detta projekt är en modern bröllopshemsida skapad för att samla all praktisk information inför den stora dagen på ett ställe. Gäster kan läsa om bröllopet, osa digitalt och skicka in boendeönskemål.

## ✨ Funktionalitet
Informationshubb: Sidor för ceremoni, fest, klädkod, boende och mat.

Interaktivt OSA-formulär (RSVP):

Svar lagras automatiskt i Google Kalkylark.

Automatisk bekräftelse skickas till gästen via EmailJS.

Boendeformulär: Gäster kan enkelt ange namn, e-post och önskad rumstyp (enkelrum/dubbelrum).

Responsiv design: Optimerad för både mobil och desktop.

## 🛠️ Teknikstack
Ramverk: Next.js (App Router)

Frontend: React + TypeScript

Styling: Tailwind CSS

E-post: EmailJS

Backend/Lagring: Google Apps Script & Google Kalkylark

## 🔌 Dataflöde
Hemsidan agerar frontend medan Google Sheets fungerar som en lättviktig databas:

Input: Gästen fyller i ett formulär på hemsidan.

Process: Data skickas till en Next.js API-route.

Transport: API-routen skickar vidare datan till ett Google Apps Script via en POST-förfrågan.

Lagring: Scriptet skriver in informationen på en ny rad i ett Google Kalkylark.

Bekräftelse: Vid OSA triggas EmailJS för att skicka ett snyggt bekräftelsemail till gästens e-postadress.

## 🔐 Miljövariabler
För att projektet ska fungera lokalt behöver du skapa en .env fil och lägga till följande variabler (se till att denna fil är med i din .gitignore):

Kodavsnitt
```env
# EmailJS
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key

# Google Integration
NEXT_PUBLIC_GOOGLE_SCRIPT_URL=your_apps_script_web_app_url
```

## [Live demo](https://wedding-website-seven-teal.vercel.app/)
