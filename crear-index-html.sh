#!/bin/bash

for i in {29..51}
do
    carpeta="Nueva carpeta - copia ($i)"
    if [ -d "$carpeta" ]; then
        touch "$carpeta/index.html"
        echo "Archivo index.html creado en la carpeta $carpeta."
    fi
done