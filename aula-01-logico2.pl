pai(josé, joão).
pai(joão, júlio).
pai(júlio, jorge).

filho(X, Y) :- pai(Y, X).
avô(X, Y) :- pai(X, Z), pai(Z, Y).
neto(X, Y) :- pai(Z, X), pai(Y, Z).

%testes
pai(júlio, X).
filho(júlio, X).
avô(X, júlio).
julio(X, júlio).