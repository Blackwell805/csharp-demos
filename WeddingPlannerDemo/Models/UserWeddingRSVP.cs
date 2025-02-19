using System;
using System.ComponentModel.DataAnnotations;

namespace WeddingPlannerDemo.Models
{
    public class UserWeddingRSVP
    {
        [Key] // Primary Key
        public int UserWeddingRSVPId { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime UpdatedAt { get; set; } = DateTime.Now;

        /**********************************************************************
        Relationship properties: foreign keys and navigation properties. 
        Navigation properties are null unless .Include is used. 
        "Object reference not set to an instance of an object"
        will be the error if accessed but not included. 
        **********************************************************************/
        public int UserId { get; set; }
        public User Guest { get; set; }
        public int WeddingId { get; set; }
        public Wedding Wedding { get; set; }

    }
}