import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="h-80 bg-gradient-to-r from-purple-100 to-green-500 ">
        <div className="max-w-screen-xl px-4 pt-16 mx-auto sm:px-6 lg:px-8">
          <div >
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">support construction</h2>
                <p className="max-w-xs mt-4 text-sm text-gray-600">
                  Support Construction —a leader in design-build construction projects in Egypt. Civil engineering | buildings | transport infrastructure.
                </p>
                <div className="flex mt-8 space-x-6 text-gray-600">
                  <a className="hover:opacity-75" href="https://www.facebook.com/supportconstructioneg" target="_blank" rel="noreferrer">
                    <span className="sr-only"> Facebook </span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-2">
                <div>
                  <p className="font-medium">
                    Helpful Links
                  </p>
                  <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                    <a className="hover:opacity-75" href="https://www.facebook.com/supportconstructioneg " target="_blank" rel="noreferrer"> Contact </a>
                    <a className="hover:opacity-75" href> FAQs </a>
                    <a className="hover:opacity-75" href> Live Chat </a>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <p className="mt-8 text-lg text-gray-800 text-center">
            © 2022 support construction
          </p>
        </div>
      </footer>
    </>
  );
}
