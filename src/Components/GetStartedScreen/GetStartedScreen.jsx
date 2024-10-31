import React from 'react';
import GetStartedForm from './GetStartedFormComponent/GetStartedForm';
import SuccessStoriesBanner from '../General/SuccessStoriesBanner/SuccessStoriesBanner ';

const GetStartedScreen = () => {

  return (
    <div>
        <GetStartedForm />
        <SuccessStoriesBanner />
    </div>
  );
};

export default GetStartedScreen;
