namespace DatingApp2.API.Dtos
{
    public class PhotosForListDto
    {
        
        public int Id { get; set; }
        public string Url { get; set; }
        public string Description { get; set; }
        public System.DateTime DateAdded { get; set; }
        public bool IsMain { get; set; }
    }
}