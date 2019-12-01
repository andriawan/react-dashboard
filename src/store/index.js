import { createStore } from 'redux';

const initialState = {
  app_name: 'Andriawan React Collection',
  version: '0.1',
  author: 'Andriawan',
  react_logo:
    'https://raw.githubusercontent.com/andriawan/my-react-portofolio/master/assets/react.png',
  logo_project_url:
    'https://raw.githubusercontent.com/andriawan/my-react-portofolio/master/assets/icon/',
  base_url: 'https://react.andriawan.com/',
  my_setting:
    'https://raw.githubusercontent.com/andriawan/my-react-portofolio/master/my_setting.json',
  url_home_portofolio:
    'https://api.github.com/repos/andriawan/my-react-portofolio/contents/docs',
};

const store = createStore((state = initialState, action) => {
  switch (action.type) {
    case 'CONVERT_KB':
      return { ...state, byte: state.byte + 8 };
    default:
      return state;
  }
});

export default store;
