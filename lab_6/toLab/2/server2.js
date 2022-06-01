function onRequest_8080(request, response) {
    response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    // writing html
    response.write(`
        <form>
            <label for="area">Area:</label>
            <input type="text" id="area">
            <label for="location">Location:</label>
            <input type="text" id="location">
            <input type="button" onclick="fetchData()" value="Fetch">
        </form>
        <h1>Remote</h1>
        <div id='remote'>
            Remote date and time
        </div>
        <!-- ***************** -->
        <h1>Local</h1>
        <div id='local'>
            Local date and time
        </div>
    `);

    //
    response.write(`
        <script>
        function updateDiv(text="Downloading data", id="remote"){
            let remoteDiv = document.getElementById(id);
            let newDiv = document.createElement('div');
            let newText;
                if(id === "remote"){
                newText = document.createTextNode(text);
                newDiv.appendChild(newText);
            }
            else{
                newDiv.innerHTML = text
            }
            newDiv.setAttribute("id", id);
            remoteDiv.parentNode.replaceChild(newDiv, remoteDiv);
        }
    
        function fetchData(){
            updateDiv()
            let area = document.getElementById("area").value;
            let location = document.getElementById("location").value;
            const url = \`http://worldtimeapi.org/api/timezone/\${area}/\${location}\`;
            fetch(url)
            .then(res => {
                if(res.headers.get("content-type").indexOf("text/html") !== -1){
                    updateDiv("The server is overloaded")
                }else{
                    return res.json()
                }
            })
            .then(result => {
                updateDiv(result.datetime)
            })
            .catch((err) => console.error(err))
            fetchLocal()
        }

        function fetchLocal(){
            fetch("http://localhost:8081/")
            .then(res => res.text())
            .then(html => {
                updateDiv(html, "local")
            })
        }
        </script>
    `)
    response.end();
}

function onRequest_8081(request, response) {
    let today = new Date();
    let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    response.writeHead(200, { "Content-Type": "text/html; charset=utf-8", "Access-Control-Allow-Origin": "http://localhost:8080"});
    response.write(`
    <div>
        <span id='date'> Date: ${date}  </span>
        <span id='time'> Hour: ${time}  </span><br>
    </div>  
    `);
    response.end();
}

/* ************************************************** */
/* Main block
/* ************************************************** */
let http = require('http');

http.createServer(onRequest_8080).listen(8080);
http.createServer(onRequest_8081).listen(8081);
console.log("The server was started on port 8080 and 8081");
console.log("To stop the server, press 'CTRL + C'");