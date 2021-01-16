export const movies = [
  {
    id: 1,
    title: "Łotr 1. Gwiezdne wojny",
    director: "Gareth Edwards",
    description:
      "Historia grupy rebeliantów zjednoczonych w śmiałej misji polegającej na kradzieży planów imperialnej Gwiazdy Śmierci.",
  },
  {
    id: 2,
    title: "Skazani na Shawshank",
    director: "Frank Darabont",
    description:
      "Adaptacja opowiadania Stephena Kinga. Niesłusznie skazany na dożywocie bankier, stara się przetrwać w brutalnym, więziennym świecie.",
  },
  {
    id: 3,
    title: "Shrek",
    director: "Joe Stillman",
    description:
      "By odzyskać swój dom, brzydki ogr z gadatliwym osłem wyruszają uwolnić piękną księżniczkę.",
  },
  {
    id: 4,
    title: "Speed",
    director: "Jan De Bont",
    description:
      "Terrorysta podkłada pod autobus bombę, która eksploduje, gdy pojazd zwolni poniżej 50 mil na godzinę. Niespodziewanie do jego wnętrza dostaje się policjant Jack Traven.",
  },
  {
    id: 5,
    title: "Chłopaki nie płaczą",
    director: "Olaf Lubaszenko",
    description:
      "Kuba, młody skrzypek, trafia w sam środek gangsterskich porachunków.",
  },
  {
    id: 6,
    title: "Symetria",
    director: "Konrad Niewolski",
    description:
      "Młody mężczyzna zostaje niesłusznie skazany za rzekomą napaść na staruszkę. W więzieniu stara się dołączyć do grupy grypsujących.",
  },
  {
    id: 7,
    title: "Zielona Mila",
    director: "Frank Darabont",
    description:
      "Emerytowany strażnik więzienny opowiada przyjaciółce o niezwykłym mężczyźnie, którego skazano na śmierć za zabójstwo dwóch 9-letnich dziewczynek.",
  },
  {
    id: 8,
    title: "Szeregowiec Ryan",
    director: "Steven Spielberg",
    description:
      "W poszukiwaniu zaginionego szeregowca wysłany zostaje doborowy oddział żołnierzy.",
  },
  {
    id: 9,
    title: "Pianista",
    director: "Roman Polański",
    description:
      "Podczas drugiej wojny światowej Władysław Szpilman, znakomity polski pianista, stara się przeżyć w okupowanej Warszawie.",
  },
];

export const getMovies = (term) => {
  let result = [];
  movies.forEach((movie) => {
    if (movie.title.includes(term) || movie.director.includes(term)) {
      result.push(movie);
    }
  });
  return result;
};
