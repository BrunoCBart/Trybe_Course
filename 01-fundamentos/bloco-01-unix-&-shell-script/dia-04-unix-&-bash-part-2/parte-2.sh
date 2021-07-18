#!/bin/bash

delay=2

#Exercicio 1 & 2

echo -e "\nNavegando ate a pasta unix_tests e verificando as permissoes dos arquivos"
cd unix_tests && ls -l
sleep $delay

#Exercicio 3

echo -e "\nModificando a permissao do arquivo bunch_of_things.txt para que todos tenham acesso a leitura e escrita"
chmod ugo+rw
sleep $delay

#Exercicio 4

echo -e "\nRemovendo a permissao de escrita do arquivo bunch_of_things.txt"
chmod ugo-w bunch_of_things.txt && ls -learn
sleep $delay

#Exercicio 5

echo -e "\nVoltando as permissoes do arquivo inicial"
chmod u+w bunch_of_things.txt
sleep $delay