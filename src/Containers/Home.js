import React, { useState } from 'react'

const Home = () => {

    const [mode, setMode] = useState("")
    const [alert, setAlert] = useState({
        msg: null,
        show: "none"
    })

    const handleSen = () => {
        let newMode = [];
        mode.toLowerCase().split("\n").forEach(v => {
            newMode.push(v.charAt(0).toUpperCase() + v.slice(1))
        })

        let newStr = [];
        newMode.join("\n").split(".").forEach(v => {
            newStr.push(v.trim().charAt(0).toUpperCase() + v.trim().slice(1))
        })

        setMode(newStr.join(". ").trim())

        setAlert({
            show: "block",
            msg: "Sucess: Converted to sentence case!"
        })

        setTimeout(() => setAlert({
            show: "none",
            msg: null
        }), 3000)
    }

    const handleLower = () => {
        setMode(mode.toLowerCase())

        setAlert({
            show: "block",
            msg: "Sucess: Converted to lower case!"
        })

        setTimeout(() => setAlert({
            show: "none",
            msg: null
        }), 3000)
    }

    const handleUpper = () => {
        setMode(mode.toUpperCase())

        setAlert({
            show: "block",
            msg: "Sucess: Converted to upper case!"
        })

        setTimeout(() => setAlert({
            show: "none",
            msg: null
        }), 3000)
    }

    const handleCapitalized = () => {
        let newMode = [];
        mode.toLowerCase().split("\n").forEach(v => {
            newMode.push(v.charAt(0).toUpperCase() + v.slice(1))
        })

        let newStr = [];
        newMode.join("\n").split(" ").forEach(v => {
            newStr.push(v.charAt(0).toUpperCase() + v.slice(1))
        })

        setMode(newStr.join(" "))

        setAlert({
            show: "block",
            msg: "Sucess: Converted to capitalized case!"
        })

        setTimeout(() => setAlert({
            show: "none",
            msg: null
        }), 3000)
    }

    const handleAlternating = () => {
        let newMode = "";
        for (let ch in mode) {
            if (ch % 2 === 0) {
                newMode += mode[ch].toLowerCase()
            } else {
                newMode += mode[ch].toUpperCase()
            }
        }

        setMode(newMode)

        setAlert({
            show: "block",
            msg: "Sucess: Converted to alternating case!"
        })

        setTimeout(() => setAlert({
            show: "none",
            msg: null
        }), 3000)
    }

    const handleInverse = () => {
        let newMode = "";
        for (let ch of mode) {
            if (ch === ch.toUpperCase()) {
                newMode += ch.toLowerCase()
            } else {
                newMode += ch.toUpperCase()
            }
        }

        setMode(newMode)

        setAlert({
            show: "block",
            msg: "Sucess: Converted to inverse case!"
        })

        setTimeout(() => setAlert({
            show: "none",
            msg: null
        }), 3000)
    }

    const handleRemove = () => {
        setMode(mode.replace(/\s+/g, ' ').trim())

        setAlert({
            show: "block",
            msg: "Sucess: Extra spaces removed!"
        })

        setTimeout(() => setAlert({
            show: "none",
            msg: null
        }), 3000)
    }

    const handleDownload = () => {
        let element = document.createElement("a");
        let file = new Blob([mode], {
            type: "text/plain",
        });
        element.href = URL.createObjectURL(file);
        element.download = "myFile.txt";
        document.body.appendChild(element);
        element.click();

        setAlert({
            show: "block",
            msg: "Sucess: Text downloaded!"
        })

        setTimeout(() => setAlert({
            show: "none",
            msg: null
        }), 3000)
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(mode);
        document.querySelector("textarea").select()

        setAlert({
            show: "block",
            msg: "Sucess: Text copied to clipboard!"
        })

        setTimeout(() => setAlert({
            show: "none",
            msg: null
        }), 3000)
    }

    const handleClear = () => {
        setMode("")

        setAlert({
            show: "block",
            msg: "Sucess: Text Cleared!"
        })

        setTimeout(() => setAlert({
            show: "none",
            msg: null
        }), 3000)
    }

    let wordCount;
    mode.trim() === "" ? wordCount = 0 : wordCount = mode.trim().split(/\s+/).length

    let lineCount;
    mode === "" ? lineCount = 0 : lineCount = mode.split(/\r\n|\r|\n/).length

    return (
        <>
            <section className='py-5'>
                <div className="container">
                    <div className="main mb-5">
                        <div className="heading mb-5">
                            <h1 className='title fw-bold'>Accidentally left the caps lock on and typed something, but can't be bothered to start again and retype it all?</h1>
                            <p className='desc'>Simply enter your text and choose the case you want to convert it to.</p>
                        </div>

                        <textarea className='w-100' placeholder='Type or paste your content here' value={mode} onChange={(e) => setMode(e.target.value)}></textarea>

                        <div className={`w-100 text-start alert alert-success d-${alert.show}`}>
                            <strong>{alert.msg}</strong>
                        </div>

                        <div className="btn-section text-center text-md-start">
                            <button onClick={handleSen} className="btn fw-bold shadow-none rounded-0 me-1 mb-1" disabled={mode.trim().length === 0}>Sentence case</button>

                            <button onClick={handleLower} className="btn fw-bold shadow-none rounded-0 me-1 mb-1" disabled={mode.trim().length === 0}>lower case</button>

                            <button onClick={handleUpper} className="btn fw-bold shadow-none rounded-0 me-1 mb-1" disabled={mode.trim().length === 0}>UPPER CASE</button>

                            <button onClick={handleCapitalized} className="btn fw-bold shadow-none rounded-0 me-1 mb-1" disabled={mode.trim().length === 0}>Capitalized Case</button>

                            <button onClick={handleAlternating} className="btn fw-bold shadow-none rounded-0 me-1 mb-1" disabled={mode.trim().length === 0}>aLtErNaTiNg cAsE</button>

                            <button onClick={handleInverse} className="btn fw-bold shadow-none rounded-0 me-1 mb-1" disabled={mode.trim().length === 0}>InVeRsE CaSe</button>

                            <button onClick={handleRemove} className="btn fw-bold shadow-none rounded-0 me-1 mb-1" disabled={mode.trim().length === 0}>Remove Extra Spaces</button>

                            <button onClick={handleDownload} className="btn fw-bold shadow-none rounded-0 me-1 mb-1" disabled={mode.trim().length === 0}>Download Text</button>

                            <button onClick={handleCopy} className="btn fw-bold shadow-none rounded-0 me-1 mb-1" disabled={mode.trim().length === 0}>Copy to Clipboard</button>

                            <button onClick={handleClear} className="btn fw-bold shadow-none rounded-0 me-1 mb-1" disabled={mode.trim().length === 0}>Clear</button>
                        </div>
                    </div>

                    <div className="info text-center text-md-start">
                        <h5 className='fw-bold'>Your text summary</h5>

                        <span className='d-inline-block pe-3 mb-2 mb-md-0'>Character Count: {mode.length}</span>

                        <span className='d-inline-block px-3 mb-2 mb-md-0'>Word Count: {wordCount}</span>

                        <span className='d-inline-block px-3 mb-2 mb-md-0'>Line Count: {lineCount}</span>

                        <span className='d-inline-block ps-3 border-0'>Read Time: {(0.008 * wordCount).toFixed(2)} min</span>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home