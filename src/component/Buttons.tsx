import React, {useEffect} from "react";

function Buttons( {theme, input, setInput}: {theme: 1 | 2 | 3, input: string, setInput: React.Dispatch<React.SetStateAction<string>>} ) {
  const buttons = [
    { id: 1, value: '7', type: 'number' },
    { id: 2, value: '8', type: 'number' },
    { id: 3, value: '9', type: 'number' },
    { id: 4, value: 'DEL', type: 'clear' },
    { id: 5, value: '4', type: 'number' },
    { id: 6, value: '5', type: 'number' },
    { id: 7, value: '6', type: 'number' },
    { id: 8, value: '+', type: 'operator' },
    { id: 9, value: '1', type: 'number' },
    { id: 10, value: '2', type: 'number' },
    { id: 11, value: '3', type: 'number' },
    { id: 12, value: '-', type: 'operator' },
    { id: 13, value: '.', type: 'decimal'},
    { id: 14, value: '0', type: 'number' },
    { id: 15, value: '/', type: 'operator' },
    { id: 16, value: 'x', type: 'operator' },
    { id: 17, value: 'RESET', type: 'reset' },
    { id: 18, value: '=', type: 'equals' },
  ]


  return (
    <section className="max-w-full w-[33.75rem] mx-auto px-6 md:px-10 lg:px-0">
      <div className={`grid grid-cols-4 gap-[0.8125rem] lg:gap-6 p-6 lg:px-[1.975rem] lg:py-8 rounded-lg transition-all duration-300
        ${theme === 1 ? 'bg-theme1-toggle' : theme === 2 ? 'bg-theme2-toggle theme3-' : 'bg-theme3-toggle'}`}>
        
        {buttons.map((button) => {
          let colorClass = '';
          let textClass = '';

          const spanClass = button.type === 'reset' || button.type === 'equals' ? 'col-span-2' : '';

          if (button.type === 'clear') {
            colorClass = 
              theme === 1 ? 'bg-theme1-keyBlue text-theme1-textWhite border-b-4 border-b-theme1-shadowBlue hover:bg-theme1-keyHover' :
              theme === 2 ? 'bg-theme2-keyCyan text-theme2-textWhite border-b-4 border-b-theme2-shadowCyan hover:bg-theme2-keyHover' :
              'bg-theme3-keyViolet text-theme3-textWhite border-b-4 border-theme3-shadowMagenta hover:bg-theme3-keyHover hover:bg-theme3-keyVioletHover';
            
            textClass = 'text-[1.25rem] md:text-[1.5rem] lg:text-[1.75rem]';

          } else if (button.type === 'reset') {
            colorClass = 
              theme === 1 ? 'bg-theme1-keyBlue text-theme1-textWhite border-b-4 border-b-theme1-shadowBlue hover:bg-theme1-keyHover' :
              theme === 2 ? 'bg-theme2-keyCyan text-theme2-textWhite border-b-4 border-b-theme2-shadowCyan hover:bg-theme2-keyHover' :
              'bg-theme3-keyViolet text-theme3-textWhite border-b-4 border-theme3-shadowMagenta hover:bg-theme3-keyVioletHover';

            textClass = 'text-[1.25rem] md:text-[1.5rem] lg:text-[1.75rem]';

          } else if (button.type === 'equals') {
            colorClass =
              theme === 1 ? 'bg-theme1-keyRed text-theme1-textWhite border-b-4 border-b-theme1-shadowRed hover:bg-theme1-keyRedHover' :
              theme === 2 ? 'bg-theme2-keyOrange text-theme2-textWhite border-b-4 border-b-theme2-shadowOrange hover:bg-theme2-keyOrangeHover' :
              'bg-theme3-keyCyan text-theme3-texBlack border-b-4 border-theme3-shadowCyan hover:bg-theme1-keyCyanHover hover:bg-theme3-keyCyanHover';

            textClass = 'text-[1.25rem] md:text-[1.5rem] lg:text-[1.75rem] pt-4 pb-3 lg:pt-[11px] lg:pb-2';

          } else {
            colorClass =
              theme === 1 ? 'text-theme1-textDark bg-theme1-keyLight border-b-4 border-b-theme1-shadowLight hover:bg-theme1-textWhite' : 
              theme === 2 ? 'text-theme2-textDark bg-theme2-keyLight border-b-4 border-b-theme2-shadowGray hover:bg-theme2-textWhite' : 
              'text-theme3-textYellow bg-theme3-keyDark border-b-4 border-theme3-shadowDark hover:bg-theme3-keyVioletHover2'

            textClass = 'text-[2rem] md:text-[2.2rem] lg:text-[2.4rem]';
          }

          const handleButtonClick = (button: any) => {
            const { type, value } = button;

            if (type === 'number') {
              setInput(prev => prev === '0' ? value : prev + value) 
            }

            else if (type === 'decimal') {
              const lastNumber = input.split(/[\+\-\*\/]/).pop();
              if (lastNumber && !lastNumber.includes('.')) {
                setInput(prev => prev + value);
              }
            }

            if (type === 'operator') {
              const valToAdd = value === 'x' ? '*' : value;
              const lastChar = input.slice(-1);

              if (input === '' && valToAdd === '-') {
                setInput(valToAdd);
              } else if (!['+', '-', '*', '/'].includes(lastChar)) {
                setInput(prev => prev + valToAdd);
              } else {
                setInput(prev => prev.slice(0, -1) + valToAdd);
              }
            }

            else if (type === 'clear') {
              setInput(prev => prev.slice(0, -1));
            }

            else if (type === 'reset') {
              setInput('');
            }

            else if (type === 'equals') {
              try {
                let expression = input;

                if (/[+\-*/.]$/.test(expression)) {
                  expression = expression.slice(0, -1);
                }

                const result = eval(expression);

                if (result === Infinity || isNaN(result)) {
                  setInput('Error');
                } else {
                  // limit to 6 decimals if float
                  setInput(result.toString().length > 10 ? result.toFixed(6) : result.toString());
                }
              } catch {
                setInput('Error');
              }
            }
          }

          useEffect(() => {
            const handleKeyPress = (e: KeyboardEvent) => {
              const key = e.key;

              if (!isNaN(Number(key))) {
                setInput(prev => prev + key);
              }

              else if (['+', '-', '*', '/'].includes(key)) {
                const lastChar = input.slice(-1);
                if (input && !['+', '-', '*', '/'].includes(lastChar)) {
                  setInput(prev => prev + key);
                }
              }

              else if (key === '.') {
                const lastNumber = input.split(/[+\-\*\/]/).pop();
                if (lastNumber && !lastNumber.includes('.')) {
                  setInput(prev => prev + key);
                }
              }

              else if (key === 'Backspace') {
                setInput(prev => prev.slice(0, -1));
              }

              else if (key === 'Enter') {
                try {
                  let expression = input;
                  if (/[+\-*/.]$/.test(expression)) {
                    expression = expression.slice(0, -1);
                  }
                  const result = eval(expression);
                  if (result === Infinity || isNaN(result)) {
                    setInput('Error');
                  } else {
                    setInput(result.toString().length > 10 ? result.toFixed(6) : result.toString());
                  }
                } catch {
                  setInput('Error');
                }
              }

              else if (key === 'Delete') {
                setInput('');
              }
            };

            window.addEventListener('keydown', handleKeyPress);
            return () => window.removeEventListener('keydown', handleKeyPress);
          }, [input]); 
        
          return (
            <button key={button.id} 
            onClick={() => handleButtonClick(button)}
            className={`transition-colors duration-300 rounded-md lg:rounded-lg font-bold
              pt-2 py-1 lg:pt-0.5 lg:py-0
              ${colorClass} ${textClass} ${spanClass}`}>
            {button.value}
          </button>
          ) 
        })}

      </div>
    </section>
  )
}

export default Buttons;