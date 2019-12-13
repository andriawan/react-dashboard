import React, { useState, useEffect } from 'react';
import './styles.css';
import Navbar from './components/Navbar';
import ProjectList from './components/ProjectList';
import { connect } from 'react-redux';

function App({ state }) {
  const [projects, setProjects] = useState([]);
  const [setting, setSetting] = useState(0);

  useEffect(() => {
    async function initialSetup() {
      const json_project = await fetch(state.url_home_portofolio);
      const json_setting = await fetch(state.my_setting);
      setProjects(await json_project.json());
      setSetting(await json_setting.json());
    }
    initialSetup();
  }, [state]);

  function generateProjectList(projects, setting) {
    if (projects.length > 0 && setting !== 0) {
      const projects_filter = projects.filter(
        item =>
          item.type === 'dir' && !setting.excluded_folder.includes(item.name)
      );

      console.log(projects_filter);

      const List = projects_filter.map((item, key) => (
        <div className="w-full sm:w-1/2 lg:w-1/4 xl:w-1/5 md:w-1/3 px-3 py-3">
          <ProjectList
            name={item.name}
            link={item.name}
            banner={state.react_logo}
          />
        </div>
      ));
      return List;
    } else {
      return <p>Loading...</p>;
    }
  }

  return (
    <div>
      <Navbar />
      <div className="flex flex-wrap mx-auto p-3 sm:p-8">
        {generateProjectList(projects, setting)}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    state,
  };
};

const AppState = connect(mapStateToProps, null)(App);
export default AppState;
