import "./App.css";
import { useState } from "react";

export default function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const ops = ["/", "*", "-", "+", "."];

  const createDigits = () => {
    const digits = [];

    for (let i = 1; i < 10; i++) {
      digits.push(<button key={i}>{i}</button>);
    }

    return digits;
  };

  const updateCalc = (value) => {
    if (
      (ops.includes(value) && calc === "") ||
      (ops.includes(value) && ops.includes(calc?.slice(-1)))
    ) {
      return;
    }

    setCalc(calc + value);

    if (!ops.includes(value)) {
      setResult(eval(calc + value)?.toString());
    }
  };

  const calculate = () => {
    setCalc(eval(calc)?.toString());
  };

  const deleteLast = () => {
    if (calc == "") {
    }
    const value = calc.slice(calc.length);

    setCalc(value);
    setResult(eval(value)?.toString());
  };

  const roundedResult = parseFloat(result).toFixed(4);

  return (
    <div>
      <div
        className="body"
        class="bg-pink-50 h-screen flex items-center justify-center"
      >
        <div
          className="container"
          class="w-96 bg-pink-200 h-96 flex flex-col justify-between rounded-2xl shadow-[0_10px_20px_rgba(240,_46,_170,_0.3)]"
        >
          <div class="flex-col bg-pink-200 h-24 flex items-end place-content-end m-4">
            <div class="text-red-600 text-xl">
              <span>{calc || 0}</span>
            </div>

            <div id="display" class="text-4xl" calc="calc">
              <span>
                {" "}
                {result ? (
                  <span>
                    {Number.isInteger(parseFloat(roundedResult))
                      ? parseFloat(roundedResult)
                      : roundedResult}
                  </span>
                ) : null}
              </span>
            </div>
          </div>

          <div
            className="pad"
            class="grid grid-cols-4 grid-rows-5 h-72 gap-0.5 m-4"
          >
            <button
              onClick={deleteLast}
              id="clear"
              class="col-start-1 col-end-3 bg-red-200 hover:text-xl hover:border hover:border-red-500"
            >
              <span>AC</span>
            </button>
            <button
              onClick={() => updateCalc("/")}
              id="divide"
              class="bg-pink-100 hover:text-xl hover:border hover:border-red-500"
            >
              <span>/</span>
            </button>
            <button
              onClick={() => updateCalc("*")}
              id="multiply"
              class="bg-pink-100 hover:text-xl hover:border hover:border-red-500"
            >
              <span>X</span>
            </button>

            <button
              onClick={() => updateCalc("7")}
              id="seven"
              class="bg-red-100 hover:text-xl hover:border hover:border-red-500"
            >
              <span>7</span>
            </button>

            <button
              onClick={() => updateCalc("8")}
              id="eight"
              class="bg-red-100 hover:text-xl hover:border hover:border-red-500"
            >
              <span>8</span>
            </button>
            <button
              onClick={() => updateCalc("9")}
              id="nine"
              class="bg-red-100 hover:text-xl hover:border hover:border-red-500"
            >
              <span>9</span>
            </button>
            <button
              onClick={() => updateCalc("-")}
              id="substract"
              class="bg-pink-100 hover:text-xl hover:border hover:border-red-500"
            >
              <span>-</span>
            </button>
            <button
              onClick={() => updateCalc("4")}
              id="four"
              class="bg-red-100 hover:text-xl hover:border hover:border-red-500"
            >
              <span>4</span>
            </button>
            <button
              onClick={() => updateCalc("5")}
              id="five"
              class="bg-red-100 hover:text-xl hover:border hover:border-red-500"
            >
              <span>5</span>
            </button>
            <button
              onClick={() => updateCalc("6")}
              id="six"
              class="bg-red-100 hover:text-xl hover:border hover:border-red-500"
            >
              <span>6</span>
            </button>
            <button
              onClick={() => updateCalc("+")}
              id="add"
              class="bg-pink-100 hover:text-xl hover:border hover:border-red-500"
            >
              <span>+</span>
            </button>
            <button
              onClick={() => updateCalc("1")}
              id="one"
              class="bg-red-100 hover:text-xl hover:border hover:border-red-500"
            >
              <span>1</span>
            </button>
            <button
              onClick={() => updateCalc("2")}
              id="two"
              class="bg-red-100 hover:text-xl hover:border hover:border-red-500"
            >
              <span>2</span>
            </button>
            <button
              onClick={() => updateCalc("3")}
              id="three"
              class="bg-red-100 hover:text-xl hover:border hover:border-red-500"
            >
              <span>3</span>
            </button>

            <button
              onClick={calculate}
              id="equals"
              class="col-start-4 col-end-5 row-span-3 bg-red-400 hover:text-xl hover:border hover:border-white"
            >
              <span>=</span>
            </button>
            <button
              onClick={() => updateCalc("0")}
              id="zero"
              class="bg-red-100 col-span-2 hover:text-xl hover:border hover:border-red-500"
            >
              <span>0</span>
            </button>
            <button
              onClick={() => updateCalc(".")}
              class="bg-red-100 hover:text-xl hover:border hover:border-red-500"
            >
              <span>.</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
