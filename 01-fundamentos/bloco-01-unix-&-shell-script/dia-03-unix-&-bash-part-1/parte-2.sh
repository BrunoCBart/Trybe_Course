#!/bin/bash

delay=2

# Exercício 1

echo -e "\nBaixando arquivo de paises na pasta countries.txt"
cd unix_tests
curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"
sleep $delay

# Exercício 2

echo -e "\nMostrando o conteudo de countries.txt"
cat countries.txt
sleep $delay

# Exercício 3

echo -e "\nMostrando o conteudo do arquivo countries.txt."
sleep $delay
echo less countries.txt

# Exercício 4
# Use /Zambia para fazer a pesquisa, aperte n para a proxima ocorrencia e p para a anterior.

# Exercício 5

echo -e "\nBuscando por Brazil em countries.txt"
grep "Brazil" countries.txt || echo nao encontrado
sleep $delay

# Exercício 6
grep -i "brazil" countries.txt || echo nao encontrado
sleep $delay

# Exercício 7

echo -e "\nCriando phrases.txt e adicionando frases"
echo -e "Skateboarding is awesome\nCoding is so much fun also\nTag you'r it!\nFirefox is a good browser for CSS" > phrases.txt
sleep $delay

# Exercício 8

echo -e "\nBuscando por frases que nao contem a palavra fox"
grep -v fox phrases.txt
sleep $delay

# Exercício 9

echo -e "\nContando o numero de palavras no arquivo phrases.txt"
wc -w phrases.txt
sleep $delay

# Exercício 10

echo -e "\nContando o numero de linhas do arquivo phrases.txt"
wc -l phrases.txt
sleep $delay

# Exercício 11

echo -e "\nCriando os arquivos empty.tbt e empty.pdf"
touch empty.tbt empty.pdf
sleep $delay

# Exercício 12

echo -e "\nListando todos os arquivos do diretorio unix_tests"
ls
sleep $delay

# Exercício 13

echo -e "\Listando todos os arquivos que terminam com txt"
ls *.txt
sleep $delay

# Exercício 14

echo -e "\nListando todos os arquivos que terminam com tbt ou txt"
ls *.t*t
sleep $delay

# Exercício 15

echo -e "\nAcessando o manual do comando ls"
man ls
sleep $delay

