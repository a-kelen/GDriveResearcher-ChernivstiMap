using Google.Apis.Drive.v3;
using Google.Apis.Services;
using GoogleDriveFileResearcher.DTO;
using GoogleDriveFileResearcher.Interfaces;

namespace GoogleDriveFileResearcher
{
    public class GoogleDriveService: ISourceService
    {
        private DriveService _service;
        public GoogleDriveService()
        {
            this._service = GetService();
        }

        public async Task<IEnumerable<FileDTO>> GetFiles()
        {

            FilesResource.ListRequest listRequest = this._service.Files.List();
            listRequest.PageSize = 50;
            listRequest.Fields = "nextPageToken, files(id, name, createdTime, modifiedTime)";

            var result = new List<Google.Apis.Drive.v3.Data.File>();
            string pageToken = null;
            do
            {
                listRequest.PageToken = pageToken;
                var filesResult = await listRequest.ExecuteAsync();
                var files = filesResult.Files;
                pageToken = filesResult.NextPageToken;
                result.AddRange(files);
                Console.Write($"[{result.Count}] ");
            } while (pageToken != null);

            return result.Select(x => new FileDTO { 
                Id = x.Id, 
                Name = x.Name, 
                CreatedTime = x.CreatedTimeDateTimeOffset, 
                UpdatedTime = x.ModifiedTimeDateTimeOffset 
            }); ;
        }

        public async Task<FileDTO?> GetFileByName(string fileName)
        {
            try
            {
                FilesResource.ListRequest listRequest = _service.Files.List();
                listRequest.Q = $"name='{fileName}'";
                listRequest.Fields = "files(id, name)";
                var files = (await listRequest.ExecuteAsync()).Files;

                if (files != null && files.Count > 0)
                {
                    var file = files.First();
                    return new FileDTO
                    {
                        Id = file.Id,
                        Name = file.Name,
                    };
                }

                return null;
            }
            catch (Exception ex)
            {
                Console.WriteLine($"An error occurred: {ex.Message}");
                return null;
            }
        }

        private static DriveService GetService()
        {
            var credential = GoogleUtils.GetUserDriveCredential();


            var service = new DriveService(new BaseClientService.Initializer
            {
                HttpClientInitializer = credential,
                ApplicationName = GoogleUtils.ApplicationName,
            });

            return service;
        }
    }
}
