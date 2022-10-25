const module1 = [
  {
    semana: "semana 1",
    linkgit: "www.github.com.br",
    linkpages: "www.github.com.br",
  },
  {
    semana: "semana 2",
    linkgit: "www.github.com.br",
    linkpages: "www.github.com.br",
  },
  {
    semana: "semana 3",
    linkgit: "www.github.com.br",
    linkpages: "www.github.com.br",
  },
  {
    semana: "semana 4",
    linkgit: "www.github.com.br",
    linkpages: "www.github.com.br",
  },
  {
    semana: "semana 5",
    linkgit: "www.github.com.br",
    linkpages: "www.github.com.br",
  },
  {
    semana: "semana 6",
    linkgit: "www.github.com.br",
    linkpages: "www.github.com.br",
  },
  {
    semana: "semana 7",
    linkgit: "www.github.com.br",
    linkpages: "www.github.com.br",
  },
  {
    semana: "semana 8",
    linkgit: "www.github.com.br",
    linkpages: "www.github.com.br",
  },
  {
    semana: "semana 9",
    linkgit: "www.github.com.br",
    linkpages: "www.github.com.br",
  },
  {
    semana: "semana 10",
    linkgit: "www.github.com.br",
    linkpages: "www.github.com.br",
  },
  {
    semana: "semana 11",
    linkgit: "www.github.com.br",
    linkpages: "www.github.com.br",
  },
  {
    semana: "semana 12",
    linkgit: "www.github.com.br",
    linkpages: "www.github.com.br",
  },
  {
    semana: "semana 13",
    linkgit: "www.github.com.br",
    linkpages: "www.github.com.br",
  },
];

const module2 = [
  {
    semana: "semana 1",
    linkgit: "www.github.com.br",
    linkpages: "www.github.com.br",
  },
  {
    semana: "semana 2",
    linkgit: "www.github.com.br",
    linkpages: "www.github.com.br",
  },
  {
    semana: "semana 3",
    linkgit: "www.github.com.br",
    linkpages: "www.github.com.br",
  },
  {
    semana: "semana 4",
    linkgit: "www.github.com.br",
    linkpages: "www.github.com.br",
  },
  {
    semana: "semana 5",
    linkgit: "www.github.com.br",
    linkpages: "www.github.com.br",
  },
  {
    semana: "semana 6",
    linkgit: "www.github.com.br",
    linkpages: "www.github.com.br",
  },
  {
    semana: "semana 7",
    linkgit: "www.github.com.br",
    linkpages: "www.github.com.br",
  },
  {
    semana: "semana 8",
    linkgit: "www.github.com.br",
    linkpages: "www.github.com.br",
  },
  {
    semana: "semana 9",
    linkgit: "www.github.com.br",
    linkpages: "www.github.com.br",
  },
  {
    semana: "semana 10",
    linkgit: "www.github.com.br",
    linkpages: "www.github.com.br",
  },
  {
    semana: "semana 11",
    linkgit: "www.github.com.br",
    linkpages: "www.github.com.br",
  },
  {
    semana: "semana 12",
    linkgit: "www.github.com.br",
    linkpages: "www.github.com.br",
  },
  {
    semana: "semana 13",
    linkgit: "www.github.com.br",
    linkpages: "www.github.com.br",
  },
];

const module3 = [
  {
    semana: "semana 1",
    linkgit: "www.github.com.br",
    linkpages: "www.github.com.br",
  },
  {
    semana: "semana 2",
    linkgit: "www.github.com.br",
    linkpages: "www.github.com.br",
  },
  {
    semana: "semana 3",
    linkgit: "www.github.com.br",
    linkpages: "www.github.com.br",
  },
  {
    semana: "semana 4",
    linkgit: "www.github.com.br",
    linkpages: "www.github.com.br",
  },
  {
    semana: "semana 5",
    linkgit: "www.github.com.br",
    linkpages: "www.github.com.br",
  },
  {
    semana: "semana 6",
    linkgit: "www.github.com.br",
    linkpages: "www.github.com.br",
  },
  {
    semana: "semana 7",
    linkgit: "www.github.com.br",
    linkpages: "www.github.com.br",
  },
  {
    semana: "semana 8",
    linkgit: "www.github.com.br",
    linkpages: "www.github.com.br",
  },
  {
    semana: "semana 9",
    linkgit: "www.github.com.br",
    linkpages: "www.github.com.br",
  },
  {
    semana: "semana 10",
    linkgit: "www.github.com.br",
    linkpages: "www.github.com.br",
  },
  {
    semana: "semana 11",
    linkgit: "www.github.com.br",
    linkpages: "www.github.com.br",
  },
  {
    semana: "semana 12",
    linkgit: "www.github.com.br",
    linkpages: "www.github.com.br",
  },
  {
    semana: "semana 13",
    linkgit: "www.github.com.br",
    linkpages: "www.github.com.br",
  },
];

function montModule(week) {
  return `  <!-- ${week.semana} -->
            <div class="conteudotCard">
              <div class="atividade">
                <p href="#" target="_blank">${week.semana}</p>
              </div>
              <div class="links">
                <!-- Link Github -->
                <a href="${week.linkgit}" target="_blank">
                  <i class="ri-github-fill"></i>
                </a>   
                      <!-- Link da página -->
                <a href="${week.linkpages}" target="_blank">
                  <i class="ri-external-link-fill"></i>
        
                </a>

              </div>
            </div>
            <!-- ${week.semana} -->`;
}

// Modulo 1
document.getElementById("container_1").innerHTML = module1
  .map((week) => montModule(week))
  .join("");
// Modulo 1

// Modulo 2
document.getElementById("container_2").innerHTML = module2
  .map((week) => montModule(week))
  .join("");
// Modulo 2

// Modulo 3
document.getElementById("container_3").innerHTML = module3
  .map((week) => montModule(week))
  .join("");
// Modulo 3
