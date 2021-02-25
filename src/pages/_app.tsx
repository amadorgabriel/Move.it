import CreateGlobalStyle from '../styles/global';

function MyApp({ Component, pageProps }) {
  return(
    <>
      <Component {...pageProps} />
      <CreateGlobalStyle />
    </>
  ) 
}

export default MyApp
                                                                                               