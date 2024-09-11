/* EXERCÍCIS

3.1 - Quais informações você pode retirar baseando-se apenas na pilha de chamada de sauda?

R: sauda é chamada primeiro com o parâmetro de nome maggie. 
Depois sauda2 é chamada dentro de sauda. Essa que utiliza o mesmo parâmetro de nome maggie.
Neste ponto ela está incompleta, pois está parada no sauda2.
A atual função da chamada é sauda2.
Depois que essa função executar o que precisa, a chamada será retomada para sauda.

3.2 - O que acontece com a pilha quando a função recursiva fica executando infinitamente?

R: A pilha vai enchendo inifinitamente. Imagino que até o momento que ela não vai ter mais espaço.
Cada programa tem determinada quantidade de espaço... quando acaba, há um erro de overflow (estouro).

*/