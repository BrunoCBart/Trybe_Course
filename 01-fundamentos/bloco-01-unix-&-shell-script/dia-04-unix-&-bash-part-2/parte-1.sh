#!/bin/bash

delay=2

#Exercicio 1

echo -e "\nNavegando a pasta unix_tests"
cd unix_tests
sleep $delay

#Exercicio 2

echo -e "\nCriando arquivo skills2.txt com os valores Internet, Unix e Bash em cada linha"
echo -e "\nInternet\nUnix\nBash" | cat > skills2.txt
sleep $delay

#Exercicio 3

echo -e "\nAdicinando mais 5 habilidades a lista de skills e imprimindo no terminal"
echo -e "\nCSS\nPhP\nPython\nReact\nSkateboarding" | cat >> skills2.txt && cat skills2.txt
sleep $delay

#Exercicio 4

echo -e "\nContando quantas linhas tem o arquivo skills2.txt"
wc -l skills2.txt
sleep $delay

#Exercicio 5

echo -e "\nCriando o arquivo top_skills.txt usando as 3 primeiras linhas de skill2.txt em ordem alfabética"
sort skills2.txt | head -3 | cat > top_skills.txt
sleep $delay

#Exercicio 6

echo -e "\nCriando um novo arquivo chamado phrases2.txt e adicionando frases"
echo -e "Everyone should do calisthenics\nSomebody come get her she's dancing like a beaver\nI want to learn PhP\nbrazil is just a test" | cat phrases2.txt
sleep $delay

#Exercicio 7

echo -e "\nContando quantas linhas contem as letras br"
grep "br" phrases2.txt | wc -l
sleep $delay

#Exercicio 8

echo -e "\nContando quantas linhas nao contem as letras br"
grep -v "br" phrases2.txt | wc -l
sleep $delay

#Exercicio 9

echo -e "\nAdicionando dois nomes de paises ao final do arquivo phrases.txt"
echo -e "Uganda\nUnited Kingdom" | cat >> phrases2.txt
sleep $delay

#Exercicio 10

echo -e "\nCriando o arquivo bunch_of_things.txt com os conteudos de phrases2.txt e countries.txt"
cat phrases2.txt countries.txt > bunch_of_things.txt
sleep $delay

#Exercicio 11

echo -e "\nOrdenando o arquivo bunch_of_things.txt"
sort -o bunch_of_things.txt bunch_of_things.txt
sleep $delay


