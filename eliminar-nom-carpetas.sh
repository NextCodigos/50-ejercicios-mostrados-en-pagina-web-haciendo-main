#!/bin/bash
# Quito la palabra  - copia de cada carpeta
rename 's/ - copia//' Nueva\ carpeta\ -\ copia\ *

# Quito Nueva carpeta por Carpeta_
lsd | column | sed 's/Nueva carpeta/Carpeta/'

# Ordenar numeros de carpeta
lsd | column | sed 's/Nueva carpeta/Carpeta/' | sort -n -k 3

