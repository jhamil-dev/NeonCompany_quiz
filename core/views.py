from django.shortcuts import render, redirect


def home(request):
    # 1. Se o usuário não está logado, mostra a tela inicial comum
    if not request.user.is_authenticated:
        return render(request, 'core/index.html')

    # 2. Se for o Administrador, manda direto para o Painel de Controle
    if request.user.is_superuser:
        return redirect('/admin/')

    # 3. Se for um aluno logado, manda para a área de boas-vindas do aluno
    return render(request, 'core/aluno_home.html')


# Mantenha o que já existe acima e adicione:
def pagina_teste(request):
    return render(request, 'core/teste.html')