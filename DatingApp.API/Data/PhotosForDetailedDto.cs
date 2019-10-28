using System;

namespace DatingApp.API.Data
{
    public class PhotosForDetailedDto
    {
        public int Id { get; set; }
        public string Url { get; set; }
        public string Description { get; set; }
        public DateTime KnownAs { get; set; }
        public bool IsMain { get; set; }
    }
}