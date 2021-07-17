#!/bin/bash

delay=2

# Exercício 1

echo -e "\nBaixando arquivo de paises na pasta countries.txt"
curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"

# Exercício 2

echo -e "\nMostrando o conteudo de countries.txt"
cat countries.txt

# Exercício 3

echo -e "\nMostrando o conteudo do arquivo countries.txt."
less countries.txt

# Exercício 4
# Use /Zambia para fazer a pesquisa, aperte n para a proxima ocorrencia e p para a anterior.

# Exercício 5

echo -e "\nBuscando por Brazil em countries.txt"
grep "Brazil" countries.txt || echo nao encontrado

# Exercício 6
grep -i "brazil" countries.txt || echo nao encontrado

# Exercício 7

echo -e "\nCriando phrases.txt e adicionando frases"
