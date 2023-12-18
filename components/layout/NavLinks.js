import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import React from "react";
import { useTranslation } from "next-i18next";

const NavLinks = ({ extraClassName }) => {
  const { i18n, t } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <ul className={`navigation ${extraClassName}`}>
      <li className="current ">
        <Link href="/">{t("homePage")}</Link>
      </li>
      <li>
        <Link href="/page-contact">{t("services")}</Link>
      </li>
      <li>
        <Link href="/page-contact">{t("about")}</Link>
      </li>
      <li>
        <Link href="/page-contact">{t("blog")}</Link>
      </li>
      <li>
        <Link href="/page-contact">{t("news")}</Link>
      </li>
      <div className="language-switcher flex gap-2">
        <button onClick={() => changeLanguage("en")}>EN</button>
        <button onClick={() => changeLanguage("az")}>AZ</button>
        <button onClick={() => changeLanguage("ru")}>RU</button>
      </div>
    </ul>
  );
};

export default NavLinks;

// export async function getStaticProps(context) {
//   // extract the locale identifier from the URL
//   const { locale } = context;

//   return {
//     props: {
//       // pass the translation props to the page component
//       ...(await serverSideTranslations(locale)),
//     },
//   };
// }
