import React, { Suspense } from 'react';

import { Navigate, Route, Routes, useLocation } from 'react-router-dom';

import Layout from '#/components/Layout';
import { Landing } from '#/modules';

const App = () => {
  const location = useLocation();

  return (
    <Suspense fallback={<div>Loading</div>}>
      <Routes location={location}>
        <Route path="/" element={<Layout.Landing />}>
          <Route index element={<Landing />} />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
};

export default App;
