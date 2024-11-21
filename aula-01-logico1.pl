humano(X) :- homem(X).
humano(X) :- mulher(X).
mulher(maria).
homem(joao).

%testes
%homem(X).
%mulher(X).
%humano(maria).
%humano(joao).
%findall(X, homem(X), L).