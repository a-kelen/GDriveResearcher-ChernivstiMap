using GoogleDriveFileResearcher;
using GoogleDriveFileResearcher.DTO;
using GoogleDriveFileResearcher.Interfaces;

int interval = 1000 * 60 * 15;
const string SPREADSHEET_FILENAME = "collected_files";

ISourceService sourceService = new GoogleDriveService();
IOutputService outputService = new GoogleSpreadSheetService();

Timer timer = new Timer(TimerCallback, null, 0, interval);

Console.WriteLine("Press any key to exit...");
Console.ReadKey();
timer.Dispose();

void TimerCallback(object? state)
{
    Task.Run(RunDriveResearcher);
}

async Task RunDriveResearcher()
{
    Console.WriteLine($"Start new epoch at {DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")}");
    Console.WriteLine("Requesting files...");
    IEnumerable<FileDTO> files = await sourceService.GetFiles();
    Console.WriteLine($"Done. Received {files.Count()} file(s).");

    string? spreadSheetId = (await sourceService.GetFileByName(SPREADSHEET_FILENAME))?.Id;

    if (spreadSheetId == null)
    {
        var spreadsheet = await outputService.CreateSpreadsheet(SPREADSHEET_FILENAME);
        spreadSheetId = spreadsheet.SpreadsheetId;
    }

    var response = await outputService.Update(spreadSheetId, files);

    if (response)
    {
        Console.WriteLine($"Successful saved at {DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")}");
    }
}



