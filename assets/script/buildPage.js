const week1 = [
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

const week2 = [
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

const week3 = [
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


// Semana 1
document.getElementById("container_1").innerHTML = week1
  .map(
    (week) =>
      `  <!-- ${week.semana} -->
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
            <!-- ${week.semana} -->`
  )
  .join("");
// Semana 1

// Semana 2
document.getElementById("container_2").innerHTML = week2
  .map(
    (week) =>
      `  <!-- ${week.semana} -->
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
            <!-- ${week.semana} -->`
  )
  .join("");
// Semana 2

// Semana 3
document.getElementById("container_3").innerHTML = week3
  .map(
    (week) =>
      `  <!-- ${week.semana} -->
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
            <!-- ${week.semana} -->`
  )
  .join("");
// Semana 3