export default function MapEmbed() {
  return (
    <section aria-label="Nous situer">
      <div className="bg-blue-950 py-8">
        <p className="text-center text-white font-semibold text-lg tracking-wide">Nous situer</p>
      </div>
      <div className="w-full h-96">
        <iframe
          title="Localisation Bateau Ecole de la Loire"
          src="https://maps.google.com/maps?q=58+Boulevard+de+l%27egalite+44100+Nantes+France&output=embed&hl=fr"
          width="100%"
          height="100%"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="border-0 w-full h-full"
        />
      </div>
    </section>
  );
}
