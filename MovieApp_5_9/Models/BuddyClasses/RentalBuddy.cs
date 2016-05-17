using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace MovieApp_5_9.Models
{
    [MetadataType(typeof(RentalBuddy))]
    public partial class Rental
    {
    }


    sealed class RentalBuddy
    {
        public int RentalID { get; set; }
        public int CustomerID { get; set; }
        public int MovieID { get; set; }
        [Display(Name = "Date Rented")]
        public System.DateTime DateRented { get; set; }

        //public virtual Customer Customer { get; set; }
        //public virtual Movy Movy { get; set; }
    }
}
