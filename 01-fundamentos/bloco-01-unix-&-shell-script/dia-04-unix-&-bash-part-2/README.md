# Parte I - Comandos de Input e Output

1. Navegue até a pasta `unix_tests` ;

1. Crie um arquivo texto pelo terminal com o nome `skills2.txt` e adicione os valores Internet , Unix e Bash , um em cada linha.

1. Adicione mais 5 itens à sua lista de skills e depois imprima a lista ordenada no terminal. 🤓

1. Conte quantas linhas tem o arquivo `skills2.txt` .

1. Crie um arquivo chamado `top_skills.txt` usando o `skills2.txt` , contendo as 3 primeiras skills em ordem alfabética.

1. Crie um novo arquivo chamado `phrases2.txt` pelo terminal e adicione algumas frases de sua escolha.

1. Conte o número de linhas que contêm as letras br .

1. Conte o número de linhas que não contêm as letras br .

1. Adicione dois nomes de países ao final do arquivo `phrases2.txt` .

1. Crie um novo arquivo chamado `bunch_of_things.txt` com os conteúdos dos arquivos `phrases2.txt` 
e `countries.txt`

1. Ordene o arquivo `bunch_of_things.txt` .

# Parte II - Permissões

1. Navegue até a pasta `unix_tests` ;

1. Rode o comando ls -l e veja quais as permissões dos arquivos;

1. Mude a permissão do arquivo `bunch_of_things.txt` para que todos os usuários possam ter acesso à leitura e escrita, e verifique se está correto com o comando ls -l .
Resultado esperado: -rw-rw-rw- 1 ana ana 1860 ago 13 11:39 `bunch_of_things.txt`

1. Tire a permissão de escrita do arquivo `bunch_of_things.txt` para todos os usuários, verifique se está correto com o comando ls -l ;
Resultado esperado: -r--r--r-- 1 ana ana 1860 ago 13 11:39 `bunch_of_things.txt`

1. Volte à permissão do arquivo bunch_of_things.txt para a listada inicialmente utilizando o comando chmod 644 `bunch_of_things.txt` .
Resultado esperado: -rw-r--r-- 1 ana ana 1860 ago 13 11:39 `bunch_of_things.txt`

# Parte III - Processos & Jobs

1. Liste todos os processos;

1. Agora use o comando `sleep 30 &` ;

1. Use a listagem de processos para encontrar o PID do processo que está executando o comando `sleep 30` e termine a sua execução (mate o processo) ;

1. Execute novamente o comando `sleep 30` , mas agora sem o `&` . Depois, faça com que ele continue executando em background;

1. Crie um processo em background que rode o comando `sleep` por 300 segundos.

1. Crie mais dois processos que rodem o comando `sleep` por 200 e 100 segundos, respectivamente.
Você deve criá-los em foreground (sem usar o `&` ) e suspendê-los (apertando ctrl+z ) após cada um começar a executar.

1. Verifique que apenas o processo `sleep` 300 está em execução com o comando `jobs` . Suspenda a execução desse processo.

1. Você vai precisar trazer o processo para foreground ( fg ) e suspendê-lo ( ctrl+z ), ou enviar um sinal.

1. Retome a execução do processo `sleep` 100 em background com o comando bg .
Termine a execução de todos os processos sleep (mate os processos) .

# (Bônus) - Parte IV - O despertar do terminal

E pra terminar com a energia óh, lá no alto, que tal aprender agora alguns comandos divertidos do Unix? ☝ 🎊

1. Abra o terminal e execute o comando sudo apt-get install cmatrix e, depois, execute o comando cmatrix . Quando estiver se sentindo como o Neo , aperte ctrl+c para voltar ao terminal;

1. Execute o comando sudo apt-get install fortune , após a instalação, crie um arquivo de texto chamado fortune.txt que contenha a sua sorte do dia. Utilize apenas uma linha de comando. Dica: use o comando fortune , e o operador > ;

1. Conte quantas palavras tem a frase da sua sorte do dia. Dica: use o comando wc ;

1. Execute o comando sudo apt-get install sl , após a instalação, execute o comando sl . Agora tente sl -F ;

1. Execute o comando sudo apt-get install cowsay , após a instalação, execute o comando cowsay e algo que você queira falar. Agora faça a vaquinha dizer a frase que está gravada no arquivo fortune.txt ;

1. Descubra os fatores primos usando o comando factor e em seguida o número 42 ;

1. Veja como fica a sua sorte do dia ao contrário. Dica: utilize o comando rev .

1. Execute o comando telnet towel.blinkenlights.nl e espere alguns segundos. Lembre-se que você tem mais exercícios para fazer! 😅
