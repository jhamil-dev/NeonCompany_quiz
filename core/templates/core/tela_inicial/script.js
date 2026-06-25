const materias = [
    {
        nome: "Matemática",
        icone: "🧮",
        cor: "#dbeafe",
        pagina: "matematica.html"
    },
    {
        nome: "Português",
        icone: "📖",
        cor: "#ffe4e6",
        pagina: "portugues.html"
    },
    {
        nome: "Física",
        icone: "⚛️",
        cor: "#ede9fe",
        pagina: "fisica.html"
    },
    //Nessa parte irei criar um campo aberto para esbançamento no front-end. 

    {
      nome: "none", 
      icone: "none", 
      cor: "none"
    },

    

];

const subjects = document.getElementById("subjects");

materias.forEach(materia => {

    const card = document.createElement("a");

    card.href = materia.pagina;
    card.className = "subject-card";

    card.innerHTML = `
        <div
            class="subject-icon"
            style="background:${materia.cor}">
            ${materia.icone}
        </div>

        <div class="subject-info">
            <h3>${materia.nome}</h3>
            <p>Responder questões</p>
        </div>

        <div class="arrow">›</div>
    `;

    subjects.appendChild(card);
});