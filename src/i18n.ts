import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  de: {
    translation: {
      title: "Cookie-Einstellungen",
      message: "Wir verwenden Cookies, um Ihre Erfahrung auf unserer Website zu verbessern. Wählen Sie aus, welche Cookies Sie zulassen möchten.",
      buttonText: "Alle akzeptieren",
      declineButtonText: "Alle ablehnen",
      manageButtonText: "Cookies verwalten",
      privacyPolicyText: "Datenschutz",
      manageTitle: "Cookie-Einstellungen",
      manageMessage: "Passen Sie Ihre Cookie-Einstellungen unten an",
      manageEssentialTitle: "Notwendige Cookies",
      manageEssentialSubtitle: "Erforderlich für das ordnungsgemäße Funktionieren der Website",
      manageEssentialStatus: "Status: Immer aktiviert",
      manageEssentialStatusButtonText: "Immer an",
      manageAnalyticsTitle: "Analytik",
      manageAnalyticsSubtitle: "Helfen Sie uns zu verstehen, wie Besucher mit unserer Website interagieren",
      manageSocialTitle: "Social Media",
      manageSocialSubtitle: "Social Media-Funktionen und Sharing aktivieren",
      manageAdvertTitle: "Werbung",
      manageAdvertSubtitle: "Werbung personalisieren und deren Leistung messen",
      manageCookiesStatus: "Status: {{status}} am {{date}}",
      manageCookiesStatusConsented: "Zugestimmt",
      manageCookiesStatusDeclined: "Abgelehnt",
      manageCancelButtonText: "Abbrechen",
      manageSaveButtonText: "Einstellungen speichern",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "de",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
