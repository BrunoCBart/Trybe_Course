#!/bin/bash

delay=2

# Exercício 1

echo -e "\nCriando diretório unix_tests"
mkdir unix_tests
echo -e "\nNavegando para o diretorio unix_tests"
cd unix_tests
sleep $delay

# Exercício 2

echo -e "\nCriando o arquivo trybe.txt"
>> trybe.txt
sleep $delay

# Exercício 3

echo -e  "\nCriando uma copia do arquivo trybe.txt"
cp trybe.txt trybe_backup.txt
sleep $delay

# Exercício 4

echo -e "\nRenomeando arquivo trybe.txt"
mv trybe.txt renamed.txt
sleep $delay

# Exercício 5

echo -e "\nCriado o diretorio backup"
mkdir backup
sleep $delay

# Exercício 6

echo -e "\nMovendo trybe_backup.txt para backup"
mv trybe_backup.txt backup
sleep $delay

# Exercício 7

echo -e "\nCriando diretorio backup2"
mkdir backup2
sleep $delay

# Exercício 8

echo -e "\nMvendo arquivo trybe_backup.txt para backup2"
mv backup/trybe_backup.txt backup2
sleep $delay

# Exercício 9

echo -e "\nRemovendo pasta backup"
rmdir backup
sleep $delay

# Exercício 10

echo -e "\nRenomeando backup2 para backup"
mv backup2 backup
sleep $delay

# Exercício 11

echo -e "\nMostrando o path completo e listando os arquivos"
pwd && ls
sleep $delay

# Exercício 12

echo -e "\nApagando diretorio backup"
rm -r backup
sleep $delay

# Exercício 13

echo -e "\nLimpando o terminal"
sleep $delay
clear

# Exercício 14

echo -e "\nCriando arquivo skills.txt"
echo -e "Internet\nUnix\nBash\nHTML\nCSS\nJavaScript\nReact\nSQL" >> skills.txt
sleep $delay

echo -e "\nMostrando na tela as 5 primeiras skills"
cat skills.txt | head -5
sleep $delay

# Exercício 15

echo -e "\nMostrando na tela as 4 ultimas skills"
cat skills.txt | tail -4
sleep $delay

# Exercício 16

echo -e "\nApagando todos os arquivos que terminam em .txt"
rm -rf *.txt
sleep $delay

