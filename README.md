# challenge_one_gostack

# Desafio 1
<p></p>
Configure uma aplicação utilizando ExpressJS, Nunjucks, EditorConfig e ESLint.
<br>

Rotas
/ : Rota inicial que renderiza uma página com um formulário com um único campo age
que representa a idade do usuário;
<br>

/check : Rota chamada pelo formulário da página inicial via método POST que checa se a
idade do usuário é maior que 18 e o redireciona para a rota /major , caso contrário o
redireciona para a rota /minor (Lembre de enviar a idade como Query Param no
redirecionamento);
<br>

/major : Rota que renderiza uma página com o texto: Você é maior de idade e
possui x anos , onde x deve ser o valor informado no input do formulário;
<br>

/minor : Rota que renderiza uma página com o texto: Você é menor de idade e
possui x anos , onde x deve ser o valor informado no input do formulário;
<br>

Middlewares
Deve haver um middleware que é chamado nas rotas /major e /minor e checa se a
informação de idade não está presente nos Query Params. Se essa informação não existir deve
redirecionar o usuário para a página inicial com o formulário, caso contrário o middleware deve
apenas continuar com o fluxo normal.
<br>

Entrega
Esse desafio não precisa ser entregue e não receberá correção, mas você pode ver o
resultado do código do desafio feito por mim aqui: https://github.com/Rocketseat/bootcamp-n
odejs-desafio-01
<br>

PS.: Tente fazer o desafio sem olhar o código antes :)
PS2.: Após concluir o desafio, adicionar esse código ao seu Github é uma boa forma de demonstrar
seus conhecimentos para oportunidades futuras :D
Booooooora dev!!!
<br>

# “Sua única limitação é você mesmo”!
