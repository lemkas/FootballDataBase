async function get() {
    
 const res = await fetch('http://localhost:5000/home', {
    mode: 'no-cors'
 })
 const data = res.json()
 console.log(data)
}

get()

