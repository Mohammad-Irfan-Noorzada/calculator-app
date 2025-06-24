import React, {useState} from "react";

function Themes({ theme, setTheme }: {theme: 1 | 2 | 3, setTheme: React.Dispatch<React.SetStateAction<1 | 2 | 3>> }) {

  const handleToggle = () => {
    setTheme(prev => (prev === 3 ? 1 : (prev + 1) as 1 | 2 | 3));
  };

  const sliderPosition = {
    1: 'translate-x-0',
    2: 'translate-x-5',
    3: 'translate-x-12',
  };

  return (
    <header className="max-w-full w-[33.75rem] mx-auto px-6 pt-7 md:px-10 md:pt-16 lg:px-0 lg:py-0">
      <div className={`flex justify-between items-center gap-4 transition-colors duration-300
        ${theme === 1 ? 'text-theme1-textWhite' : theme === 2 ? 'text-theme2-textDark' : 'text-theme3-textYellow'}`}>

        <section className="-mb-[1.05rem]">
          <h1 className="text-[2rem] font-bold">calc</h1>
        </section>

        <section className="flex items-center gap-8">
          <div className="self-end">
            <h2 className="uppercase text-[0.8125rem] font-medium tracking-wider">Theme</h2>
          </div>
          <div className="flex flex-col">
            <div className="flex gap-4 justify-center text-sm">
              <span>1</span>
              <span>2</span>
              <span>3</span>
            </div>
            <div className={`relative w-[4.625rem] h-[1.645rem] rounded-full transition-colors duration-300
              ${theme === 1 ? 'bg-theme1-toggle' : theme === 2 ? 'bg-theme2-toggle' : 'bg-theme3-toggle'}`}>
              <div className={`absolute w-[0.9375rem] h-[0.9375rem] rounded-full top-[0.34375rem] left-1.5 transition-all duration-300 cursor-pointer
                ${sliderPosition[theme]} ${theme === 1 ? 'bg-theme1-keyRed hover:bg-theme1-shadowRed' : theme === 2 ? 'bg-theme2-keyOrange hover:bg-theme2-keyOrangeHover'
                : 'bg-theme3-keyCyan hover:bg-theme3-shadowCyan'}`}
                onClick={handleToggle}>
              </div>
            </div>
          </div>
        </section>

      </div>
    </header>
  )
}

export default Themes;