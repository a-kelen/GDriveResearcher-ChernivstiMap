using Google.Apis.Sheets.v4.Data;
using GoogleDriveFileResearcher.DTO;

namespace GoogleDriveFileResearcher.Interfaces
{
    public interface IOutputService
    {
        public Task<bool> Update(string spreadsheetId, IEnumerable<FileDTO> files);
        public Task<Spreadsheet> CreateSpreadsheet(string filename);
    }
}
