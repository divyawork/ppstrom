<!DOCTYPE html>
<html>
<head>
    <title>Simple JavaScript Example</title>
</head>
<body>
    <h1>Click the button</h1>
    <button id="myButton">Click Me</button>

    <script>
        // JavaScript code
        document.getElementById("myButton").addEventListener("click", function() {
            alert("Button clicked!");
        });
    </script>
</body>
</html>
