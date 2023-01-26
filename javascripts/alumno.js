const $alumno = document.getElementById("alumno");

const Alumno = (params) => {
  const img = `../img/teaching1/${params.name_img}.jpg`;
  const name = params.name;
  const position = params.position;
  const github = params.github;
  const link = params.link;
  console.log(img);
  return `
        <figure>
          <img src="${img}" />
          <div class="capa">
            <h4>${name}</h4>
            <p>
                ${position}
              <a href="${github}" target="_blank">
                <i class="icon fab fa-github"></i></a>
  
              <a href="${link}" target="_blank">
                <i class="icon fas fa-link"></i></a>
            </p>
          </div>
        </figure>
  `;
};

$alumno.innerHTML = Alumno({
  name_img: "eli",
  name: "liasdkfj",
  position: "none",
  github: "sdaf",
  link: "sdkalf",
});

// $alumno.innerHTML
