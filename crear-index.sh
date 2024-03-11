#!/bin/bash

echo "<!DOCTYPE html>
<html lang=\"es\">
<head>
    <meta charset=\"UTF-8\">
    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">
    <title>Lista de Números</title>
</head>
<body>
    <h1>Lista de Números del 29 al 51</h1>
    <ul>" > index.html

for ((i=29; i<=51; i++))
do
    echo "        <li>$i</li>" >> index.html
done

echo "    </ul>
</body>
</html>" >> index.html

echo "Archivo index.html creado exitosamente."
