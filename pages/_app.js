import 'semantic-ui-offline/semantic.min.css'
import 'react-datepicker/dist/react-datepicker.css'
import './styles.css'
import PropTypes from 'prop-types'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

MyApp.propTypes = {
  Component: PropTypes.oneOfType([PropTypes.element, PropTypes.func, PropTypes.node]).isRequired,
  pageProps: PropTypes.object,
};

export default MyApp
