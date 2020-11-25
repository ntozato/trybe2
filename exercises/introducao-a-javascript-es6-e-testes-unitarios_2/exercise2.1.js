const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  //part 1

  const addNewKey = (obj, key, value) => {

obj[key] = value;

  }

  addNewKey(lesson2, 'turno', 'manhã');

//   console.log(lesson2);

  //part 2

  const keys = (obj) => Object.keys(obj);
//   console.log(keys(lesson3));

  //part 3

  const objLength = (obj) => Object.keys(obj).length;
//   console.log(objLength(lesson1));

  // part 4

  const objValue = (obj) => Object.values(obj);
//   console.log(objValue(lesson1));

  //part 5

  const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
  console.log(allLessons);

//part 6

const totalEstudantes = (allLessons) => {
    const est1 = allLessons.lesson1.numeroEstudantes;
    const est2 = allLessons.lesson2.numeroEstudantes;
    const est3 = allLessons.lesson3.numeroEstudantes;
    const total = est1 + est2 + est3;  
    
    return total;

}
// console.log(totalEstudantes(allLessons));

//part 7

const getValueByNumber = (obj, number) => Object.values(obj)[number];
// console.log(getValueByNumber);




