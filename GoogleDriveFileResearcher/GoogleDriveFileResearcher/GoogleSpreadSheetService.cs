using Google.Apis.Services;
using Google.Apis.Sheets.v4;
using Google.Apis.Sheets.v4.Data;
using GoogleDriveFileResearcher.DTO;
using GoogleDriveFileResearcher.Interfaces;
using System.Reflection;
using static Google.Apis.Sheets.v4.SpreadsheetsResource.ValuesResource;

namespace GoogleDriveFileResearcher
{
    public class GoogleSpreadSheetService: IOutputService
    {
        private SheetsService _sheetsService;
        public GoogleSpreadSheetService()
        {
            _sheetsService = CreateSheetsService();
        }

        public async Task<bool> Update(string spreadsheetId, IEnumerable<FileDTO> files)
        {
            Type type = typeof(FileDTO);
            var properties = type.GetProperties(BindingFlags.Instance | BindingFlags.Public);
            var fields = properties.Where(p => p.GetGetMethod().IsDefined(typeof(System.Runtime.CompilerServices.CompilerGeneratedAttribute), false));
            List<object> columnNames = fields.Select(f => (object)f.Name).ToList();

            IList<IList<object>> values = new List<IList<object>>
            {
                columnNames
            };
            foreach (var file in files) 
            {
                var rowValues = fields.Select(field => field.GetValue(file) ?? "");
                values.Add(rowValues.ToList());
            }
            ValueRange requestBody = new ValueRange
            {
                Values = values
            };

            int endRow = values.Count;
            char endColumn = (char)('A' + fields.Count() - 1);
            string range = $"A1:{endColumn}{endRow}";


            UpdateRequest updateRequest = _sheetsService.Spreadsheets.Values.Update(requestBody, spreadsheetId, range);
            updateRequest.ValueInputOption = UpdateRequest.ValueInputOptionEnum.RAW;

            string clearRange = $"A:{endColumn}";

            try
            {
                await ClearColumn(spreadsheetId, clearRange);
                await updateRequest.ExecuteAsync();
                return true;
            } catch
            {
                return false;
            }
        }

        public async Task<Spreadsheet> CreateSpreadsheet(string filename)
        {
            Spreadsheet requestBody = new Spreadsheet
            {
                Properties = new SpreadsheetProperties
                {
                    Title = filename
                }
            };

            SpreadsheetsResource.CreateRequest request = _sheetsService.Spreadsheets.Create(requestBody);

            return await request.ExecuteAsync();
        }

        private async Task ClearColumn(string spreadsheetId, string columnRange)
        {
            ClearValuesRequest requestBody = new ClearValuesRequest();
            ClearRequest request = _sheetsService.Spreadsheets.Values.Clear(requestBody, spreadsheetId, columnRange);

            var response = await request.ExecuteAsync();
        }

        private static SheetsService CreateSheetsService()
        {
            var credential = GoogleUtils.GetUserSheetCredential();

            return new SheetsService(new BaseClientService.Initializer()
            {
                HttpClientInitializer = credential,
                ApplicationName = "GDriveResearcher"
            });
        }
    }
}
