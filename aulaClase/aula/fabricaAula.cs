using System;
using System.Collections.Generic;
using System.Text;

namespace aula
{
    class fabricaAula
    {
        public personaEscuela obtenerPersonaColegio(string tipoPersona)
        {
            switch (tipoPersona)
            {
                
                case "alumno":
                    Console.WriteLine("nombre");
                    string nombre = Console.ReadLine();
                    Console.WriteLine("edad");
                    string edad = Console.ReadLine();
                    Console.WriteLine("sexo: Escoja H si es hombre o M si es mujer");
                    string sexo = Console.ReadLine();
                    Console.WriteLine("calificacion sumada de los tres trimestres");
                    string calificacion = Console.ReadLine();
                    Console.WriteLine("inasistencia");
                    string inasistencia = Console.ReadLine();
                    alumno alumnoColegio = new alumno(nombre, Convert.ToInt32(edad), Convert.ToChar(sexo), Convert.ToDouble(calificacion), Convert.ToInt32(inasistencia));
                    
                    return alumnoColegio;

                case "profesor":
                    Console.WriteLine("nombre");
                    nombre = Console.ReadLine();
                    Console.WriteLine("edad");
                    edad = Console.ReadLine();
                    Console.WriteLine("sexo: Escoja H si es hombre o M si es mujer");
                    sexo = Console.ReadLine();
                    Console.WriteLine("materia dada");
                    string materia = Console.ReadLine();
                    Console.WriteLine("dias laborales");
                    string DiasLaboralesMes = Console.ReadLine();
                    Console.WriteLine("inasistencias");
                    string inasistencias = Console.ReadLine();


                    profesor profesorColegio = new profesor(nombre, Convert.ToInt32(edad), Convert.ToChar(sexo), materia, Convert.ToInt32(DiasLaboralesMes), Convert.ToInt32(inasistencias));
                    return profesorColegio;
                
                default:
                    return null;
            }
        }
    }
}
