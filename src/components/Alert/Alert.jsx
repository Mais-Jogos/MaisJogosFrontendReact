import React, { useEffect} from 'react'
import { useDispatch, useSelector, connect } from 'react-redux';
import { motion } from 'framer-motion'
import { hideAlert } from '../../redux/actions';
import "./style.css"

const Alert = ({ coins, cart, userRedux, listadesejos }) => {
  const dispatch = useDispatch();

  const reducers = [coins, cart, userRedux, listadesejos];

  useEffect(() => {
    if (reducers.some(r => r.message !== null)) {
      console.log("Message", reducers.find(r => r.message !== null).message);
      const timeout = setTimeout(() => {
        dispatch(hideAlert());
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [reducers, dispatch]);

  if (reducers.some(r => r.message !== null)) {
    return (
      <motion.div 
      initial={{ opacity: 0, x: '100%' }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0, x: '100%' }}
      id='alert'>
        <div className="bar"></div>
        <p>{reducers.find(r => r.message !== null).message}</p>
      </motion.div>
    );
  }

  return null;
}
  
const mapStateToProps = (state) => {
  return {
    coins: state.coins,
    cart: state.cart,
    userRedux: state.userRedux,
    listadesejos: state.listadesejos
  };
}

export default connect(mapStateToProps)(Alert);