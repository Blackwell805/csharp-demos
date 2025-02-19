﻿using System;

namespace FrequentFlyers
{
    class Program
    {
        static void Main(string[] args)
        {
            // dataType varName = value
            int myNumber = 5;

            // Passenger IS a data type now.
            Passenger passenger1 = new Passenger("Neil", "M", 32);
            Passenger passenger2 = new Passenger("Brandon", "M");
            Passenger passenger3 = new Passenger("Darelle", "H");
            Passenger passenger4 = new Passenger("Austin", "H");
            Passenger passenger5 = new Passenger("Robert", "Wrathbone");


            Flight vacationFlight = new Flight("J4L4", "B24", "C16", "SNA", "DEN", new DateTime(2021, 5, 10, 6, 10, 20), new DateTime(2021, 5, 10, 8, 10, 20));

            passenger1.BookFlight(vacationFlight);
            passenger2.BookFlight(vacationFlight);
            passenger3.BookFlight(vacationFlight);
            passenger4.BookFlight(vacationFlight);
            passenger5.BookFlight(vacationFlight);


            passenger1.CheckIn(vacationFlight);
            passenger2.CheckIn(vacationFlight);
            passenger3.CheckIn(vacationFlight);
            passenger4.CheckIn(vacationFlight);
            passenger5.CheckIn(vacationFlight);

            passenger1.BoardFlight(vacationFlight);
            passenger2.BoardFlight(vacationFlight);
            passenger3.BoardFlight(vacationFlight);
            passenger4.BoardFlight(vacationFlight);
            passenger5.BoardFlight(vacationFlight);

            Console.WriteLine(vacationFlight.ManifestAll());
            Console.WriteLine(vacationFlight.CategorizeBoardedPassengersByLastName());
        }
    }


}
