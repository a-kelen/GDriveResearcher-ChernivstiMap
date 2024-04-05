using Google.Apis.Auth.OAuth2;
using Google.Apis.Auth.OAuth2.Flows;
using Google.Apis.Auth.OAuth2.Responses;
using Google.Apis.Sheets.v4;
using Google.Apis.Util.Store;
using static Google.Apis.Drive.v3.DriveService;

namespace GoogleDriveFileResearcher
{
    static class GoogleUtils
    {
        public static readonly string Username = "kalancha.artem@gmail.com";
        public static readonly string ApplicationName = "GDriveResearcher";

        public static UserCredential GetUserDriveCredential()
        {
            var tokenResponse = new TokenResponse
            {
                AccessToken = "ya29.a0Ad52N38tMBqSE6M4LfaGy8DicnAjxs9lhbX3ID0CBwBVWKVFYujr3MuHJgVHAf3VnUZqGWfkQFcLd08zhZTvF3A4_BPbGOkQDumj2zxFlGQcRN_rTUD0JJpGXm1rhndwX4drA7LGhcqY7Jw9-zv87GnXxw9e05M2Box3aCgYKASgSARESFQHGX2Mi5qvP9Zh7L9RU9i5-5JU3aw0171",
                RefreshToken = "1//04F7PBldJzsFaCgYIARAAGAQSNwF-L9IrMlxv8dV5xHeDkkqL2W1kNbT_HPdvBY1F_6plseDJbVq4tLTDmvu739EFbTIRxERpyA4",
            };

            var apiCodeFlow = new GoogleAuthorizationCodeFlow(new GoogleAuthorizationCodeFlow.Initializer
            {
                ClientSecrets = new ClientSecrets
                {
                    ClientId = "1076675183090-bu21a5prcq7j7bcqa27978seomeil1iq.apps.googleusercontent.com",
                    ClientSecret = "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"
                },
                Scopes = new[] { Scope.Drive },
                DataStore = new FileDataStore(ApplicationName)
            });


            var credential = new UserCredential(apiCodeFlow, Username, tokenResponse);

            return credential;
        }

        public static UserCredential GetUserSheetCredential()
        {
            UserCredential credential;
            using (var stream = new FileStream("client_secret.json", FileMode.Open, FileAccess.Read))
            {
                string[] scopes = { SheetsService.Scope.Spreadsheets };
                credential = GoogleWebAuthorizationBroker.AuthorizeAsync(
                    GoogleClientSecrets.Load(stream).Secrets,
                    scopes,
                    "user",
                    CancellationToken.None,
                    new FileDataStore(ApplicationName)).Result;
            }

            return credential;
        }
    }
}
