// App.jsx
import React, { useEffect, useState } from 'react';
import Modal from './Modal';

export default function App() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleMessage = (e) => {
      if (e.data?.type === 'dobnow-click') {
        setOpen(true);
      }
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  return (
      <div>
        <iframe
            src="http://localhost:3000/publish/Index.html#!/"
            width="100%"
            height="800"
            title="DOB NOW"
        />
        {open && <Modal onClose={() => setOpen(false)} />}
      </div>
  );
}
