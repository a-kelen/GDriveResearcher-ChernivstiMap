namespace GoogleDriveFileResearcher.DTO
{
    public class FileDTO
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public DateTimeOffset? CreatedTime { get; set; }
        public DateTimeOffset? UpdatedTime { get; set; }
    }
}
