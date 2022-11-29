import { useState } from 'react'

export default function Formtext(props) {
  //props parameter ghetala

  const [myStyle, setMystyle] = useState({
    color: 'black',
    backgroundColor: 'white',
  })
  const toggle = () => {
    if (myStyle.color === 'black') {
      setMystyle({
        color: 'white',
        backgroundColor: 'black',
      })
    } else if (myStyle.color === 'white') {
      setMystyle({
        color: 'red',
        backgroundColor: 'blue',
      })
    } else if (myStyle.color === 'red') {
      setMystyle({
        color: 'blue',
        backgroundColor: 'green',
      })
    } else if (myStyle.color === 'blue') {
      setMystyle({
        color: 'green',
        backgroundColor: 'black',
      })
    } else if (myStyle.color === 'green') {
      setMystyle({
        color: 'black',
        backgroundColor: 'white',
      })
    }
  }

  const handleUpClick = () => {
    let newText = text.toUpperCase()
    setText(newText)
  }

  const handleloClick = () => {
    let newText = text.toLowerCase()
    setText(newText)
  }

  const handleOnChange = (event) => {
    // event ek object bhetto
    // console.log(event.target.value);
    setText(event.target.value) //  state la update keli te sgla text ha text navachya varible var jayil
  }

  const handlClearClick = () => {
    let newText = ''
    setText(newText)
  }

  const handleReplaceAllText = () => {
    let oldtext = prompt('Please enter your text ')
    let newtext = prompt('Please enter your newtext ')
    let replaceText = text.replaceAll(oldtext, newtext)
    setText(replaceText)
  }

  const matchText = () => {
    let findText = prompt('enter your text') // string return
    let find = text.match(findText) //object return
    console.log(find)

    // console.log(find?.[0]);
    if (find === null) {
      prompt(
        'not availble?',
        'your Word is not available in Your Text ' + findText,
      )
    } else {
      prompt(
        'your word is available?',
        'your Word is available in Your Text ' + findText,
      )
    }
  }

  const countText = () => {
    let count =
      text.length + ' character ' + (text.split(' ').length - 1) + ' words'
    prompt(' words and character count ', count)
  }

  //********** */ const [text, setText] = useState("enter your text");
  const [text, setText] = useState('') //starting //state bnvli text ha varaible ahe ani setText ha function ahe update karnyasathi
  // let varaible = 'rahul'    //template literals use
  return (
    <>
      <div className="container mt-5" style={{ color: 'red' }}>
        <h1>{props.heading}</h1>
        {/* <h1>{`this is ${varaible} `}</h1>    */}
        {/* template literals use */}

        {/* props madhli heading use karat ahe heading he naav same pahije je apn ghetle ahe app.js madhe */}

        <div className="mb-4">
          {/*  value ={text}state set keli   , onchange= {handleOnclick} state la update kel  */}
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="mybox"
            rows="11"
            style={myStyle}

            // style={{ color: 'black' }}
          ></textarea>

          <button onClick={toggle}>Color-Mode Change</button>
        </div>

        <button
          type="button"
          className="btn mr-5 btn-success rounded-circle mx-2 col-10 col-md-6 col-lg-4  my-2 py-3 "
          id="button"
          onClick={handleUpClick}
        >
          convert to UpperCase
        </button>
        <button
          type="button"
          className="btn btn-danger mx-2 rounded-circle col-10 col-md-5 col-lg-4 my-2 py-3"
          id="button"
          onClick={handleloClick}
        >
          Convert to LowerCase
        </button>
        <button
          type="button"
          className="btn btn-primary rounded-circle mx-2 col-10 col-md-6 col-lg-3 my-2 py-3 "
          id="button"
          onClick={handlClearClick}
        >
          Clear Text
        </button>
        <button
          type="button"
          className="btn btn-dark rounded-circle mx-2 col-10 col-md-5 col-lg-4 my-2 py-3"
          id="button"
          onClick={handleReplaceAllText}
        >
          ReplaceAll Text
        </button>
        <button
          type="button"
          className="btn btn-primary rounded-circle mx-2 col-10 col-md-6 col-lg-4 my-2 py-3"
          id="button"
          onClick={countText}
        >
          Count
        </button>
        <button
          type="button"
          className="btn btn-success rounded-circle mx-2 col-10 col-md-5 col-lg-3 my-3 py-3"
          id="button"
          onClick={matchText}
        >
          Word Searching
        </button>
      </div>
      <div className="container mt-2">
        <h1>Preview</h1>
        {/* <button onClick={props.func}> button</button> function aceess using props */}
        <p>{text.length > 0 ? text : 'Enter Your Text'}</p>
      </div>
    </>
  )
}
