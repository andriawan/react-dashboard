import React from 'react';
import { AtomSpinner } from 'react-epic-spinners';
import { connect } from 'react-redux';

function Navbar({ state }) {
  return (
    <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-3">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <AtomSpinner color="white" size="40" />
        <span class="px-2 font-semibold text-xl tracking-tight">
          {state.app_name}
        </span>
      </div>
      <div class="block lg:hidden">
        <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
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
