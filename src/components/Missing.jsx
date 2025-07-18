import React, { useState } from 'react';

const Missing = () => {
    const [inputArr, setInputArr] = useState("1, 2, 3, 4, 6");
    const [result, setResult] = useState(null);

    const findMissing = (arr) => {
        const set = new Set(arr);
        const min = Math.min(...arr);
        const max = Math.max(...arr);
    
        const missing = [];
    
        for (let i = min; i <= max; i++) {
            if (!set.has(i)) {
                missing.push(i);
            }
        }
    
        return missing;
    };

    const handleMissing = () => {
        const arr = inputArr
            .split(',')
            .map(str => Number(str.trim()))
            .filter(val => !isNaN(val));

        if (arr.length === 0) {
            alert("Please enter a valid array");
            return;
        }

        const missingNumber = findMissing(arr);
        setResult(missingNumber);
    };

    return (
        <div className="bg-gradient-to-r from-slate-700 to-slate-900 h-[20rem] flex justify-center rounded-lg items-center text-white px-4">
            <div className="bg-slate-800 p-8 rounded-xl shadow-lg w-full max-w-md text-center">
                <h1 className="text-2xl font-bold mb-4">🔍 Find Missing Number</h1>

                <input
                    type="text"
                    className="w-full px-4 py-2 rounded-md text-white border-1 border-white mb-4 outline-none"
                    placeholder="Enter array like 1, 2, 3, 5"
                    value={inputArr}
                    onChange={(e) => setInputArr(e.target.value)}
                />

                <button
                    className="bg-blue-600 hover:bg-blue-700 transition-all px-6 py-2 rounded-md font-semibold"
                    onClick={handleMissing}
                >
                    Find Missing
                </button>

                {result !== null && (
                    <div className="mt-4 text-lg font-medium">
                         Missing Number: <span className="text-green-400">{result}</span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Missing;

