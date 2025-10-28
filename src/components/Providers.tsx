"use client";

import { I18nextProvider } from "react-i18next";
import i18n from "../i18n";
import { CookieManager } from "react-cookie-manager";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <I18nextProvider i18n={i18n}>
      <CookieManager
        cookieKitId="dr-schirmer-v3"
        cookieKey="dr-schirmer-consent-v3"
        enableFloatingButton={true}
        showManageButton={true}
        translations={i18n.t}
        displayType="banner"
        theme="light"
        disableGeolocation={true}
        cookieCategories={{
          Analytics: true,
          Social: true,
          Advertising: true
        }}
        initialPreferences={{
          Analytics: false,
          Social: false,
          Advertising: false
        }}
        onAccept={() => {
          console.log("✅ Cookies akzeptiert");
        }}
        onDecline={() => {
          console.log("❌ Cookies abgelehnt");
        }}
        onManage={(preferences) => {
          console.log("⚙️ Cookie-Einstellungen:", preferences);
        }}
      >
        {children}
      </CookieManager>
    </I18nextProvider>
  );
}
