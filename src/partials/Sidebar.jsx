import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import SidebarLinkGroup from './SidebarLinkGroup';

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef(null);
  const sidebar = useRef(null);

  const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
  const [sidebarExpanded, setSidebarExpanded] = useState(storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true');

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (!sidebarOpen || sidebar.current.contains(target) || trigger.current.contains(target)) return;
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  useEffect(() => {
    localStorage.setItem('sidebar-expanded', sidebarExpanded);
    if (sidebarExpanded) {
      document.querySelector('body').classList.add('sidebar-expanded');
    } else {
      document.querySelector('body').classList.remove('sidebar-expanded');
    }
  }, [sidebarExpanded]);

  return (
    <div>
      {/* Sidebar backdrop (mobile only) */}
      <div
        className={`fixed inset-0 bg-slate-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        aria-hidden="true"
      ></div>

      {/* Sidebar */}
      <div
        id="sidebar"
        ref={sidebar}
        className={`flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-slate-800 p-4 transition-all duration-200 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-64'
          }`}
      >
        {/* Sidebar header */}
        <div className="flex justify-between mb-10 pr-3 sm:px-2">
          {/* Close button */}
          <button
            ref={trigger}
            className="lg:hidden text-slate-500 hover:text-slate-400"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            aria-expanded={sidebarOpen}
          >
            <span className="sr-only">Close sidebar</span>
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
            </svg>
          </button>
          {/* Logo */}
          <NavLink end to="/" className="block">
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fillRule='evenodd'
              strokeLinejoin='round'
              strokeMiterlimit='2'
              clipRule='evenodd'
              className='lg:w-52 w-40'
              viewBox='0 0 6332 956'
            >
              <path fill='none' d='M0 0.05H6331.36V955.382H0z'></path>
              <path
                fill='#278b07'
                fillRule='nonzero'
                d='M-.006 0H.23l.03-.099.005-.015h.247l.005.015L.549 0H.79L.685-.233.503-.707H.282l-.184.476L-.006 0zM.39-.468l.067.187H.322L.39-.468z'
                transform='translate(-519.804 -605.201) translate(586.607 1488.45) scale(1160.45)'
              ></path>
              <path
                fill='#278b07'
                fillRule='nonzero'
                d='M.422.016a.548.548 0 00.294-.087v-.351H.573L.392-.426v.173l.126-.005v.069a.147.147 0 01-.083.02.17.17 0 01-.13-.05.18.18 0 01-.047-.131.17.17 0 01.052-.127.168.168 0 01.121-.051c.051 0 .096.006.133.018a.44.44 0 01.123.066l-.003-.19a.444.444 0 00-.261-.087.393.393 0 00-.276.104.35.35 0 00-.111.265c0 .11.036.199.109.267a.394.394 0 00.276.102L.422.016z'
                transform='translate(-519.804 -605.201) translate(1449.58 1488.45) scale(1160.45)'
              ></path>
              <path
                fill='#fff'
                fillRule='nonzero'
                d='M.064-.19L.056 0h.215L.264-.186V-.4l.157.336h.086l.161-.349v.211L.661 0h.222L.874-.208v-.496H.611l-.139.326-.15-.326H.064v.514z'
                transform='translate(-519.804 -605.201) translate(2641.76 1488.45) scale(1160.45)'
              ></path>
              <path
                fill='#fff'
                fillRule='nonzero'
                d='M.207.013c.064 0 .112-.02.144-.062L.36 0h.201L.55-.179v-.115a.27.27 0 00-.06-.187C.45-.525.384-.547.291-.547a.44.44 0 00-.234.055l.064.139a.287.287 0 01.144-.04c.026 0 .046.006.061.018a.06.06 0 01.023.05v.005a.727.727 0 00-.096-.008.29.29 0 00-.165.044.146.146 0 00-.064.127c0 .055.018.097.053.126a.195.195 0 00.129.043l.001.001zm.066-.13A.075.075 0 01.23-.13a.046.046 0 01-.017-.038c0-.04.031-.06.092-.06.021 0 .038.003.051.007V-.2a.081.081 0 01-.023.06.081.081 0 01-.06.023z'
                transform='translate(-519.804 -605.201) translate(3731.38 1488.45) scale(1160.45)'
              ></path>
              <path
                fill='#fff'
                fillRule='nonzero'
                d='M.041 0h.217L.255-.179a.212.212 0 01.026-.126C.3-.333.336-.347.388-.347l.027.003.009-.198-.025-.002a.151.151 0 00-.147.095L.243-.533H.045v.353L.041 0z'
                transform='translate(-519.804 -605.201) translate(4412.47 1488.45) scale(1160.45)'
              ></path>
              <path
                fill='#fff'
                fillRule='nonzero'
                d='M.059-.147L.054 0h.21L.259-.14v-.038l.026-.028.036.054L.406 0h.239L.524-.197l-.06-.109.077-.098.102-.129H.402l-.065.087a3.89 3.89 0 00-.075.105v-.172l.005-.23H.055l.005.217-.001.379z'
                transform='translate(-519.804 -605.201) translate(4906.57 1488.45) scale(1160.45)'
              ></path>
              <path
                fill='#fff'
                fillRule='nonzero'
                d='M.584-.257a.303.303 0 00-.073-.209.257.257 0 00-.202-.083.282.282 0 00-.203.079.276.276 0 00-.08.203c0 .086.028.155.084.206a.302.302 0 00.21.077.668.668 0 00.167-.009v-.189a.598.598 0 01-.158.042.126.126 0 01-.068-.019.08.08 0 01-.035-.054h.358l.001-.044H.584zM.397-.325H.223a.104.104 0 01.029-.057.081.081 0 01.06-.023c.024 0 .043.008.059.022a.084.084 0 01.025.058h.001z'
                transform='translate(-519.804 -605.201) translate(5624.48 1488.45) scale(1160.45)'
              ></path>
              <path
                fill='#fff'
                fillRule='nonzero'
                d='M.27.013a.269.269 0 00.126-.025v-.153a.174.174 0 01-.057.011C.32-.154.306-.158.296-.167.287-.176.282-.191.282-.213v-.161h.12v-.159h-.12l.01-.128H.064l.01.128H.006v.159h.069v.203c0 .063.016.11.049.14.032.029.081.045.146.045V.013z'
                transform='translate(-519.804 -605.201) translate(6324.83 1488.45) scale(1160.45)'
              ></path>
            </svg>
          </NavLink>
        </div>

        {/* Links */}
        <div className="space-y-8">
          {/* Pages group */}
          <div>
            <h3 className="text-xs uppercase text-slate-500 font-semibold pl-3">
              <span className="hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6" aria-hidden="true">
                •••
              </span>
              <span className="lg:hidden lg:sidebar-expanded:block 2xl:block">Pages</span>
            </h3>
            <ul className="mt-3">
              {/* Home */}
              <SidebarLinkGroup activecondition={pathname === '/' || pathname.includes('dashboard')}>
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                            <NavLink
                              end
                              to="/"
                              className={({ isActive }) =>
                                'block transition duration-150 truncate ' + (isActive ? 'text-primary' : 'text-slate-400 hover:text-slate-200')
                              }
                            >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                              <path
                                className={`fill-current ${pathname === '/' || pathname.includes('dashboard') ? 'text-primary' : 'text-slate-400'
                                  }`}
                                d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0z"
                              />
                              <path
                                className={`fill-current ${pathname === '/' || pathname.includes('dashboard') ? 'text-primary' : 'text-slate-600'
                                  }`}
                                d="M12 3c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9z"
                              />
                              <path
                                className={`fill-current ${pathname === '/' || pathname.includes('dashboard') ? 'text-white' : 'text-slate-400'
                                  }`}
                                d="M12 15c-1.654 0-3-1.346-3-3 0-.462.113-.894.3-1.285L6 6l4.714 3.301A2.973 2.973 0 0112 9c1.654 0 3 1.346 3 3s-1.346 3-3 3z"
                              />
                            </svg>
                            <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                              Home
                            </span>
                          </div>
                        </div>
                        </NavLink>
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>

              {/* Cattle */}

              <SidebarLinkGroup activecondition={pathname.includes('cattle')}>
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <a
                        href="#0"
                        className={`block text-slate-200 truncate transition duration-150 ${pathname === '/' || pathname.includes('dashboard') ? 'hover:text-slate-200' : 'hover:text-white'
                          }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded ? handleClick() : setSidebarExpanded(true);
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                          <svg className={`fill-current ${pathname === '/cattle' || pathname.includes('cattle') ? 'text-primary' : 'text-slate-400'
                                  }`} version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30px" height="30px" viewBox="-47.57 -47.57 570.84 570.84" xml:space="preserve" stroke="#000000" stroke-width="0.00475695" transform="matrix(-1, 0, 0, 1, 0, 0)rotate(0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="36.152820000000006"></g><g id="SVGRepo_iconCarrier"> <g> <polygon points="473.006,155.496 421.754,102.028 444.061,87.801 445.363,76.713 435.016,76.096 408.182,95.397 374.697,95.426 354.199,82.91 346.857,84.409 346.965,92.546 360.178,107.18 358.436,114.867 202.938,131.59 41.869,127.092 24.512,134.368 11.727,150.614 5.149,188.614 3.987,215.93 0,241.437 1.096,266.842 5.58,267.759 12.098,260.583 17.397,236.746 13.102,203.678 14.596,203.453 24.692,253.795 17.815,297.485 24.094,384.681 24.692,394.337 30.811,399.557 57.866,399.599 66.584,396.962 42.379,357.545 54.387,307.489 60.676,307.5 82.619,374.053 93.93,391.139 99.51,394.574 129.375,394.596 133.207,389.801 107.354,373.92 89.825,319.936 94.219,311.172 104.516,312.128 110.981,327.958 120.346,312.528 129.42,328.024 137.106,311.198 159.729,293.808 240.008,286.12 253.482,302.593 264.838,383.123 270.812,394.694 298.166,394.683 301.115,390.347 284.489,367.206 282.491,323.141 291.469,328.124 300.926,357.395 312.953,395.403 318.346,399.584 342.82,399.599 344.852,394.072 337.697,387.45 314.619,342.349 319.939,295.083 345.799,275.954 383.469,205.985 426.826,185.969 466.697,181.43 470.115,177.724 475.695,161.998 "></polygon> </g> </g></svg>
                            <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                              Cattle
                            </span>
                          </div>
                          {/* Icon */}
                          <div className="flex shrink-0 ml-2">
                            <svg className={`w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ${open && 'rotate-180'}`} viewBox="0 0 12 12">
                              <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                            </svg>
                          </div>
                        </div>
                      </a>
                      <div className="lg:hidden lg:sidebar-expanded:block 2xl:block">
                        <ul className={`pl-9 mt-1 ${!open && 'hidden'}`}>
                          <li className="mb-1 last:mb-0">
                            <NavLink
                              end
                              to="/cattle/steers"
                              className={({ isActive }) =>
                                'block transition duration-150 truncate ' + (isActive ? 'text-primary' : 'text-slate-400 hover:text-slate-200')
                              }
                            >
                              <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                Steers
                              </span>
                            </NavLink>
                          </li>
                          <li className="mb-1 last:mb-0">
                            <NavLink
                              end
                              to="/cattle/heifer"
                              className={({ isActive }) =>
                                'block transition duration-150 truncate ' + (isActive ? 'text-primary' : 'text-slate-400 hover:text-slate-200')
                              }
                            >
                              <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                              Heifer
                              </span>
                            </NavLink>
                          </li>
                          <li className="mb-1 last:mb-0">
                            <NavLink
                              end
                              to="/cattle/bulls"
                              className={({ isActive }) =>
                                'block transition duration-150 truncate ' + (isActive ? 'text-primary' : 'text-slate-400 hover:text-slate-200')
                              }
                            >
                              <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                Bulls
                              </span>
                            </NavLink>
                          </li>
                          <li className="mb-1 last:mb-0">
                            <NavLink
                              end
                              to="/cattle/cows"
                              className={({ isActive }) =>
                                'block transition duration-150 truncate ' + (isActive ? 'text-primary' : 'text-slate-400 hover:text-slate-200')
                              }
                            >
                              <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                Cows
                              </span>
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
            </ul>
          </div>
        </div>

        {/* Expand / collapse button */}
        <div className="pt-3 hidden lg:inline-flex 2xl:hidden justify-end mt-auto">
          <div className="px-3 py-2">
            <button onClick={() => setSidebarExpanded(!sidebarExpanded)}>
              <span className="sr-only">Expand / collapse sidebar</span>
              <svg className="w-6 h-6 fill-current sidebar-expanded:rotate-180" viewBox="0 0 24 24">
                <path className="text-slate-400" d="M19.586 11l-5-5L16 4.586 23.414 12 16 19.414 14.586 18l5-5H7v-2z" />
                <path className="text-slate-600" d="M3 23H1V1h2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
