"use client";
import React from 'react';
import { Provider } from 'react-redux';
import store from 'game/app/store/store';
import Layout from 'game/app/layout';
import LoginForm from 'game/app/components/LoginForm';
import ScoreInput from 'game/app/components/ScoreInput';
import ScoreList from 'game/app/components/ScoreList';
import UserScores from 'game/app/components/UserScores';

const Page = () => {
  return (
    <Provider store={store}>
      <Layout>
        <LoginForm />
        <ScoreInput />
        <UserScores />
        <ScoreList />
      </Layout>
    </Provider>
  );
};

export default Page;
