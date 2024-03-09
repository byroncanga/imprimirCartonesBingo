import React from "react";
import "./index.css";

const bingo = [
  {
    boleto: 1,
    b: [7, 2, 10, 9, 3],
    i: [28, 23, 26, 27, 24],
    n: [37, 32, "O", 34, 45],
    g: [59, 52, 46, 51, 60],
    o: [61, 74, 65, 68, 72],
  },
  {
    boleto: 2,
    b: [7, 6, 8, 12, 1],
    i: [27, 30, 26, 18, 24],
    n: [34, 44, "O", 42, 32],
    g: [51, 56, 48, 53, 54],
    o: [63, 61, 69, 72, 68],
  },
  {
    boleto: 3,
    b: [13, 14, 2, 6, 3],
    i: [16, 23, 26, 27, 19],
    n: [32, 42, "O", 38, 36],
    g: [47, 49, 60, 59, 50],
    o: [64, 61, 66, 74, 65],
  },
  {
    boleto: 4,
    b: [5, 9, 6, 15, 8],
    i: [25, 27, 17, 20, 18],
    n: [37, 31, "O", 38, 42],
    g: [53, 59, 50, 60, 48],
    o: [64, 68, 71, 69, 75],
  },
  {
    boleto: 5,
    b: [13, 14, 6, 1, 8],
    i: [19, 30, 29, 20, 26],
    n: [32, 36, "O", 38, 45],
    g: [60, 57, 49, 54, 53],
    o: [73, 75, 68, 62, 74],
  },
  {
    boleto: 6,
    b: [6, 14, 3, 13, 4],
    i: [23, 22, 24, 29, 21],
    n: [40, 41, "O", 33, 36],
    g: [52, 53, 51, 49, 60],
    o: [72, 74, 70, 69, 71],
  },
  {
    boleto: 7,
    b: [5, 6, 8, 14, 13],
    i: [25, 17, 26, 27, 20],
    n: [45, 36, "O", 34, 31],
    g: [56, 47, 49, 46, 60],
    o: [61, 73, 67, 74, 70],
  },
  {
    boleto: 8,
    b: [4, 11, 7, 2, 5],
    i: [18, 26, 23, 19, 22],
    n: [33, 44, "O", 32, 31],
    g: [53, 46, 51, 58, 48],
    o: [62, 63, 66, 75, 64],
  },
  {
    boleto: 9,
    b: [1, 7, 8, 5, 3],
    i: [24, 26, 28, 17, 22],
    n: [31, 32, "O", 33, 36],
    g: [47, 60, 53, 49, 48],
    o: [63, 62, 68, 66, 69],
  },
];

function App() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <div className="">
        <button onClick={handlePrint}>Imprimir</button>
        {bingo.map((boleto) => {
          return (
            <div className="boleto print:break-inside-avoid print:max-w-full">
              <h1 className="text-2xl font-bold text-black mt-10 text-center mb-2 ml-2">
                Boleto # {boleto.boleto}
              </h1>
              <div className="grid grid-cols-5 gap-x-2">
                <div className="flex flex-col items-center ">
                  <h1 className="text-2xl font-bold text-white bg-slate-700 w-full text-center">
                    B
                  </h1>
                  {boleto.b.map((number) => {
                    return (
                      <p className="text-2xl font-bold text-black mb-2 border-2 border-slate-950 p-2 w-full  text-center">
                        {number}
                      </p>
                    );
                  })}
                </div>
                <div className="flex flex-col items-center">
                  <h1 className="text-2xl font-bold text-white bg-slate-700 w-full text-center">
                    I
                  </h1>
                  {boleto.i.map((number) => {
                    return (
                      <p className="text-2xl font-bold text-black mb-2 border-2 border-slate-950 p-2 w-full  text-center">
                        {number}
                      </p>
                    );
                  })}
                </div>
                <div className="flex flex-col items-center ">
                  <h1 className="text-2xl font-bold text-white bg-slate-700 w-full text-center">
                    N
                  </h1>
                  {boleto.n.map((number) => {
                    return (
                      <p className="text-2xl font-bold text-black mb-2 border-2 border-slate-950 p-2 w-full  text-center">
                        {number}
                      </p>
                    );
                  })}
                </div>
                <div className="flex flex-col items-center">
                  <h1 className="text-2xl font-bold text-white bg-slate-700 w-full text-center">
                    G
                  </h1>
                  {boleto.g.map((number) => {
                    return (
                      <p className="text-2xl font-bold text-black mb-2 border-2 border-slate-950 p-2 w-full  text-center">
                        {number}
                      </p>
                    );
                  })}
                </div>
                <div className="flex flex-col items-center ">
                  <h1 className="text-2xl font-bold text-white bg-slate-700 w-full text-center">
                    O
                  </h1>
                  {boleto.o.map((number) => {
                    return (
                      <p className="text-2xl font-bold text-black mb-2 border-2 border-slate-950 p-2 w-full  text-center">
                        {number}
                      </p>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
