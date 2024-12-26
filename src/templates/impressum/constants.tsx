import { CustomBr } from "@/components/atoms/custom-br";
import C from "@/constants";

export default {
  content: (
    <>
      <article>
        <h1>Impressum</h1>
        <p>
          Noser Treuhand GmbH
          <br /> Korki 1<br /> 8752 Näfels
        </p>
        <a href={C.mail.link}>
          {C.mail.footer}: {C.mail.email}
        </a>
      </article>
      <article>
        <h2>Vertretungsberechtigte Personen</h2>
        <p>Cédric Noser, Geschäftsleitung</p>
        <h2>Handelsregister-Eintrag</h2>
        <p>Eingetragener Firmenname: Noser Treuhand GmbH Handelsregister Nr.: CHE-463.098.194</p>
        <h2>Haftungsausschluss</h2>
        <p>
          Der Autor übernimmt keinerlei Gewähr hinsichtlich der inhaltlichen Richtigkeit,
          Genauigkeit, Aktualität, Zuverlässigkeit und Vollständigkeit der Informationen.
        </p>
        <p>
          Haftungsansprüche gegen den Autor wegen Schäden materieller oder immaterieller Art, welche
          aus dem Zugriff oder der Nutzung bzw. Nichtnutzung der veröffentlichten Informationen,
          durch Missbrauch der Verbindung oder durch technische Störungen entstanden sind, werden
          ausgeschlossen.
        </p>
        <p>
          Alle Angebote sind unverbindlich. Der Autor behält es sich ausdrücklich vor, Teile der
          Seiten oder das gesamte Angebot ohne besondere Ankündigung zu verändern, zu ergänzen, zu
          löschen oder die Veröffentlichung zeitweise oder endgültig einzustellen.
        </p>
        <h2>Haftungsausschluss für Links</h2>
        <p>
          Verweise und Links auf Webseiten Dritter liegen ausserhalb unseres Verantwortungsbereichs.
          Es wird jegliche Verantwortung für solche Webseiten abgelehnt. Der Zugriff und die Nutzung
          solcher Webseiten erfolgen auf eigene Gefahr des jeweiligen Nutzers.
        </p>
        <h2>Urheberrechte</h2>
        <p>
          Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder anderen Dateien auf
          dieser Website, gehören ausschliesslich <strong>der Firma Noser Treuhand GmbH</strong>{" "}
          oder den speziell genannten Rechteinhabern. Für die Reproduktion jeglicher Elemente ist
          die schriftliche Zustimmung des Urheberrechtsträgers im Voraus einzuholen.
        </p>
      </article>
      <article>
        <p>Näfels, im März 2024</p>
      </article>
    </>
  ),
};
