using GoogleDriveFileResearcher.DTO;

namespace GoogleDriveFileResearcher.Interfaces
{
    public interface ISourceService
    {
        public Task<IEnumerable<FileDTO>> GetFiles();
        public Task<FileDTO?> GetFileByName(string fileName);
    }
}
