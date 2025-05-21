import { useCallback, useState, useEffect } from 'react'



function App() {
  const [length, setLength] = useState(8);
  const [setnumber, updateNumber] = useState(false);
  const [character, setCharacter] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => { 
    let password = "";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(setnumber){
      str += "0123456789";
    }
    if(character){
      str += "!@#$%^&*()_+";
    }
    for(let i=1; i<=length; i++){
      let char=Math.floor(Math.random()*str.length+1);
      password += str.charAt(char);
    } 
    setPassword(password);
    
  },[length, setnumber, character,setPassword]);

  useEffect(() => {passwordGenerator(password )},[length, setnumber, character ,setPassword]);

  return (
    <>
     


     <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-400 bg-gray-800">
      <div className="text-center text-white ">Text Generator</div>
      <div className="flex shadow  rounded-lg overflow-hidden mb-4">
        <input type='text'
        value={password}
        className='w-full px-4 py-2 text-gray-800 bg-gray-200 focus:outline-none' 
        placeholder='Password'
        readOnly
        />
        <button className='px-4 py-2 bg-orange-500 text-white font-semibold'>Copy</button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input type='range'
            min={4}
            max={20}
            value={length}
            className='cursor-pointer'
            onChange={(e) => setLength(e.target.value)}
            />
            <label>Length:{length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type='checkbox'
            checked={setnumber}
            onChange={(e) => updateNumber((prev)=> !prev)}
            />
            <label>Include Numbers</label>
           </div>
            <div className="flex items-center gap-x-1">
              <input type='checkbox'
              checked={character}
              onChange={(e) => setCharacter((prev)=> !prev)}
              />
              <label>Include Special Characters</label>
               </div>
        </div>
     </div>
    </>
  )
}

export default App
