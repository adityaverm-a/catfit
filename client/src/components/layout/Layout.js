import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Loading from '../lotties/LoadingMainLottie';
import Sidebar from './Sidebar';

const DashboardLayout = ({ children }) => {
  const { isAuthenticated, user } = useSelector(({ auth }) => ({ 
    isAuthenticated: auth.isAuthenticated, 
  }))

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  return (<>
    {!isAuthenticated ? 
      (
        <Redirect to='/' />
      ) : (
        <>
          {loading ? 
            (
              <Loading />
            ) : (
              <main className='wrapper'>
                <Sidebar />
                {children}
              </main>
            )}
        </>
      )
    }
  </>)
};

export default DashboardLayout;
