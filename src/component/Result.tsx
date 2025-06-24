import React from "react";

function Result({ theme, input }: {theme: 1 | 2 | 3, input: string}) {
  return (
    <section className="pt-8 pb-6">
      <div className="max-w-full w-[33.75rem] mx-auto px-6 md:px-10 lg:px-0">
        <div className={`flex justify-end items-center w-33rem h-[5.5rem] md:h-24 lg:h-32 rounded-lg transition-colors duration-300
          ${theme === 1 ? 'bg-theme1-screen' : theme === 2 ? 'bg-theme2-screen' : 'bg-theme3-screen'}`}>
          <p className={`transition-colors duration-300 px-6 md:px-8 lg:px-9 text-[2.375rem] md:text-[2.9rem] lg:text-[3.375rem] font-bold overflow-x-auto
          ${theme === 1 ? 'text-theme1-textWhite' : theme === 2 ? 'text-theme2-textDark' : 'text-theme3-textYellow' }`}>
            {input.replace(/\*/g, 'x')}
          </p>
        </div>
      </div>
    </section>
  )
}

export default Result;