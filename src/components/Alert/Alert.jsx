import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion'


const Alert = () => {
    const state = useSelector((state) => state?.message);
    const dispatch = useDispatch();
  
    if (!state) {
        return null;
    }else{
      useEffect(() => {
        if (state) {
          console.log(state);
          console.log(useSelector((state) => state));
          const timeout = setTimeout(() => {
            dispatch(hideAlert());
          }, 3000);
    
          return () => clearTimeout(timeout);
        }
      }, [state, dispatch]);
  
      return (
          <motion.div id='alert'>
              <div className="bar"></div>
              <p>{state}</p>
          </motion.div>
      )
    }
    
}
  
export default Alert;