import React from 'react';
import { AtomSpinner } from 'react-epic-spinners/dist/react-epic-spinners.cjs';
import { connect } from 'react-redux';

function Navbar({ state }) {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-3">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <AtomSpinner color="white" size={40} />
        <span className="px-2 font-semibold text-xl tracking-tight">
          {state.app_name}
        </span>
      </div>
    </nav>
  );
}

const mapStateToProps = state => {
  return {
    state,
  };
};

const mapDispatchToProps = dispatch => ({
  onClick: () => dispatch({ type: 'CONVERT_KB', payload: 8 }),
});

const NavbarState = connect(mapStateToProps, mapDispatchToProps)(Navbar);
export default NavbarState;
