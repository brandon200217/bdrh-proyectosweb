using System;
using System.Collections.Generic;

namespace aula
{
    class Program
    {
        static void Main(string[] args)
        {
            int i=0;
            List<personaEscuela> listAlumnos = new List<personaEscuela>();
            List<personaEscuela> listProfesores = new List<personaEscuela>();
            fabricaAula fabrica = new fabricaAula();
            
            Console.WriteLine("Numero de aula");
            string numeroAula = Console.ReadLine();
            
            aulaClase aulas = new aulaClase(2,"matemtica", numeroAula);
            int disponibilidad = aulas.Disponibilidad;
            

            while (i < disponibilidad)
            {   
                Console.WriteLine("Escriba A si es alumno o P si es profesor");
                string respuesta = Console.ReadLine();

                if (respuesta == "A")
                {
                    personaEscuela alumnoColegio = fabrica.obtenerPersonaColegio("alumno");
                    Console.WriteLine("Quieres ver tu datos. Y/N");
                    string valor = Console.ReadLine();
                    if (valor == "Y" || valor == "Yes" || valor == "yes")
                    {
                        string inasistencia = alumnoColegio.inasistencia();
                        Console.WriteLine(inasistencia);
                        alumno a = (alumno)alumnoColegio;
                        double calificacion = a.CalificacionTotal();
                        Console.WriteLine(calificacion+ " de promedio");
                    }

                    Console.WriteLine("Quieres entrar a un aula. Y/N");
                    string isIn = Console.ReadLine();
                    
                    if (isIn == "Y")
                    {
                        listAlumnos.Add(alumnoColegio);
                        Console.WriteLine("Espere unos minutos ...");
                    }
                    else
                    {
                        Console.WriteLine("Hoy tendras una falta entonces");
                        //metodo set para sumarle una falta 
                        //cuando el aula este listo podras entras aguarde un momento.
                    }
                }
                else
                {
                    personaEscuela profesorColegio = fabrica.obtenerPersonaColegio("profesor");

                    Console.WriteLine("Quieres ver tu datos. Y/N");
                    string valor = Console.ReadLine();
                    if (valor == "Y" || valor == "Yes" || valor == "yes")
                    {
                        //profesor.metodo
                        string inasistenciaProfesor = profesorColegio.inasistencia();
                        Console.WriteLine(inasistenciaProfesor);
                    }

                    Console.WriteLine("Quieres entrar a un aula. Y/N");
                    string isIn = Console.ReadLine();

                    if (isIn == "Y")
                    {
                        listProfesores.Add(profesorColegio);
                    }

                    else
                    {
                        Console.WriteLine("Hoy No asistira el profesor");
                        //cuando el aula este listo podras entras aguarde un momento.
                    }
                }
                i++;
            }
            aulas.recibirPersonas(listProfesores, listAlumnos);

        }
    }
}
