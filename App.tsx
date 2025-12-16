import React, { useEffect, useState } from 'react';
import { supabase } from './src/lib/supabase';
import { Session } from '@supabase/supabase-js';
import SignIn from './src/screens/SignIn';
import Dashboard from './src/screens/Dashboard';

export default function App() {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
    });

    const { data: sub } = supabase.auth.onAuthStateChange(
      (_event, session) => setSession(session)
    );

    return () => {
      sub.subscription.unsubscribe();
    };
  }, []);

  return session ? <Dashboard /> : <SignIn />;
}
