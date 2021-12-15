import '../styles/globals.css'
import '../styles/home.css'
import '../styles/main.scss'

// Swiper styles
// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
// import 'swiper/components/free-mode/free-mode.scss';
import 'swiper/components/thumbs/thumbs.scss';

// eslint-disable-next-line
// import "swiper/css/bundle";

// import "swiper/css";
// import 'swiper/css/free-mode'
// import "swiper/css/navigation"
// import "swiper/css/thumbs"

import MainLayout from '../components/layouts/main'

function MyApp({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  )
}

export default MyApp
