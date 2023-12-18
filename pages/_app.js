import "swiper/css";
import "swiper/css/navigation";

import "../public/css/bootstrap.min.css";
import "../public/css/style.css";
import "../public/css/responsive.css";
import { useEffect, useState } from "react";
import { appWithTranslation } from "next-i18next";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);

    const WOW = require("wowjs");
    window.wow = new WOW.WOW({
      live: false,
    });
    window.wow.init();
  }, []);
  return (
    <>
      {!loading ? <Component {...pageProps} /> : <div class="preloader"></div>}
    </>
  );
}

export default appWithTranslation(MyApp);
